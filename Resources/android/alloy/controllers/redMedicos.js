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
        var url = Alloy.CFG.urlAPIMH + "BuscaGeo";
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
                                image: "/images/" + img + calidad,
                                animate: true,
                                title: "" + uno.nomCompleto,
                                leftButton: "/images/" + img + "left" + calidad,
                                id: uno.id,
                                rightButton: "/images/der" + calidad,
                                subtitle: uno.nomEspecialidad
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
                            Ti.App.fireEvent("ocultaCargando");
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
            "FiltroEstado[idAfiliacion]": idAfiliacion,
            "Filtros[idTipoBusqueda]": idTipoBusqueda,
            "FiltroEstado[latitud]": latitudG,
            "FiltroEstado[longitud]": longitudG,
            "FiltroEstado[idEspecialidad]": ""
        };
        xhr.open("POST", url);
        xhr.send(params);
    }
    function decodeLine(encoded) {
        var len = encoded.length;
        var index = 0;
        var array = [];
        var lat = 0;
        var lng = 0;
        while (len > index) {
            var b;
            var shift = 0;
            var result = 0;
            do {
                b = encoded.charCodeAt(index++) - 63;
                result |= (31 & b) << shift;
                shift += 5;
            } while (b >= 32);
            var dlat = 1 & result ? ~(result >> 1) : result >> 1;
            lat += dlat;
            shift = 0;
            result = 0;
            do {
                b = encoded.charCodeAt(index++) - 63;
                result |= (31 & b) << shift;
                shift += 5;
            } while (b >= 32);
            var dlng = 1 & result ? ~(result >> 1) : result >> 1;
            lng += dlng;
            array.push([ 1e-5 * lat, 1e-5 * lng ]);
        }
        return array;
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
    Alloy.LoginWeb();
    var args = arguments[0] || {};
    var idAfiliacion = args.idAfiliacion;
    var idTipoBusqueda = args.idTipoBusqueda;
    var img = "";
    var calidad = Alloy.Dimension() + ".png";
    var latitudG = 22.71539;
    var longitudG = -101.25489;
    var distancia = 1e6;
    switch (idTipoBusqueda) {
      case "1":
        img = "doc";
        break;

      case "2":
        img = "servicio";
        break;

      case "3":
        img = "descuento";
    }
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
    setTimeout(function() {
        UbicacionActual();
    }, 3e3);
    Ti.App.fireEvent("muestraSubMenu", {
        vista: "filtrosRedes",
        parametros: {
            idAfiliacion: idAfiliacion,
            idTipoBusqueda: idTipoBusqueda
        }
    });
    var deltaautomatico = .03;
    $.mapview.addEventListener("click", function(e) {
        null != e.clicksource && "pin" != e.clicksource && Ti.App.fireEvent("MuestraDetalleProveedor", {
            idAfiliacion: idAfiliacion,
            idTipoBusqueda: idTipoBusqueda,
            id: e.annotation.id
        });
    });
    Ti.App.addEventListener("resultadosRed", function(e) {
        null != route && $.mapview.removeRoute(route);
        var Proveedores = e.mresultados;
        $.mapview.removeAllAnnotations();
        $.mapview.addAnnotation(anotacionUsuario);
        if (null == Proveedores || 0 == Proveedores.length) alert("no hay resultados"); else {
            Ti.API.info(JSON.stringify(Proveedores[0]));
            var newlatitudG = Proveedores[0].latitud;
            var newlongitudG = Proveedores[0].longitud;
            Ti.App.fireEvent("cierraMenuDer");
            var newRegion = {
                latitude: newlatitudG,
                longitude: newlongitudG,
                latitudeDelta: .05,
                longitudeDelta: .05,
                animate: true
            };
            $.mapview.setLocation(newRegion);
            for (var i = 0; Proveedores.length > i; i++) {
                var proveedor = Proveedores[i];
                var anotacion = Alloy.Globals.Map.createAnnotation({
                    latitude: proveedor.latitud,
                    longitude: proveedor.longitud,
                    image: "/images/" + img + calidad,
                    animate: true,
                    title: "" + proveedor.nomCompleto,
                    leftButton: "/images/" + img + "left" + calidad,
                    id: proveedor.id,
                    rightButton: "/images/der" + calidad,
                    subtitle: proveedor.nomEspecialidad
                });
                $.mapview.addAnnotation(anotacion);
                Ti.App.fireEvent("ocultaCargando");
            }
        }
    });
    var route = null;
    Ti.App.addEventListener("creaRuta", function(e) {
        Ti.App.fireEvent("muestraCargando");
        var urlGoogle = "http://maps.google.com/maps/api/directions/json?origin=" + latitudG + "," + longitudG + "&destination=" + e.latitud + "," + e.longitud + "&sensor=false";
        Ti.API.info(urlGoogle);
        Ti.App.fireEvent("cierraMenuDer");
        var cliGoogle = Ti.Network.createHTTPClient({
            onload: function() {
                null != route && $.mapview.removeRoute(route);
                var res = JSON.parse(this.responseText);
                var puntos = [];
                var pasos = res.routes[0].legs[0].steps;
                for (var i = 0; pasos.length > i; i++) {
                    var paso = pasos[i];
                    var decodedPolyline = decodeLine(paso.polyline.points);
                    for (var j = 0; decodedPolyline.length > j; j++) {
                        var linea = decodedPolyline[j];
                        null != linea && puntos.push({
                            latitude: linea[0],
                            longitude: linea[1]
                        });
                    }
                }
                route = Alloy.Globals.Map.createRoute({
                    points: puntos,
                    color: "#001f5b"
                });
                $.mapview.addRoute(route);
                UbicacionActual();
                Ti.App.fireEvent("ocultaCargando");
            },
            onerror: function(e) {
                alert(e);
            }
        });
        cliGoogle.open("GET", urlGoogle);
        cliGoogle.send();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;