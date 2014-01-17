function Controller() {
    function creaTablaIndicadores(indicadores) {
        var _indciadorActual;
        $.lblPeso.text = indicadores.peso;
        $.lblEstatura.text = indicadores.estatura;
        total = indicadores.indicadores.length + 3;
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
        ajustaVista();
    }
    function ajustaVista() {
        var tamanio = ($.lblTPeso.size.height + 15) * total + $.lblCabecera.size.height + Alloy.espacioMenu();
        $.tbIndicadores.setHeight(tamanio);
        Ti.App.fireEvent("ocultaCargando");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "indicadores";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.indicadores = Ti.UI.createScrollView({
        layout: "vertical",
        id: "indicadores"
    });
    $.__views.indicadores && $.addTopLevelView($.__views.indicadores);
    $.__views.__alloyId54 = Ti.UI.createImageView({
        width: "30%",
        height: "22%",
        image: "/images/info.png",
        id: "__alloyId54"
    });
    $.__views.indicadores.add($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createImageView({
        image: "/images/sprite.png",
        layout: "center",
        id: "__alloyId55"
    });
    $.__views.indicadores.add($.__views.__alloyId55);
    $.__views.lblCabecera = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#FFF",
        textAlign: "center",
        text: "Mis Indicadores",
        id: "lblCabecera"
    });
    var __alloyId57 = [];
    $.__views.rowPeso = Ti.UI.createTableViewRow({
        id: "rowPeso",
        idIndicador: "-1",
        nombreIndicador: "Peso"
    });
    __alloyId57.push($.__views.rowPeso);
    $.__views.vwPeso = Ti.UI.createView({
        id: "vwPeso",
        layout: "horizontal"
    });
    $.__views.rowPeso.add($.__views.vwPeso);
    $.__views.__alloyId58 = Ti.UI.createView({
        height: "3dp",
        id: "__alloyId58"
    });
    $.__views.vwPeso.add($.__views.__alloyId58);
    $.__views.lblTPeso = Ti.UI.createLabel({
        width: "40%",
        height: Ti.UI.SIZE,
        color: "#FFF",
        lef: "2%",
        text: "Peso:",
        id: "lblTPeso"
    });
    $.__views.vwPeso.add($.__views.lblTPeso);
    $.__views.lblPeso = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#FFF",
        id: "lblPeso"
    });
    $.__views.vwPeso.add($.__views.lblPeso);
    $.__views.__alloyId59 = Ti.UI.createView({
        height: "3dp",
        id: "__alloyId59"
    });
    $.__views.vwPeso.add($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createTableViewRow({
        id: "__alloyId60"
    });
    __alloyId57.push($.__views.__alloyId60);
    $.__views.vwEstatura = Ti.UI.createView({
        id: "vwEstatura",
        layout: "horizontal"
    });
    $.__views.__alloyId60.add($.__views.vwEstatura);
    $.__views.__alloyId61 = Ti.UI.createView({
        height: "3dp",
        id: "__alloyId61"
    });
    $.__views.vwEstatura.add($.__views.__alloyId61);
    $.__views.lblTEstatura = Ti.UI.createLabel({
        width: "40%",
        height: Ti.UI.SIZE,
        color: "#FFF",
        lef: "2%",
        text: "Estatura:",
        id: "lblTEstatura"
    });
    $.__views.vwEstatura.add($.__views.lblTEstatura);
    $.__views.lblEstatura = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#FFF",
        id: "lblEstatura"
    });
    $.__views.vwEstatura.add($.__views.lblEstatura);
    $.__views.__alloyId62 = Ti.UI.createView({
        height: "3dp",
        id: "__alloyId62"
    });
    $.__views.vwEstatura.add($.__views.__alloyId62);
    $.__views.tbIndicadores = Ti.UI.createTableView({
        backgroundColor: "#21485D",
        width: "98%",
        left: "1%",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderWidth: "0.5dp",
        borderRadius: 10,
        separatorColor: "#21485D",
        top: "-4dp",
        data: __alloyId57,
        headerView: $.__views.lblCabecera,
        id: "tbIndicadores"
    });
    $.__views.indicadores.add($.__views.tbIndicadores);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.lblTPeso.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblTEstatura.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblPeso.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblEstatura.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblCabecera.applyProperties($.createStyle(Alloy.FuenteTitulo()));
    var emp = JSON.parse(Ti.App.Properties.getString("Empleado"));
    var api = Alloy.CFG.urlAPI + "EmpleadoIndicadores?idEmpresa=" + emp.idEmpresa + "&numEmpleado=" + emp.numEmpleado;
    var total = 0;
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
    $.tbIndicadores.addEventListener("postlayout", ajustaVista);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;