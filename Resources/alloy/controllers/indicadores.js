function Controller() {
    function creaTablaIndicadores(indicadores) {
        var _indciadorActual;
        $.lblPeso.text = indicadores.peso;
        $.lblEstatura.text = indicadores.estatura;
        for (var i = 0; indicadores.indicadores.length > i; i++) {
            var ind = indicadores.indicadores[i];
            var rowIndicador = Alloy.createController("indicadorRow", ind).getView();
            rowIndicador.addEventListener("click", function(e) {
                Ti.API.info(_indciadorActual);
                if (null != _indciadorActual) {
                    Ti.API.info('------------indicador "Borrado"---------------');
                    _indciadorActual.close();
                    _indcwnIndicadoresiadorActual = null;
                }
                _indciadorActual = Alloy.createController("indicadorDetalle", {
                    nombreIndicador: e.row.nombreIndicador,
                    idIndicador: e.row.idIndicador
                }).getView();
                _indciadorActual.open({
                    modal: true,
                    navBarHidden: true
                });
            });
            $.tbIndicadores.appendRow(rowIndicador);
        }
        $.rowPeso.addEventListener("click", function(e) {
            _indciadorActual = Alloy.createController("indicadorDetalle", {
                nombreIndicador: e.row.nombreIndicador,
                idIndicador: e.row.idIndicador
            }).getView().open({
                modal: true,
                navBarHidden: true
            });
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "indicadores";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.rowPeso = Ti.UI.createTableViewRow({
        id: "rowPeso",
        idIndicador: "-1",
        nombreIndicador: "Peso"
    });
    var __alloyId45 = [];
    __alloyId45.push($.__views.rowPeso);
    $.__views.vwPeso = Ti.UI.createView({
        id: "vwPeso",
        layout: "horizontal"
    });
    $.__views.rowPeso.add($.__views.vwPeso);
    $.__views.__alloyId46 = Ti.UI.createView({
        height: "3dp",
        id: "__alloyId46"
    });
    $.__views.vwPeso.add($.__views.__alloyId46);
    $.__views.lblTPeso = Ti.UI.createLabel({
        width: "40%",
        height: Ti.UI.SIZE,
        color: "#001f5b",
        text: "Peso:",
        id: "lblTPeso"
    });
    $.__views.vwPeso.add($.__views.lblTPeso);
    $.__views.lblPeso = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#666",
        id: "lblPeso"
    });
    $.__views.vwPeso.add($.__views.lblPeso);
    $.__views.__alloyId47 = Ti.UI.createView({
        height: "3dp",
        id: "__alloyId47"
    });
    $.__views.vwPeso.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createTableViewRow({
        id: "__alloyId48"
    });
    __alloyId45.push($.__views.__alloyId48);
    $.__views.vwEstatura = Ti.UI.createView({
        id: "vwEstatura",
        layout: "horizontal"
    });
    $.__views.__alloyId48.add($.__views.vwEstatura);
    $.__views.__alloyId49 = Ti.UI.createView({
        height: "3dp",
        id: "__alloyId49"
    });
    $.__views.vwEstatura.add($.__views.__alloyId49);
    $.__views.lblTEstatura = Ti.UI.createLabel({
        width: "40%",
        height: Ti.UI.SIZE,
        color: "#001f5b",
        text: "Estatura:",
        id: "lblTEstatura"
    });
    $.__views.vwEstatura.add($.__views.lblTEstatura);
    $.__views.lblEstatura = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#666",
        id: "lblEstatura"
    });
    $.__views.vwEstatura.add($.__views.lblEstatura);
    $.__views.__alloyId50 = Ti.UI.createView({
        height: "3dp",
        id: "__alloyId50"
    });
    $.__views.vwEstatura.add($.__views.__alloyId50);
    $.__views.tbIndicadores = Ti.UI.createTableView({
        data: __alloyId45,
        id: "tbIndicadores"
    });
    $.__views.lblCabecera = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#001f5b",
        text: "Mis Indicadores:",
        id: "lblCabecera"
    });
    $.__views.tbIndicadores.headerView = $.__views.lblCabecera;
    $.__views.tbIndicadores && $.addTopLevelView($.__views.tbIndicadores);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.lblTPeso.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblTEstatura.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblPeso.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblEstatura.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblCabecera.applyProperties($.createStyle(Alloy.FuenteMedia()));
    var emp = JSON.parse(Ti.App.Properties.getString("Empleado"));
    var api = Alloy.CFG.urlAPI + "EmpleadoIndicadores?idEmpresa=" + emp.idEmpresa + "&numEmpleado=" + emp.numEmpleado;
    Ti.API.info(api);
    var indicadores = JSON.parse(Ti.App.Properties.getString("Indicadores"));
    if (null == indicadores) {
        var cliSSL = Ti.Network.createHTTPClient({
            onload: function() {
                Ti.API.info("Received text: " + this.responseText);
                Ti.App.Properties.setString("Indicadores", this.responseText);
                indicadores = JSON.parse(Ti.App.Properties.getString("Indicadores"));
                creaTablaIndicadores(indicadores);
                Ti.API.info(indicadores.ultimaActulizacion);
            },
            onerror: function() {
                var error = JSON.parse(this.responseText);
                alert(error.Message);
            }
        });
        cliSSL.open("GET", api, true);
        cliSSL.setRequestHeader("Accept", "application/json");
        cliSSL.send();
    } else creaTablaIndicadores(indicadores);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;