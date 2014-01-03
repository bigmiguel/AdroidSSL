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
    $.__views.vGroup = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: "10%",
        bottom: "10%",
        id: "vGroup"
    });
    $.__views.row.add($.__views.vGroup);
    $.__views.rowUP = Ti.UI.createView({
        id: "rowUP",
        height: "3dp"
    });
    $.__views.vGroup.add($.__views.rowUP);
    $.__views.title = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#FFF",
        left: "48dp",
        id: "title"
    });
    $.__views.vGroup.add($.__views.title);
    $.__views.rowDown = Ti.UI.createView({
        id: "rowDown",
        height: "3dp"
    });
    $.__views.vGroup.add($.__views.rowDown);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var parametros = arguments[0] || {};
    $.icon.image = parametros.icon;
    $.title.text = parametros.titulo || "";
    this.vista = $.title.vista = $.icon.vista = $.row.vista = $.vGroup.vista = $.rowUP.vista = $.rowDown.vista = parametros.vista || "";
    this.params = $.title.params = $.icon.params = $.row.params = $.vGroup.params = $.rowUP.params = $.rowDown.params = parametros.params || "";
    $.title.applyProperties($.createStyle(Alloy.FuenteMedia()));
    $.row.addEventListener("postlayout", ajustaVista);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;