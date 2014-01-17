
/*-------------Valida servicios de google play----------------*/
var rc = Alloy.Globals.Map.isGooglePlayServicesAvailable();
switch (rc) {
    case Alloy.Globals.Map.SUCCESS:
         Ti.API.info('Google Play services is installed.');
        break;
    case Alloy.Globals.Map.SERVICE_MISSING:
        alert('Google Play services is missing. Please install Google Play services from the Google Play store.');
        break;
    case Alloy.Globals.Map.SERVICE_VERSION_UPDATE_REQUIRED:
        alert('Google Play services is out of date. Please update Google Play services.');
        break;
    case Alloy.Globals.Map.SERVICE_DISABLED:
        alert('Google Play services is disabled. Please enable Google Play services.');
        break;
    case Alloy.Globals.Map.SERVICE_INVALID:
        alert('Google Play services cannot be authenticated. Reinstall Google Play services.');
        break;
    default:
        alert('Unknown error.');
        break;
}
/*-----------------------------Variables--------------------*/

//login para mostrar todos los resultados
Alloy.LoginWeb();

var args = arguments[0] || {};
var idAfiliacion = args.idAfiliacion;
var idTipoBusqueda = args.idTipoBusqueda;
var img = '';
var calidad = Alloy.Dimension() + '.png';
var latitudG = 22.71539;
var longitudG = -101.25489;
var distancia = 1000000;

switch(idTipoBusqueda)
{
	case '1':
	 	img = 'doc';
	break;
	case '2':
		img = 'servicio';
	break;
	case '3':
		img ='descuento';
	break;
}
$.mapview.region = {latitude: latitudG, longitude: longitudG,
                    latitudeDelta: 25, longitudeDelta: 30 };
                    
                   
$.mapview.userLocation = true;
$.mapview.userLocationButton = true;
var anotacionUsuario = Alloy.Globals.Map.createAnnotation({
	latitude: latitudG,
	longitude: longitudG,
	image: '/images/user' + calidad,
	animate: true,
	title: 'Tu Ubicaciòn Actual'
});

$.mapview.addAnnotation(anotacionUsuario);
setTimeout(function(){
	UbicacionActual();
	setTimeout(function(){
		downMedicosCercanos();
	}, 1000);
}, 4000);
setTimeout(function(){
	UbicacionActual();
}, 3000);
//Muestra subMenu
Ti.App.fireEvent('muestraSubMenu',{
	vista:'filtrosRedes',
	parametros:{
		idAfiliacion: idAfiliacion,
		idTipoBusqueda: idTipoBusqueda
		}
});
//----------------------Funciones

function UbicacionActual () {
  	Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
	Titanium.Geolocation.distanceFilter = 10;
	Ti.Geolocation.purpose = "Mostrar tu posición actual";
	Titanium.Geolocation.getCurrentPosition(function(e) {
		if(!e.success || e.error) {
			                // currentLocation.text = 'error: ' + JSON.stringify(e.error);
			                // Ti.API.info("Code translation: "+translateErrorCode(e.code));
			                // alert('error ' + JSON.stringify(e.error));
			                //alert(e.error + " - " + e.code );
			                return;
		}
		
		longitudG = e.coords.longitude;
		latitudG = e.coords.latitude;
		
		
	});

	var newRegion = {
		latitude : latitudG,
		longitude : longitudG,
		animate : true,
		latitudeDelta : 0.02,
		longitudeDelta : 0.02
	};
	
	$.mapview.setLocation(newRegion);
	anotacionUsuario.latitude = latitudG;
	anotacionUsuario.longitude = longitudG;
}
var deltaautomatico = 0.03;
function downMedicosCercanos() {


	var url = Alloy.CFG.urlAPIMH + 'BuscaGeo';
	var xhr = Titanium.Network.createHTTPClient({

		onload : function(e) {
			try {
				obj = JSON.parse(this.responseText);
				$.mapview.removeAllAnnotations();
				$.mapview.addAnnotation(anotacionUsuario);

				if (obj.mresultados == null) {
					alert("no hay resultados");
				} else {
					
					for (var i = 0; i < obj.mresultados.length; i++) {

						var uno = obj.mresultados[i];

						var	mapaLatitudR = uno.latitud;
						var mapaLongitudR = uno.longitud;

						var prueba = Math.pow((Math.pow((mapaLongitudR - longitudG), 2) + Math.pow((mapaLatitudR - latitudG), 2)), .5) * 111.11;

						if (prueba < distancia) {
							distancia = prueba;
							deltaautomatico = 2.0 * Math.pow((Math.pow((mapaLongitudR - longitudG), 2) + Math.pow((mapaLatitudR - latitudG), 2)), 0.5);
						}

						var annotationDoctor = Alloy.Globals.Map.createAnnotation({
							latitude : mapaLatitudR,
							longitude : mapaLongitudR,
							image : '/images/' + img + calidad,
							animate : true,
							title : '' + uno.nomCompleto,
							leftButton : '/images/' + img + 'left' + calidad,
							id : uno.id,
							rightButton : '/images/der' + calidad,
							subtitle : uno.nomEspecialidad
						});
						
						$.mapview.addAnnotation(annotationDoctor);
					}
					
					var newRegion = {
						latitude : latitudG,
						longitude : longitudG,
						animate : true,
						latitudeDelta : deltaautomatico,
						longitudeDelta : deltaautomatico
					};

					setTimeout(function() {
						$.mapview.setLocation(newRegion);
						Ti.App.fireEvent('ocultaCargando');
					}, 1000);
					
				}
			} catch (errora) {
				alert('Error: ' + errora);
			}
		},
		onerror : function(e) {
		},
		timeout : 20000
	});

	var params = {
		'FiltroEstado[idAfiliacion]' : idAfiliacion,
		'Filtros[idTipoBusqueda]' : idTipoBusqueda,
		'FiltroEstado[latitud]' : latitudG,
		'FiltroEstado[longitud]' : longitudG,
		'FiltroEstado[idEspecialidad]' : ""
	};
	xhr.open("POST", url);
	xhr.send(params);

};

//--------Eventos del Mapa
$.mapview.addEventListener('click', function  (e) {
  if(e.clicksource != null && e.clicksource != 'pin'){
  	Ti.App.fireEvent('MuestraDetalleProveedor', {
  		idAfiliacion : idAfiliacion,
  		idTipoBusqueda : idTipoBusqueda,
  		id : e.annotation.id
  	});
  }
});
//---------------Eventos nivel aplicacion-------------------
Ti.App.addEventListener('resultadosRed',function(e){
	
	if(route != null)
  		$.mapview.removeRoute(route);
	var Proveedores = e.mresultados;
	$.mapview.removeAllAnnotations();
	$.mapview.addAnnotation(anotacionUsuario);
	if (Proveedores == null || Proveedores.length == 0) {
				alert("no hay resultados");
	} else {
		Ti.API.info(JSON.stringify(Proveedores[0]));
		var newlatitudG = Proveedores[0].latitud;
		var newlongitudG = Proveedores[0].longitud;
		Ti.App.fireEvent('cierraMenuDer');
		var newRegion = {
				latitude : newlatitudG,
				longitude : newlongitudG,
				latitudeDelta : 0.05,
				longitudeDelta : 0.05,
				animate : true
				};
		$.mapview.setLocation(newRegion);
		for(var i=0; i < Proveedores.length; i++) {
			var proveedor = Proveedores[i];
			var anotacion = Alloy.Globals.Map.createAnnotation({
							latitude : proveedor.latitud,
							longitude : proveedor.longitud,
							image : '/images/' + img + calidad,
							animate : true,
							title : '' + proveedor.nomCompleto,
							leftButton : '/images/' + img + 'left' + calidad,
							id : proveedor.id,
							rightButton : '/images/der' + calidad,
							subtitle : proveedor.nomEspecialidad
					});
			$.mapview.addAnnotation(anotacion);
			Ti.App.fireEvent('ocultaCargando');
		};
	}
});
var route = null;
Ti.App.addEventListener('creaRuta', function (e) {
	Ti.App.fireEvent('muestraCargando');
	var urlGoogle = 'http://maps.google.com/maps/api/directions/json?origin=' + latitudG + ',' + longitudG  + '&destination=' + e.latitud + ','  + e.longitud + '&sensor=false';
	Ti.API.info(urlGoogle);
	Ti.App.fireEvent('cierraMenuDer');
	var cliGoogle =  Ti.Network.createHTTPClient({
  		onload : function(e){
  			if(route != null)
  				$.mapview.removeRoute(route);
  			var res = JSON.parse(this.responseText);
  			var puntos = [];
  			var pasos = res.routes[0].legs[0].steps;
  			
  			for (var i=0; i < pasos.length; i++) {
				var paso = pasos[i];
				
				var decodedPolyline = decodeLine(paso.polyline.points);
				
				for (var j=0; j < decodedPolyline.length; j++) {
					var linea =  decodedPolyline[j];
					if (linea != null) {
	                    puntos.push({
	                        latitude: linea[0],
	                        longitude: linea[1]
	                    });
                	}
				};
				
			};	
		
			route = Alloy.Globals.Map.createRoute({
		 		points : puntos,
		 		color: '#001f5b'
		 	});
		 $.mapview.addRoute(route);
		 UbicacionActual();
		 Ti.App.fireEvent('ocultaCargando');
  		},
  		onerror: function(e){
  			alert(e);
  		}
  	});
  	
  	cliGoogle.open('GET', urlGoogle);
  	cliGoogle.send();		
});
//Funcion para generar las lineas
function decodeLine(encoded) {
    var len = encoded.length;
    var index = 0;
    var array = [];
    var lat = 0;
    var lng = 0;
 
    while (index < len) {
        var b;
        var shift = 0;
        var result = 0;
        do {
            b = encoded.charCodeAt(index++) - 63;
            result |= (b & 0x1f) << shift;
            shift += 5;
        } while (b >= 0x20);
 
        var dlat = ((result & 1) ? ~(result >> 1) : (result >> 1));
        lat += dlat;
 
        shift = 0;
        result = 0;
        do {
            b = encoded.charCodeAt(index++) - 63;
            result |= (b & 0x1f) << shift;
            shift += 5;
        } while (b >= 0x20);
 
        var dlng = ((result & 1) ? ~(result >> 1) : (result >> 1));
        lng += dlng;
 
        array.push([lat * 1e-5, lng * 1e-5]);
    }
 
    return array;
}
