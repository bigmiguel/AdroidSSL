function Controller() {
    function actulizaCitas() {
        $.svCitas.removeAllChildren();
        Ti.API.info("----ActulizaCitas");
        var api = Alloy.CFG.urlAPI + "citas?idEmpresa=" + emp.idEmpresa + "&idEmpleado=" + emp.idEmpleado;
        var cliSSL = Ti.Network.createHTTPClient({
            onload: function() {
                var citas = JSON.parse(this.responseText);
                for (var i = 0; citas.length > i; i++) {
                    Ti.API.info("---Entro--");
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
        top: "0",
        height: "15%",
        id: "citas"
    });
    $.__views.citas && $.addTopLevelView($.__views.citas);
    $.__views.__alloyId24 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#001f5b",
        font: {
            fontSize: "25%",
            fontWeight: "bold",
            font: "PT Sans"
        },
        text: "Mis Citas:",
        left: "0",
        id: "__alloyId24"
    });
    $.__views.citas.add($.__views.__alloyId24);
    $.__views.svCitas = Ti.UI.createScrollView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "svCitas",
        showVerticalScrollIndicator: "true",
        top: "0",
        layout: "vertical"
    });
    $.__views.svCitas && $.addTopLevelView($.__views.svCitas);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var emp = JSON.parse(Ti.App.Properties.getString("Empleado"));
    actulizaCitas();
    var posYini = 0;
    $.svCitas.addEventListener("touchstart", function(e) {
        posYini = e.y;
    });
    $.svCitas.addEventListener("touchend", function(e) {
        e.y - posYini > 40 && 0 == $.svCitas.contentOffset.y && actulizaCitas();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;