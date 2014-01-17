function Controller() {
    function ajustaVista() {
        var tamanio = 10 * ($.lblTNombre.size.height + 9) + $.lblCabecera.size.height + Alloy.espacioMenu();
        $.tbDatos.setHeight(tamanio);
        Ti.App.fireEvent("ocultaCargando");
    }
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
    $.__views.__alloyId16 = Ti.UI.createImageView({
        width: "30%",
        height: "22%",
        image: "/images/empDefault.png",
        id: "__alloyId16"
    });
    $.__views.datos.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createImageView({
        image: "/images/sprite.png",
        layout: "center",
        id: "__alloyId17"
    });
    $.__views.datos.add($.__views.__alloyId17);
    $.__views.lblCabecera = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#FFF",
        textAlign: "center",
        text: "Mis Datos",
        id: "lblCabecera"
    });
    var __alloyId19 = [];
    $.__views.__alloyId20 = Ti.UI.createTableViewSection({
        id: "__alloyId20"
    });
    __alloyId19.push($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createTableViewRow({
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId21"
    });
    $.__views.__alloyId20.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createView({
        height: "3dp",
        id: "__alloyId22"
    });
    $.__views.__alloyId21.add($.__views.__alloyId22);
    $.__views.lblTNombre = Ti.UI.createLabel({
        width: "40%",
        height: Ti.UI.SIZE,
        color: "#FFF",
        lef: "2%",
        text: "Nombre:",
        id: "lblTNombre"
    });
    $.__views.__alloyId21.add($.__views.lblTNombre);
    $.__views.lblNombre = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#FFF",
        text: "Miguel",
        id: "lblNombre"
    });
    $.__views.__alloyId21.add($.__views.lblNombre);
    $.__views.__alloyId23 = Ti.UI.createView({
        height: "3dp",
        id: "__alloyId23"
    });
    $.__views.__alloyId21.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createTableViewRow({
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId24"
    });
    $.__views.__alloyId20.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createView({
        height: "3dp",
        id: "__alloyId25"
    });
    $.__views.__alloyId24.add($.__views.__alloyId25);
    $.__views.lblTEdad = Ti.UI.createLabel({
        width: "40%",
        height: Ti.UI.SIZE,
        color: "#FFF",
        lef: "2%",
        text: "Edad:",
        id: "lblTEdad"
    });
    $.__views.__alloyId24.add($.__views.lblTEdad);
    $.__views.lblEdad = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#FFF",
        text: "Miguel",
        id: "lblEdad"
    });
    $.__views.__alloyId24.add($.__views.lblEdad);
    $.__views.__alloyId26 = Ti.UI.createView({
        height: "3dp",
        id: "__alloyId26"
    });
    $.__views.__alloyId24.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createTableViewRow({
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId27"
    });
    $.__views.__alloyId20.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createView({
        height: "3dp",
        id: "__alloyId28"
    });
    $.__views.__alloyId27.add($.__views.__alloyId28);
    $.__views.lblTEmpleado = Ti.UI.createLabel({
        width: "40%",
        height: Ti.UI.SIZE,
        color: "#FFF",
        lef: "2%",
        text: "Num. Empleado:",
        id: "lblTEmpleado"
    });
    $.__views.__alloyId27.add($.__views.lblTEmpleado);
    $.__views.lblNEmpleado = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#FFF",
        text: "Miguel",
        id: "lblNEmpleado"
    });
    $.__views.__alloyId27.add($.__views.lblNEmpleado);
    $.__views.__alloyId29 = Ti.UI.createView({
        height: "3dp",
        id: "__alloyId29"
    });
    $.__views.__alloyId27.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createTableViewRow({
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId30"
    });
    $.__views.__alloyId20.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createView({
        height: "3dp",
        id: "__alloyId31"
    });
    $.__views.__alloyId30.add($.__views.__alloyId31);
    $.__views.lblTCentroLaboral = Ti.UI.createLabel({
        width: "40%",
        height: Ti.UI.SIZE,
        color: "#FFF",
        lef: "2%",
        text: "Centro Laboral:",
        id: "lblTCentroLaboral"
    });
    $.__views.__alloyId30.add($.__views.lblTCentroLaboral);
    $.__views.lblNomCentro = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#FFF",
        text: "Miguel",
        id: "lblNomCentro"
    });
    $.__views.__alloyId30.add($.__views.lblNomCentro);
    $.__views.__alloyId32 = Ti.UI.createView({
        height: "3dp",
        id: "__alloyId32"
    });
    $.__views.__alloyId30.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createTableViewRow({
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId33"
    });
    $.__views.__alloyId20.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createView({
        height: "3dp",
        id: "__alloyId34"
    });
    $.__views.__alloyId33.add($.__views.__alloyId34);
    $.__views.lblTArea = Ti.UI.createLabel({
        width: "40%",
        height: Ti.UI.SIZE,
        color: "#FFF",
        lef: "2%",
        text: "Area:",
        id: "lblTArea"
    });
    $.__views.__alloyId33.add($.__views.lblTArea);
    $.__views.lblNomArea = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#FFF",
        text: "Miguel",
        id: "lblNomArea"
    });
    $.__views.__alloyId33.add($.__views.lblNomArea);
    $.__views.__alloyId35 = Ti.UI.createView({
        height: "3dp",
        id: "__alloyId35"
    });
    $.__views.__alloyId33.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createTableViewRow({
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId36"
    });
    $.__views.__alloyId20.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createView({
        height: "3dp",
        id: "__alloyId37"
    });
    $.__views.__alloyId36.add($.__views.__alloyId37);
    $.__views.lblTPuesto = Ti.UI.createLabel({
        width: "40%",
        height: Ti.UI.SIZE,
        color: "#FFF",
        lef: "2%",
        text: "Puesto:",
        id: "lblTPuesto"
    });
    $.__views.__alloyId36.add($.__views.lblTPuesto);
    $.__views.lblNomPuesto = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#FFF",
        text: "Miguel",
        id: "lblNomPuesto"
    });
    $.__views.__alloyId36.add($.__views.lblNomPuesto);
    $.__views.__alloyId38 = Ti.UI.createView({
        height: "3dp",
        id: "__alloyId38"
    });
    $.__views.__alloyId36.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createTableViewRow({
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId39"
    });
    $.__views.__alloyId20.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createView({
        height: "3dp",
        id: "__alloyId40"
    });
    $.__views.__alloyId39.add($.__views.__alloyId40);
    $.__views.lblTNSS = Ti.UI.createLabel({
        width: "40%",
        height: Ti.UI.SIZE,
        color: "#FFF",
        lef: "2%",
        text: "Nº Seguro Social:",
        id: "lblTNSS"
    });
    $.__views.__alloyId39.add($.__views.lblTNSS);
    $.__views.lblNSS = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#FFF",
        text: "Miguel",
        id: "lblNSS"
    });
    $.__views.__alloyId39.add($.__views.lblNSS);
    $.__views.__alloyId41 = Ti.UI.createView({
        height: "3dp",
        id: "__alloyId41"
    });
    $.__views.__alloyId39.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createTableViewRow({
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId42"
    });
    $.__views.__alloyId20.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createView({
        height: "3dp",
        id: "__alloyId43"
    });
    $.__views.__alloyId42.add($.__views.__alloyId43);
    $.__views.lblTPoliza = Ti.UI.createLabel({
        width: "40%",
        height: Ti.UI.SIZE,
        color: "#FFF",
        lef: "2%",
        text: "Nº Poliza:",
        id: "lblTPoliza"
    });
    $.__views.__alloyId42.add($.__views.lblTPoliza);
    $.__views.lblPoliza = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#FFF",
        text: "Miguel",
        id: "lblPoliza"
    });
    $.__views.__alloyId42.add($.__views.lblPoliza);
    $.__views.__alloyId44 = Ti.UI.createView({
        height: "3dp",
        id: "__alloyId44"
    });
    $.__views.__alloyId42.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createTableViewRow({
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId45"
    });
    $.__views.__alloyId20.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createView({
        height: "3dp",
        id: "__alloyId46"
    });
    $.__views.__alloyId45.add($.__views.__alloyId46);
    $.__views.lblTAseguradora = Ti.UI.createLabel({
        width: "40%",
        height: Ti.UI.SIZE,
        color: "#FFF",
        lef: "2%",
        text: "Aseguradora:",
        id: "lblTAseguradora"
    });
    $.__views.__alloyId45.add($.__views.lblTAseguradora);
    $.__views.lblAseguradora = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#FFF",
        text: "Miguel",
        id: "lblAseguradora"
    });
    $.__views.__alloyId45.add($.__views.lblAseguradora);
    $.__views.__alloyId47 = Ti.UI.createView({
        height: "3dp",
        id: "__alloyId47"
    });
    $.__views.__alloyId45.add($.__views.__alloyId47);
    $.__views.tbDatos = Ti.UI.createTableView({
        backgroundColor: "#21485D",
        width: "98%",
        left: "1%",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderWidth: "0.5dp",
        borderRadius: 10,
        separatorColor: "#21485D",
        top: "-4dp",
        data: __alloyId19,
        headerView: $.__views.lblCabecera,
        id: "tbDatos"
    });
    $.__views.datos.add($.__views.tbDatos);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var emp = JSON.parse(Ti.App.Properties.getString("Empleado"));
    $.lblNombre.text = emp.nombre;
    $.lblNomCentro.text = emp.nomCentroLaboral;
    $.lblEdad.text = emp.edad;
    $.lblNEmpleado.text = emp.numEmpleado;
    $.lblNomArea.text = emp.nomArea;
    $.lblNomPuesto.text = emp.nomPuesto;
    $.lblNSS.text = emp.numSS;
    $.lblPoliza.text = emp.numPoliza;
    $.lblAseguradora.text = emp.nomAseguradora;
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
    $.lblTNSS.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblNSS.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblTPoliza.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblPoliza.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblTAseguradora.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblAseguradora.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblCabecera.applyProperties($.createStyle(Alloy.FuenteTitulo()));
    $.tbDatos.addEventListener("postlayout", ajustaVista);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;