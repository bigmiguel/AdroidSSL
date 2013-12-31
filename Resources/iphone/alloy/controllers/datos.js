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
    $.__views.__alloyId17 = Ti.UI.createImageView({
        width: "30%",
        height: "22%",
        image: "/images/empDefault.png",
        id: "__alloyId17"
    });
    $.__views.datos.add($.__views.__alloyId17);
    $.__views.lblCabecera = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#001f5b",
        text: "Mis Datos:",
        id: "lblCabecera"
    });
    var __alloyId20 = [];
    $.__views.__alloyId21 = Ti.UI.createTableViewSection({
        id: "__alloyId21"
    });
    __alloyId20.push($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createTableViewRow({
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId22"
    });
    $.__views.__alloyId21.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createView({
        height: "3dp",
        id: "__alloyId23"
    });
    $.__views.__alloyId22.add($.__views.__alloyId23);
    $.__views.lblTNombre = Ti.UI.createLabel({
        width: "40%",
        height: Ti.UI.SIZE,
        color: "#001f5b",
        text: "Nombre:",
        id: "lblTNombre"
    });
    $.__views.__alloyId22.add($.__views.lblTNombre);
    $.__views.lblNombre = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#666",
        text: "Miguel",
        id: "lblNombre"
    });
    $.__views.__alloyId22.add($.__views.lblNombre);
    $.__views.__alloyId24 = Ti.UI.createView({
        height: "3dp",
        id: "__alloyId24"
    });
    $.__views.__alloyId22.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createTableViewRow({
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId25"
    });
    $.__views.__alloyId21.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createView({
        height: "3dp",
        id: "__alloyId26"
    });
    $.__views.__alloyId25.add($.__views.__alloyId26);
    $.__views.lblTEdad = Ti.UI.createLabel({
        width: "40%",
        height: Ti.UI.SIZE,
        color: "#001f5b",
        text: "Edad:",
        id: "lblTEdad"
    });
    $.__views.__alloyId25.add($.__views.lblTEdad);
    $.__views.lblEdad = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#666",
        text: "Miguel",
        id: "lblEdad"
    });
    $.__views.__alloyId25.add($.__views.lblEdad);
    $.__views.__alloyId27 = Ti.UI.createView({
        height: "3dp",
        id: "__alloyId27"
    });
    $.__views.__alloyId25.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createTableViewRow({
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId28"
    });
    $.__views.__alloyId21.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createView({
        height: "3dp",
        id: "__alloyId29"
    });
    $.__views.__alloyId28.add($.__views.__alloyId29);
    $.__views.lblTEmpleado = Ti.UI.createLabel({
        width: "40%",
        height: Ti.UI.SIZE,
        color: "#001f5b",
        text: "Num. Empleado:",
        id: "lblTEmpleado"
    });
    $.__views.__alloyId28.add($.__views.lblTEmpleado);
    $.__views.lblNEmpleado = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#666",
        text: "Miguel",
        id: "lblNEmpleado"
    });
    $.__views.__alloyId28.add($.__views.lblNEmpleado);
    $.__views.__alloyId30 = Ti.UI.createView({
        height: "3dp",
        id: "__alloyId30"
    });
    $.__views.__alloyId28.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createTableViewRow({
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId31"
    });
    $.__views.__alloyId21.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createView({
        height: "3dp",
        id: "__alloyId32"
    });
    $.__views.__alloyId31.add($.__views.__alloyId32);
    $.__views.lblTCentroLaboral = Ti.UI.createLabel({
        width: "40%",
        height: Ti.UI.SIZE,
        color: "#001f5b",
        text: "Centro Laboral:",
        id: "lblTCentroLaboral"
    });
    $.__views.__alloyId31.add($.__views.lblTCentroLaboral);
    $.__views.lblNomCentro = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#666",
        text: "Miguel",
        id: "lblNomCentro"
    });
    $.__views.__alloyId31.add($.__views.lblNomCentro);
    $.__views.__alloyId33 = Ti.UI.createView({
        height: "3dp",
        id: "__alloyId33"
    });
    $.__views.__alloyId31.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createTableViewRow({
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId34"
    });
    $.__views.__alloyId21.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createView({
        height: "3dp",
        id: "__alloyId35"
    });
    $.__views.__alloyId34.add($.__views.__alloyId35);
    $.__views.lblTArea = Ti.UI.createLabel({
        width: "40%",
        height: Ti.UI.SIZE,
        color: "#001f5b",
        text: "Area:",
        id: "lblTArea"
    });
    $.__views.__alloyId34.add($.__views.lblTArea);
    $.__views.lblNomArea = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#666",
        text: "Miguel",
        id: "lblNomArea"
    });
    $.__views.__alloyId34.add($.__views.lblNomArea);
    $.__views.__alloyId36 = Ti.UI.createView({
        height: "3dp",
        id: "__alloyId36"
    });
    $.__views.__alloyId34.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createTableViewRow({
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId37"
    });
    $.__views.__alloyId21.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createView({
        height: "3dp",
        id: "__alloyId38"
    });
    $.__views.__alloyId37.add($.__views.__alloyId38);
    $.__views.lblTPuesto = Ti.UI.createLabel({
        width: "40%",
        height: Ti.UI.SIZE,
        color: "#001f5b",
        text: "Puesto:",
        id: "lblTPuesto"
    });
    $.__views.__alloyId37.add($.__views.lblTPuesto);
    $.__views.lblNomPuesto = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#666",
        text: "Miguel",
        id: "lblNomPuesto"
    });
    $.__views.__alloyId37.add($.__views.lblNomPuesto);
    $.__views.__alloyId39 = Ti.UI.createView({
        height: "3dp",
        id: "__alloyId39"
    });
    $.__views.__alloyId37.add($.__views.__alloyId39);
    $.__views.__alloyId18 = Ti.UI.createTableView({
        data: __alloyId20,
        headerView: $.__views.lblCabecera,
        id: "__alloyId18"
    });
    $.__views.datos.add($.__views.__alloyId18);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var emp = JSON.parse(Ti.App.Properties.getString("Empleado"));
    $.lblNombre.text = emp.nombre;
    $.lblNomCentro.text = emp.nomCentroLaboral;
    $.lblEdad.text = emp.edad;
    $.lblNEmpleado.text = emp.numEmpleado;
    $.lblNomArea.text = emp.nomArea;
    $.lblNomPuesto.text = emp.nomPuesto;
    $.lblNombre.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblNomCentro.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblEdad.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblNEmpleado.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblNomArea.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblNomPuesto.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblTNombre.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblTEdad.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblTEmpleado.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblTCentroLaboral.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblTArea.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblTPuesto.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblCabecera.applyProperties($.createStyle(Alloy.FuenteTitulo()));
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;