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
                    _indciadorActual = null;
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
    $.__views.wnIndicadores = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "wnIndicadores"
    });
    $.__views.wnIndicadores && $.addTopLevelView($.__views.wnIndicadores);
    $.__views.rowPeso = Ti.UI.createTableViewRow({
        id: "rowPeso",
        idIndicador: "-1",
        nombreIndicador: "Peso"
    });
    var __alloyId57 = [];
    __alloyId57.push($.__views.rowPeso);
    $.__views.__alloyId58 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId58"
    });
    $.__views.rowPeso.add($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createLabel({
        width: "40%",
        height: Ti.UI.SIZE,
        color: "#001f5b",
        font: {
            fontSize: "20%",
            fontWeight: "bold",
            font: "PT Sans"
        },
        text: "Peso:",
        id: "__alloyId59"
    });
    $.__views.__alloyId58.add($.__views.__alloyId59);
    $.__views.lblPeso = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#666",
        font: {
            fontSize: "25%",
            fontWeight: "bold",
            font: "PT Sans"
        },
        id: "lblPeso"
    });
    $.__views.__alloyId58.add($.__views.lblPeso);
    $.__views.__alloyId60 = Ti.UI.createTableViewRow({
        id: "__alloyId60"
    });
    __alloyId57.push($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId61"
    });
    $.__views.__alloyId60.add($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createLabel({
        width: "40%",
        height: Ti.UI.SIZE,
        color: "#001f5b",
        font: {
            fontSize: "20%",
            fontWeight: "bold",
            font: "PT Sans"
        },
        text: "Estatura:",
        id: "__alloyId62"
    });
    $.__views.__alloyId61.add($.__views.__alloyId62);
    $.__views.lblEstatura = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#666",
        font: {
            fontSize: "25%",
            fontWeight: "bold",
            font: "PT Sans"
        },
        id: "lblEstatura"
    });
    $.__views.__alloyId61.add($.__views.lblEstatura);
    $.__views.tbIndicadores = Ti.UI.createTableView({
        data: __alloyId57,
        id: "tbIndicadores"
    });
    $.__views.wnIndicadores.add($.__views.tbIndicadores);
    $.__views.__alloyId56 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#001f5b",
        font: {
            fontSize: "25%",
            fontWeight: "bold",
            font: "PT Sans"
        },
        text: "Mis Indicadores:",
        id: "__alloyId56"
    });
    $.__views.tbIndicadores.headerView = $.__views.__alloyId56;
    exports.destroy = function() {};
    _.extend($, $.__views);
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
    $.wnIndicadores.addEventListener("focus", function() {
        Ti.API.info("----------------Disparo--------------");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;