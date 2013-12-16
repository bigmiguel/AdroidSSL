function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "redMedicos";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.mapview = Alloy.Globals.Map.createView({
        id: "mapview",
        ns: "Alloy.Globals.Map"
    });
    $.__views.mapview && $.addTopLevelView($.__views.mapview);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var mountainView = Alloy.Globals.Map.createAnnotation({
        latitude: 37.390749,
        longitude: -122.081651,
        title: "Appcelerator Headquarters",
        subtitle: "Mountain View, CA",
        pincolor: Alloy.Globals.Map.ANNOTATION_RED,
        myid: 1
    });
    $.mapview.region = {
        latitude: 33.74511,
        longitude: -84.38993,
        latitudeDelta: .01,
        longitudeDelta: .01
    };
    $.mapview.addAnnotation(mountainView);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;