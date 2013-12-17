function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "redMedicos";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.mapContainer = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        backgroundColor: "white",
        id: "mapContainer"
    });
    $.__views.mapContainer && $.addTopLevelView($.__views.mapContainer);
    $.__views.mapview = Alloy.Globals.Map.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        zIndex: 3,
        mapType: Alloy.Globals.Map.NORMAL_TYPE,
        regionFit: true,
        top: 0,
        backgroundColor: "white",
        id: "mapview",
        ns: "Alloy.Globals.Map"
    });
    $.__views.mapContainer.add($.__views.mapview);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var rc = Alloy.Globals.Map.isGooglePlayServicesAvailable();
    switch (rc) {
      case Alloy.Globals.Map.SUCCESS:
        Ti.API.info("Google Play services is installed.");
        break;

      case Alloy.Globals.Map.SERVICE_MISSING:
        alert("Google Play services is missing. Please install Google Play services from the Google Play store.");
        break;

      case Alloy.Globals.Map.SERVICE_VERSION_UPDATE_REQUIRED:
        alert("Google Play services is out of date. Please update Google Play services.");
        break;

      case Alloy.Globals.Map.SERVICE_DISABLED:
        alert("Google Play services is disabled. Please enable Google Play services.");
        break;

      case Alloy.Globals.Map.SERVICE_INVALID:
        alert("Google Play services cannot be authenticated. Reinstall Google Play services.");
        break;

      default:
        alert("Unknown error.");
    }
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
        latitudeDelta: .5,
        longitudeDelta: .5
    };
    $.mapview.setLocation({
        latitude: 37.337681,
        longitude: -122.038193,
        animate: true,
        latitudeDelta: .04,
        longitudeDelta: .04
    });
    $.mapview.userLocation = true;
    $.mapview.userLocationButton = true;
    $.mapview.addAnnotation(mountainView);
    setTimeout(function() {}, 2e3);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;