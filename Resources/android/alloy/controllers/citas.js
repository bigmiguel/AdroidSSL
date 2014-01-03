function Controller() {
    function actulizaCitas() {
        $.svCitas.removeAllChildren();
        Ti.API.info("----ActulizaCitas");
        var api = Alloy.CFG.urlAPI + "citas?idEmpresa=" + emp.idEmpresa + "&idEmpleado=" + emp.idEmpleado;
        var cliSSL = Ti.Network.createHTTPClient({
            onload: function() {
                Ti.API.info(this.responseText);
                var citas = JSON.parse(this.responseText);
                for (var i = 0; citas.length > i; i++) {
                    var cita = citas[i];
                    var vwCita = Alloy.createController("citaDetalle", cita).getView();
                    $.svCitas.add(vwCita);
                }
            },
            onerror: function() {
                var error = JSON.parse(this.responseText);
                alert(error.Message);
            }
        });
        cliSSL.open("GET", api, true);
        cliSSL.send();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "citas";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.citas = Ti.UI.createView({
        backgroundColor: "white",
        layout: "vertical",
        id: "citas"
    });
    $.__views.citas && $.addTopLevelView($.__views.citas);
    $.__views.lblCabecera = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#001f5b",
        text: "Mis Citas:",
        id: "lblCabecera",
        left: "0"
    });
    $.__views.citas.add($.__views.lblCabecera);
    $.__views.svCitas = Ti.UI.createScrollView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "svCitas",
        showHorizontalScrollIndicator: "true",
        top: "0",
        layout: "vertical"
    });
    $.__views.citas.add($.__views.svCitas);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.lblCabecera.applyProperties($.createStyle(Alloy.FuenteTitulo()));
    var emp = JSON.parse(Ti.App.Properties.getString("Empleado"));
    actulizaCitas();
    var posYini = 0;
    $.svCitas.addEventListener("touchstart", function(e) {
        posYini = e.y;
    });
    $.svCitas.addEventListener("touchend", function(e) {
        e.y - posYini > 40 && 0 == $.svCitas.contentOffset.Y && actulizaCitas();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;