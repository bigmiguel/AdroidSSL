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
        width: "200px",
        height: "100px",
        message: "Cargando...",
        font: {
            fontSize: "16px"
        },
        color: "#FFF",
        left: "50%",
        top: "50%",
        style: Titanium.UI.ActivityIndicatorStyle.DARK,
        id: "__alloyId0"
    });
    $.__views.cargando.add($.__views.__alloyId0);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;