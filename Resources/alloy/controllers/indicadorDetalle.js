function Controller() {
    function cargaIndicador(fecha) {
        var db = Ti.Database.open("SSL");
        var api = Alloy.CFG.urlAPI + "HistoricoIndicador?idEmpleado=" + emp.idEmpleado + "&idIndicador=" + idIndicador + "&ultimaActulizadion=" + fecha;
        Ti.API.info(api);
        db.execute("CREATE TABLE IF NOT EXISTS indicadores(idIndicador INTEGER, valor TEXT, fecha TEXT)");
        var cliSSL = Ti.Network.createHTTPClient({
            onload: function() {
                var indicadores = JSON.parse(this.responseText);
                Ti.API.info("Received text: " + this.responseText);
                for (var i = 0; indicadores.length > i; i++) {
                    var indicador = indicadores[i];
                    db.execute("INSERT INTO indicadores (idIndicador, valor, fecha) VALUES(?,?,?)", indicador.idIndicador, indicador.valor, indicador.fecha);
                }
                Ti.App.Properties.setObject("ultimaActulizacion", Date.now());
                db.close();
                graficaIndicador();
            },
            onerror: function() {
                var error = JSON.parse(this.responseText);
                db.close();
                alert(error.Message);
            }
        });
        cliSSL.open("GET", api, true);
        cliSSL.send();
    }
    function graficaIndicador() {
        var db = Ti.Database.open("SSL");
        var resIndicadores = db.execute("SELECT cast(valor as real) valor, fecha FROM indicadores where idIndicador = ? ORDER BY fecha DESC Limit 10", idIndicador);
        var _labels = [];
        var _data = [];
        while (resIndicadores.isValidRow()) {
            _labels.push(resIndicadores.fieldByName("fecha"));
            _data.push(resIndicadores.fieldByName("valor"));
            resIndicadores.next();
        }
        var fuente = {
            labels: _labels.reverse(),
            data: _data.reverse(),
            nombreIndicador: nombreIndicador
        };
        resIndicadores.close();
        db.close();
        Ti.App.fireEvent("app:cargaIndicador", fuente);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "indicadorDetalle";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.wnIndDet = Ti.UI.createWindow({
        id: "wnIndDet"
    });
    $.__views.wnIndDet && $.addTopLevelView($.__views.wnIndDet);
    $.__views.wbvGrafica = Ti.UI.createWebView({
        id: "wbvGrafica",
        url: "/html/indicador.html",
        height: "60%",
        width: Ti.UI.FILL
    });
    $.__views.wnIndDet.add($.__views.wbvGrafica);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("date");
    var emp = JSON.parse(Ti.App.Properties.getString("Empleado"));
    var parametros = arguments[0] || {};
    var idIndicador = parametros.idIndicador;
    var nombreIndicador = parametros.nombreIndicador;
    var paginaCargada = function() {
        Ti.API.info("------------carga indicador view---------------");
        Ti.App.removeEventListener("app:paginaCargada", paginaCargada);
        var ultimaActulizacion = Ti.App.Properties.getObject("ultimaActulizacion");
        if (null == ultimaActulizacion || Date.parse(ultimaActulizacion) > Date.now().add({
            days: -5
        })) cargaIndicador(""); else {
            var db = Ti.Database.open("SSL");
            var maxDate = "";
            var resFecMax = db.execute("SELECT max(cast(fecha as date)), fecha FROM indicadores WHERE idIndicador = ?", idIndicador);
            resFecMax.isValidRow() && (maxDate = resFecMax.fieldByName("fecha"));
            resFecMax.close();
            db.close();
            null == maxDate ? cargaIndicador("") : Date.parse(maxDate) > Date.now().add({
                days: -5
            }) ? cargaIndicador(maxDate) : graficaIndicador();
        }
    };
    Ti.App.addEventListener("app:paginaCargada", paginaCargada);
    $.wnIndDet.addEventListener("androidback", function(e) {
        e.source.close();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;