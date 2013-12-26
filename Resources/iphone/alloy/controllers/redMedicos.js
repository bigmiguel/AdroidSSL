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
            latitudeDelta: .02,
            longitudeDelta: .02
        };
        $.mapview.setLocation(newRegion);
        anotacionUsuario.latitude = latitudG;
        anotacionUsuario.longitude = longitudG;
    }
    function downMedicosCercanos() {
        var url = "http://www.medicallhome.com/MedicallHomeWeb/index.php/Api/BuscaGeo";
        var xhr = Titanium.Network.createHTTPClient({
            onload: function() {
                try {
                    obj = JSON.parse(this.responseText);
                    $.mapview.removeAllAnnotations();
                    $.mapview.addAnnotation(anotacionUsuario);
                    if (null == obj.mresultados) alert("no hay resultados"); else {
                        for (var i = 0; obj.mresultados.length > i; i++) {
                            var uno = obj.mresultados[i];
                            var mapaLatitudR = uno.latitud;
                            var mapaLongitudR = uno.longitud;
                            var prueba = 111.11 * Math.pow(Math.pow(mapaLongitudR - longitudG, 2) + Math.pow(mapaLatitudR - latitudG, 2), .5);
                            if (distancia > prueba) {
                                distancia = prueba;
                                deltaautomatico = 2 * Math.pow(Math.pow(mapaLongitudR - longitudG, 2) + Math.pow(mapaLatitudR - latitudG, 2), .5);
                            }
                            var annotationDoctor = Alloy.Globals.Map.createAnnotation({
                                latitude: mapaLatitudR,
                                longitude: mapaLongitudR,
                                image: "/images/doc" + calidad,
                                animate: true,
                                title: "" + uno.nomCompleto,
                                leftButton: "/images/docleft" + calidad,
                                myId: uno.id,
                                rightButton: "/images/der" + calidad,
                                subtitle: "Servicio Médico"
                            });
                            $.mapview.addAnnotation(annotationDoctor);
                        }
                        var newRegion = {
                            latitude: latitudG,
                            longitude: longitudG,
                            animate: true,
                            latitudeDelta: deltaautomatico,
                            longitudeDelta: deltaautomatico
                        };
                        setTimeout(function() {
                            $.mapview.setLocation(newRegion);
                        }, 1e3);
                    }
                } catch (errora) {
                    alert("Error: " + errora);
                }
            },
            onerror: function() {},
            timeout: 2e4
        });
        var params = {
            "FiltroEstado[idAfiliacion]": "2",
            "Filtros[idTipoBusqueda]": "1",
            "FiltroEstado[latitud]": latitudG,
            "FiltroEstado[longitud]": longitudG,
            "FiltroEstado[idEspecialidad]": ""
        };
        xhr.open("POST", url);
        xhr.send(params);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "redMedicos";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.redMedicos = Ti.UI.createWindow({
        id: "redMedicos"
    });
    $.__views.redMedicos && $.addTopLevelView($.__views.redMedicos);
    $.__views.mapview = Alloy.Globals.Map.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        mapType: Alloy.Globals.Map.NORMAL_TYPE,
        regionFit: true,
        top: 0,
        left: "0%",
        id: "mapview",
        ns: "Alloy.Globals.Map",
        zOrderOnTop: "true"
    });
    $.__views.redMedicos.add($.__views.mapview);
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
    var distancia = 1e6;
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
        setTimeout(function() {
            downMedicosCercanos();
        }, 1e3);
    }, 4e3);
    var deltaautomatico = .03;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;