function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "indicadorRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.__alloyId35 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId35"
    });
    $.__views.row.add($.__views.__alloyId35);
    $.__views.lblIndicador = Ti.UI.createLabel({
        width: "40%",
        height: Ti.UI.SIZE,
        color: "#001f5b",
        id: "lblIndicador"
    });
    $.__views.__alloyId35.add($.__views.lblIndicador);
    $.__views.lblValor = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#666",
        text: "Miguel",
        id: "lblValor"
    });
    $.__views.__alloyId35.add($.__views.lblValor);
    $.__views.imgBien = Ti.UI.createImageView({
        right: "1dp",
        top: "10%",
        id: "imgBien",
        height: "80%"
    });
    $.__views.row.add($.__views.imgBien);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var parametros = arguments[0] || {};
    $.row.idIndicador = parametros.idIndicador;
    $.row.nombreIndicador = $.lblIndicador.text = parametros.nombreIndicador;
    $.lblValor.text = parametros.valor;
    $.imgBien.image = "/images/" + (parametros.bien ? "pro" : "contra") + ".png";
    $.lblIndicador.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblValor.applyProperties($.createStyle(Alloy.Fuente()));
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;