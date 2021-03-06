function Controller() {
    function ajustaVista() {
        $.row.setHeight($.title.size.height + Alloy.espacioMenu());
        $.row.removeEventListener("postlayout", ajustaVista);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menurow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createView({
        selectedBackgroundColor: "#001f5b",
        selectedColor: "#FFF",
        color: "#FFF",
        backgroundColor: "none",
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.icon = Ti.UI.createImageView({
        left: "5dp",
        id: "icon",
        height: "80%",
        top: "10%"
    });
    $.__views.row.add($.__views.icon);
    $.__views.__alloyId53 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10%",
        bottom: "10%",
        id: "__alloyId53"
    });
    $.__views.row.add($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createView({
        height: "3dp",
        id: "__alloyId54"
    });
    $.__views.__alloyId53.add($.__views.__alloyId54);
    $.__views.title = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#FFF",
        left: "48dp",
        id: "title"
    });
    $.__views.__alloyId53.add($.__views.title);
    $.__views.__alloyId55 = Ti.UI.createView({
        height: "3dp",
        id: "__alloyId55"
    });
    $.__views.__alloyId53.add($.__views.__alloyId55);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var parametros = arguments[0] || {};
    $.icon.image = parametros.icon;
    $.title.text = parametros.titulo || "";
    this.vista = $.title.vista = $.icon.vista = $.row.vista = parametros.vista || "";
    $.title.applyProperties($.createStyle(Alloy.FuenteMedia()));
    $.row.addEventListener("postlayout", ajustaVista);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;