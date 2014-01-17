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
        id: "cargando"
    });
    $.__views.cargando && $.addTopLevelView($.__views.cargando);
    $.__views.actIndicador = Ti.UI.createActivityIndicator({
        opacity: "1",
        id: "actIndicador"
    });
    $.__views.cargando.add($.__views.actIndicador);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.actIndicador.show();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;