function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "datos";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.datos = Ti.UI.createView({
        layout: "vertical",
        id: "datos"
    });
    $.__views.datos && $.addTopLevelView($.__views.datos);
    $.__views.__alloyId26 = Ti.UI.createImageView({
        width: "33%",
        height: "25%",
        image: "/images/empDefault.png",
        id: "__alloyId26"
    });
    $.__views.datos.add($.__views.__alloyId26);
    $.__views.__alloyId30 = Ti.UI.createTableViewSection({
        id: "__alloyId30"
    });
    var __alloyId31 = [];
    __alloyId31.push($.__views.__alloyId30);
    $.__views.__alloyId32 = Ti.UI.createTableViewRow({
        touchEnabled: false,
        id: "__alloyId32"
    });
    $.__views.__alloyId30.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId33"
    });
    $.__views.__alloyId32.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createLabel({
        width: "40%",
        height: Ti.UI.SIZE,
        color: "#001f5b",
        font: {
            fontSize: "20%",
            fontWeight: "bold",
            font: "PT Sans"
        },
        text: "Nombre:",
        id: "__alloyId34"
    });
    $.__views.__alloyId33.add($.__views.__alloyId34);
    $.__views.lblNombre = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#666",
        font: {
            fontSize: "20%",
            fontWeight: "bold",
            font: "PT Sans"
        },
        text: "Miguel",
        id: "lblNombre"
    });
    $.__views.__alloyId33.add($.__views.lblNombre);
    $.__views.__alloyId35 = Ti.UI.createTableViewRow({
        touchEnabled: false,
        id: "__alloyId35"
    });
    $.__views.__alloyId30.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId36"
    });
    $.__views.__alloyId35.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createLabel({
        width: "40%",
        height: Ti.UI.SIZE,
        color: "#001f5b",
        font: {
            fontSize: "20%",
            fontWeight: "bold",
            font: "PT Sans"
        },
        text: "Edad:",
        id: "__alloyId37"
    });
    $.__views.__alloyId36.add($.__views.__alloyId37);
    $.__views.lblEdad = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#666",
        font: {
            fontSize: "20%",
            fontWeight: "bold",
            font: "PT Sans"
        },
        text: "Miguel",
        id: "lblEdad"
    });
    $.__views.__alloyId36.add($.__views.lblEdad);
    $.__views.__alloyId38 = Ti.UI.createTableViewRow({
        touchEnabled: false,
        id: "__alloyId38"
    });
    $.__views.__alloyId30.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId39"
    });
    $.__views.__alloyId38.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createLabel({
        width: "40%",
        height: Ti.UI.SIZE,
        color: "#001f5b",
        font: {
            fontSize: "20%",
            fontWeight: "bold",
            font: "PT Sans"
        },
        text: "Num. Empleado:",
        id: "__alloyId40"
    });
    $.__views.__alloyId39.add($.__views.__alloyId40);
    $.__views.lblNEmpleado = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#666",
        font: {
            fontSize: "20%",
            fontWeight: "bold",
            font: "PT Sans"
        },
        text: "Miguel",
        id: "lblNEmpleado"
    });
    $.__views.__alloyId39.add($.__views.lblNEmpleado);
    $.__views.__alloyId41 = Ti.UI.createTableViewRow({
        touchEnabled: false,
        id: "__alloyId41"
    });
    $.__views.__alloyId30.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId42"
    });
    $.__views.__alloyId41.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createLabel({
        width: "40%",
        height: Ti.UI.SIZE,
        color: "#001f5b",
        font: {
            fontSize: "20%",
            fontWeight: "bold",
            font: "PT Sans"
        },
        text: "Centro Laboral:",
        id: "__alloyId43"
    });
    $.__views.__alloyId42.add($.__views.__alloyId43);
    $.__views.lblNomCentro = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#666",
        font: {
            fontSize: "20%",
            fontWeight: "bold",
            font: "PT Sans"
        },
        text: "Miguel",
        id: "lblNomCentro"
    });
    $.__views.__alloyId42.add($.__views.lblNomCentro);
    $.__views.__alloyId44 = Ti.UI.createTableViewRow({
        touchEnabled: false,
        id: "__alloyId44"
    });
    $.__views.__alloyId30.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId45"
    });
    $.__views.__alloyId44.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createLabel({
        width: "40%",
        height: Ti.UI.SIZE,
        color: "#001f5b",
        font: {
            fontSize: "20%",
            fontWeight: "bold",
            font: "PT Sans"
        },
        text: "Area:",
        id: "__alloyId46"
    });
    $.__views.__alloyId45.add($.__views.__alloyId46);
    $.__views.lblNomArea = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#666",
        font: {
            fontSize: "20%",
            fontWeight: "bold",
            font: "PT Sans"
        },
        text: "Miguel",
        id: "lblNomArea"
    });
    $.__views.__alloyId45.add($.__views.lblNomArea);
    $.__views.__alloyId47 = Ti.UI.createTableViewRow({
        touchEnabled: false,
        id: "__alloyId47"
    });
    $.__views.__alloyId30.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId48"
    });
    $.__views.__alloyId47.add($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createLabel({
        width: "40%",
        height: Ti.UI.SIZE,
        color: "#001f5b",
        font: {
            fontSize: "20%",
            fontWeight: "bold",
            font: "PT Sans"
        },
        text: "Puesto:",
        id: "__alloyId49"
    });
    $.__views.__alloyId48.add($.__views.__alloyId49);
    $.__views.lblNomPuesto = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#666",
        font: {
            fontSize: "20%",
            fontWeight: "bold",
            font: "PT Sans"
        },
        text: "Miguel",
        id: "lblNomPuesto"
    });
    $.__views.__alloyId48.add($.__views.lblNomPuesto);
    $.__views.__alloyId27 = Ti.UI.createTableView({
        data: __alloyId31,
        id: "__alloyId27"
    });
    $.__views.datos.add($.__views.__alloyId27);
    $.__views.__alloyId29 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#001f5b",
        font: {
            fontSize: "25%",
            fontWeight: "bold",
            font: "PT Sans"
        },
        text: "Mis Datos:",
        id: "__alloyId29"
    });
    $.__views.__alloyId27.headerView = $.__views.__alloyId29;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var emp = JSON.parse(Ti.App.Properties.getString("Empleado"));
    $.lblNombre.text = emp.nombre;
    $.lblNomCentro.text = emp.nomCentroLaboral;
    $.lblEdad.text = emp.edad;
    $.lblNEmpleado.text = emp.numEmpleado;
    $.lblNomArea.text = emp.nomArea;
    $.lblNomPuesto.text = emp.nomPuesto;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;