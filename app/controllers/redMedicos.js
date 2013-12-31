
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

var args = arguments[0] || {};
var idAfiliacion = args.idAfiliacion;
var idTipoBusqueda = args.idTipoBusqueda;
var img = '';
var calidad = Alloy.Dimension() + '.png';
var latitudG = 22.71539;
var longitudG = -101.25489;
var distancia = 1000000;

switch(idAfiliacion)
{
	case 2:
	 img = 'doc';
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

//Muestra subMenu
Ti.App.fireEvent('muestraSubMenu',{
	vista:'filtrosRedes',
	idAfiliacion: idAfiliacion,
	idTipoBusqueda: idTipoBusqueda
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
							myId : uno.id,
							rightButton : '/images/der' + calidad,
							subtitle : 'Servicio Médico'
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

//---------------Eventos nivel aplicacion-------------------
Ti.App.addEventListener('resultadosRed',function(e){
	var Proveedores = e.mresultados;
	$.mapview.removeAllAnnotations();
	$.mapview.addAnnotation(annotation);
	if (Proveedores == null || Proveedores.length == 0) {
				alert("no hay resultados");
	} else {
		latitudG = Proveedore[0].latitud;
		longitudG = Proveedore[0].longitud;
		Ti.App.fireEvent('cierraMenuDer');
		var newRegion = {
				latitude : latitudG,
				longitude : longitudG,
				latitudeDelta : 0.03,
				longitudeDelta : 0.03,
				animate : true
				};
		$.mapview.setLocation(newRegion);
		for(var i=0; i < Proveedores.length; i++) {
			var proveedor = Proveedores[i];
			var anotacion = Alloy.Globals.Map.createAnnotation({
							latitude : mapaLatitudR,
							longitude : mapaLongitudR,
							image : '/images/' + img + calidad,
							animate : true,
							title : '' + uno.nomCompleto,
							leftButton : '/images/' + img + 'left' + calidad,
							myId : proveedor.id,
							rightButton : '/images/der' + calidad,
							subtitle : 'Servicio Médico'
					});
			$.mapview.addAnnotation(anotacion);
		};
	}
});
/*
		try {
					for (var i = 0; i < obj.mresultados.length; i++) {
						
						var row = Ti.UI.createTableViewRow();
						row.height = tamano3 * 4;

						var doctorlista = Titanium.UI.createLabel({
							text : '',
							top : alto * .01,
							left : ancho * .05,
							width : ancho * .85,
							height : tamano2,
							color : '#001F5B',
							textAlign : 'left',
							font : {
								fontSize : tamano3,
								fontFamily : fuente
							},
						});

						doctorlista.text = '' + uno.nomCompleto;
						doctoresID[i] = uno.nomCompleto;

						var direccionlista = Titanium.UI.createLabel({
							text : '',
							top : (alto * .02) + tamano3,
							left : ancho * .05,
							width : ancho * .85,
							height : tamano4 * 2.7,
							color : '#9D9D9C',
							textAlign : 'left',
							font : {
								fontSize : tamano4,
								fontFamily : fuente
							},
						});
						direccionlista.text = '' + uno.direccion;

						var flechader = Titanium.UI.createImageView({
							image : '/imagenes/flechalistas.png',
							top : tamano3 * 1.5,
							right : ancho * .03,
							width : ancho * .02,
							height : ancho * .05,
						});

						var separadorlistas = Titanium.UI.createImageView({
							image : '/imagenes/linealistas.png',
							bottom : 1,
							right : ancho * .05,
							width : ancho * .9,
						});

						row.add(doctorlista);
						row.add(direccionlista);
						row.add(flechader);
						row.add(separadorlistas);
						tableData.push(row);

						
						
					}

					

					tabla.setData(tableData);
				}
			} catch(oerror) {

			}*/