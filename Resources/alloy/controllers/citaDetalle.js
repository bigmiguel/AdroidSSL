function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "citaDetalle";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.citaDetalle = Ti.UI.createView({
        top: "0",
        height: "33%",
        id: "citaDetalle"
    });
    $.__views.citaDetalle && $.addTopLevelView($.__views.citaDetalle);
    $.__views.__alloyId1 = Ti.UI.createImageView({
        image: "/images/calendar.png",
        top: "30%",
        left: "0",
        id: "__alloyId1"
    });
    $.__views.citaDetalle.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createView({
        layout: "vertical",
        top: "0",
        left: "35",
        id: "__alloyId2"
    });
    $.__views.citaDetalle.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createView({
        height: "1px",
        backgroundColor: "#001f5b",
        id: "__alloyId3"
    });
    $.__views.__alloyId2.add($.__views.__alloyId3);
    $.__views.__alloyId5 = Ti.UI.createTableViewRow({
        id: "__alloyId5"
    });
    var __alloyId6 = [];
    __alloyId6.push($.__views.__alloyId5);
    $.__views.__alloyId7 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId7"
    });
    $.__views.__alloyId5.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        width: "30%",
        height: Ti.UI.SIZE,
        color: "#001f5b",
        font: {
            fontSize: "12%"
        },
        text: "Fecha:",
        id: "__alloyId8"
    });
    $.__views.__alloyId7.add($.__views.__alloyId8);
    $.__views.lblFecha = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#666",
        font: {
            fontSize: "12%"
        },
        id: "lblFecha"
    });
    $.__views.__alloyId7.add($.__views.lblFecha);
    $.__views.__alloyId9 = Ti.UI.createTableViewRow({
        id: "__alloyId9"
    });
    __alloyId6.push($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        width: "30%",
        height: Ti.UI.SIZE,
        color: "#001f5b",
        font: {
            fontSize: "12%"
        },
        text: "Horario:",
        id: "__alloyId11"
    });
    $.__views.__alloyId10.add($.__views.__alloyId11);
    $.__views.lblHorario = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#666",
        font: {
            fontSize: "12%"
        },
        id: "lblHorario"
    });
    $.__views.__alloyId10.add($.__views.lblHorario);
    $.__views.__alloyId12 = Ti.UI.createTableViewRow({
        id: "__alloyId12"
    });
    __alloyId6.push($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId13"
    });
    $.__views.__alloyId12.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        width: "30%",
        height: Ti.UI.SIZE,
        color: "#001f5b",
        font: {
            fontSize: "12%"
        },
        text: "Consultorio:",
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    $.__views.lblConsultorio = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#666",
        font: {
            fontSize: "12%"
        },
        id: "lblConsultorio"
    });
    $.__views.__alloyId13.add($.__views.lblConsultorio);
    $.__views.__alloyId15 = Ti.UI.createTableViewRow({
        id: "__alloyId15"
    });
    __alloyId6.push($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        width: "30%",
        height: Ti.UI.SIZE,
        color: "#001f5b",
        font: {
            fontSize: "12%"
        },
        text: "Medico:",
        id: "__alloyId17"
    });
    $.__views.__alloyId16.add($.__views.__alloyId17);
    $.__views.lblMedico = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#666",
        font: {
            fontSize: "12%"
        },
        id: "lblMedico"
    });
    $.__views.__alloyId16.add($.__views.lblMedico);
    $.__views.__alloyId18 = Ti.UI.createTableViewRow({
        id: "__alloyId18"
    });
    __alloyId6.push($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId19"
    });
    $.__views.__alloyId18.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createLabel({
        width: "30%",
        height: Ti.UI.SIZE,
        color: "#001f5b",
        font: {
            fontSize: "12%"
        },
        text: "Estatus:",
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    $.__views.lblEstatus = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#666",
        font: {
            fontSize: "12%"
        },
        id: "lblEstatus"
    });
    $.__views.__alloyId19.add($.__views.lblEstatus);
    $.__views.__alloyId21 = Ti.UI.createTableViewRow({
        id: "__alloyId21"
    });
    __alloyId6.push($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId22"
    });
    $.__views.__alloyId21.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createLabel({
        width: "30%",
        height: Ti.UI.SIZE,
        color: "#001f5b",
        font: {
            fontSize: "12%"
        },
        text: "Especialidad:",
        id: "__alloyId23"
    });
    $.__views.__alloyId22.add($.__views.__alloyId23);
    $.__views.lblEspecialidad = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#666",
        font: {
            fontSize: "12%"
        },
        id: "lblEspecialidad"
    });
    $.__views.__alloyId22.add($.__views.lblEspecialidad);
    $.__views.__alloyId4 = Ti.UI.createTableView({
        data: __alloyId6,
        allowsSelection: "false",
        separatorColor: "transparent",
        id: "__alloyId4"
    });
    $.__views.__alloyId2.add($.__views.__alloyId4);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var parametros = arguments[0] || {};
    $.lblFecha.text = parametros.fecInicio;
    $.lblHorario.text = parametros.horario;
    $.lblConsultorio.text = parametros.nomConsultorio;
    $.lblMedico.text = parametros.nomMedico.length > 20 ? parametros.nomMedico.substring(0, 17) + "..." : parametros.nomMedico;
    $.lblEstatus.text = parametros.nomEstatusAgenda;
    $.lblEspecialidad.text = parametros.especialidad;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;