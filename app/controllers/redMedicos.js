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
var calidad = Alloy.Dimension() + '.png';
var latitudG = 22.71539;
var longitudG = -101.25489;

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
}, 3000);


setTimeout(function(){
	UbicacionActual();
}, 1000);

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
		latitudeDelta : 0.03,
		longitudeDelta : 0.03
	};
	
	$.mapview.setLocation(newRegion);
	anotacionUsuario.latitude = latitudG;
	anotacionUsuario.longitude = longitudG;
}
