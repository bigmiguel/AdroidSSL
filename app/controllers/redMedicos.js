
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
var mountainView = Alloy.Globals.Map.createAnnotation({
    latitude:37.390749,
    longitude:-122.081651,
    title:"Appcelerator Headquarters",
    subtitle:'Mountain View, CA',
    pincolor:Alloy.Globals.Map.ANNOTATION_RED,
    myid:1 // Custom property to uniquely identify this annotation.
});

$.mapview.region = {latitude:33.74511, longitude:-84.38993,
                    latitudeDelta:0.5, longitudeDelta:0.5};
$.mapview.setLocation({
    latitude:37.337681, longitude:-122.038193, animate:true,
    latitudeDelta:0.04, longitudeDelta:0.04});
                   
$.mapview.userLocation = true;
$.mapview.userLocationButton = true;
$.mapview.addAnnotation(mountainView);

setTimeout(function(){
	
}, 2000);
