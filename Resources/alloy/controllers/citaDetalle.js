function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "citaDetalle";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.vwCita = Ti.UI.createView({
        id: "vwCita",
        top: "0"
    });
    $.__views.vwCita && $.addTopLevelView($.__views.vwCita);
    $.__views.__alloyId1 = Ti.UI.createImageView({
        image: "/images/calendar.png",
        top: "23%",
        left: "0",
        width: "15%",
        id: "__alloyId1"
    });
    $.__views.vwCita.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createView({
        layout: "vertical",
        top: "0",
        left: "16%",
        id: "__alloyId2"
    });
    $.__views.vwCita.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createView({
        height: "1px",
        backgroundColor: "#001f5b",
        id: "__alloyId3"
    });
    $.__views.__alloyId2.add($.__views.__alloyId3);
    $.__views.rowFecha = Ti.UI.createTableViewRow({
        id: "rowFecha"
    });
    var __alloyId5 = [];
    __alloyId5.push($.__views.rowFecha);
    $.__views.__alloyId6 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId6"
    });
    $.__views.rowFecha.add($.__views.__alloyId6);
    $.__views.lblTFecha = Ti.UI.createLabel({
        width: "30%",
        height: Ti.UI.SIZE,
        color: "#001f5b",
        text: "Fecha:",
        id: "lblTFecha"
    });
    $.__views.__alloyId6.add($.__views.lblTFecha);
    $.__views.lblFecha = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#666",
        id: "lblFecha"
    });
    $.__views.__alloyId6.add($.__views.lblFecha);
    $.__views.__alloyId7 = Ti.UI.createTableViewRow({
        id: "__alloyId7"
    });
    __alloyId5.push($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId8"
    });
    $.__views.__alloyId7.add($.__views.__alloyId8);
    $.__views.lblTHorario = Ti.UI.createLabel({
        width: "30%",
        height: Ti.UI.SIZE,
        color: "#001f5b",
        text: "Horario:",
        id: "lblTHorario"
    });
    $.__views.__alloyId8.add($.__views.lblTHorario);
    $.__views.lblHorario = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#666",
        id: "lblHorario"
    });
    $.__views.__alloyId8.add($.__views.lblHorario);
    $.__views.__alloyId9 = Ti.UI.createTableViewRow({
        id: "__alloyId9"
    });
    __alloyId5.push($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    $.__views.lblTConsultorio = Ti.UI.createLabel({
        width: "30%",
        height: Ti.UI.SIZE,
        color: "#001f5b",
        text: "Consultorio:",
        id: "lblTConsultorio"
    });
    $.__views.__alloyId10.add($.__views.lblTConsultorio);
    $.__views.lblConsultorio = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#666",
        id: "lblConsultorio"
    });
    $.__views.__alloyId10.add($.__views.lblConsultorio);
    $.__views.__alloyId11 = Ti.UI.createTableViewRow({
        id: "__alloyId11"
    });
    __alloyId5.push($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    $.__views.lblTMedico = Ti.UI.createLabel({
        width: "30%",
        height: Ti.UI.SIZE,
        color: "#001f5b",
        text: "Medico:",
        id: "lblTMedico"
    });
    $.__views.__alloyId12.add($.__views.lblTMedico);
    $.__views.lblMedico = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#666",
        id: "lblMedico"
    });
    $.__views.__alloyId12.add($.__views.lblMedico);
    $.__views.__alloyId13 = Ti.UI.createTableViewRow({
        id: "__alloyId13"
    });
    __alloyId5.push($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    $.__views.lblTEstatus = Ti.UI.createLabel({
        width: "30%",
        height: Ti.UI.SIZE,
        color: "#001f5b",
        text: "Estatus:",
        id: "lblTEstatus"
    });
    $.__views.__alloyId14.add($.__views.lblTEstatus);
    $.__views.lblEstatus = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#666",
        id: "lblEstatus"
    });
    $.__views.__alloyId14.add($.__views.lblEstatus);
    $.__views.__alloyId15 = Ti.UI.createTableViewRow({
        id: "__alloyId15"
    });
    __alloyId5.push($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    $.__views.lblTEspecialidad = Ti.UI.createLabel({
        width: "30%",
        height: Ti.UI.SIZE,
        color: "#001f5b",
        text: "Especialidad:",
        id: "lblTEspecialidad"
    });
    $.__views.__alloyId16.add($.__views.lblTEspecialidad);
    $.__views.lblEspecialidad = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#666",
        id: "lblEspecialidad"
    });
    $.__views.__alloyId16.add($.__views.lblEspecialidad);
    $.__views.__alloyId4 = Ti.UI.createTableView({
        data: __alloyId5,
        allowsSelection: "false",
        separatorColor: "transparent",
        id: "__alloyId4"
    });
    $.__views.__alloyId2.add($.__views.__alloyId4);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.lblFecha.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblHorario.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblConsultorio.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblMedico.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblEstatus.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblEspecialidad.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblTFecha.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblTHorario.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblTConsultorio.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblTMedico.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblTEstatus.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblTEspecialidad.applyProperties($.createStyle(Alloy.Fuente()));
    var parametros = arguments[0] || {};
    $.lblFecha.text = parametros.fecInicio;
    $.lblHorario.text = parametros.horario;
    $.lblConsultorio.text = parametros.nomConsultorio;
    $.lblMedico.text = parametros.nomMedico.length > 20 ? parametros.nomMedico.substring(0, 17) + "..." : parametros.nomMedico;
    $.lblEstatus.text = parametros.nomEstatusAgenda;
    $.lblEspecialidad.text = parametros.especialidad;
    var alto = .25 * Titanium.Platform.displayCaps.platformHeight;
    $.vwCita.setHeight(alto);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;