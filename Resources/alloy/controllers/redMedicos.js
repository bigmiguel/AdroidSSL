function Controller() {
    function UbicacionActual() {
        Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
        Titanium.Geolocation.distanceFilter = 10;
        Ti.Geolocation.purpose = "Mostrar tu posición actual";
        Titanium.Geolocation.getCurrentPosition(function(e) {
            if (!e.success || e.error) return;
            longitudG = e.coords.longitude;
            latitudG = e.coords.latitude;
        });
        var newRegion = {
            latitude: latitudG,
            longitude: longitudG,
            animate: true,
            latitudeDelta: .03,
            longitudeDelta: .03
        };
        $.mapview.setLocation(newRegion);
        anotacionUsuario.latitude = latitudG;
        anotacionUsuario.longitude = longitudG;
    }
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
        left: "0%",
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
    var calidad = Alloy.Dimension() + ".png";
    var latitudG = 22.71539;
    var longitudG = -101.25489;
    $.mapview.region = {
        latitude: latitudG,
        longitude: longitudG,
        latitudeDelta: 25,
        longitudeDelta: 30
    };
    $.mapview.userLocation = true;
    $.mapview.userLocationButton = true;
    var anotacionUsuario = Alloy.Globals.Map.createAnnotation({
        latitude: latitudG,
        longitude: longitudG,
        image: "/images/user" + calidad,
        animate: true,
        title: "Tu Ubicaciòn Actual"
    });
    $.mapview.addAnnotation(anotacionUsuario);
    setTimeout(function() {
        UbicacionActual();
    }, 3e3);
    setTimeout(function() {
        UbicacionActual();
    }, 1e3);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;