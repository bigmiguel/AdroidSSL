function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "cargando";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.cargando = Ti.UI.createWindow({
        fullscreen: "true",
        backgroundColor: "bla4ck",
        id: "cargando"
    });
    $.__views.cargando && $.addTopLevelView($.__views.cargando);
    $.__views.__alloyId0 = Ti.UI.createActivityIndicator({
        color: "#001f5b",
        style: Titanium.UI.ActivityIndicatorStyle.DARK,
        height: 60,
        width: Ti.UI.FILL,
        top: "50%",
        message: "Cargando...",
        font: {
            fontSize: "16px"
        },
        left: "50%",
        id: "__alloyId0"
    });
    $.__views.cargando.add($.__views.__alloyId0);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;