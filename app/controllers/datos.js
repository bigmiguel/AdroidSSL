//Obtiene datos del usuario
var emp = JSON.parse(Ti.App.Properties.getString("Empleado"));

$.lblNombre.text =  emp.nombre;
$.lblNomCentro.text = emp.nomCentroLaboral;
$.lblEdad.text =  emp.edad;
$.lblNEmpleado.text = emp.numEmpleado;
$.lblNomArea.text = emp.nomArea;
$.lblNomPuesto.text = emp.nomPuesto;
$.lblNSS.text = emp.numSS;
$.lblPoliza.text = emp.numPoliza;
$.lblAseguradora.text = emp.nomAseguradora;

//Estilo a los controles
$.lblNombre.applyProperties( $.createStyle(Alloy.Fuente()) );
$.lblNomCentro.applyProperties( $.createStyle(Alloy.Fuente()) );
$.lblEdad.applyProperties( $.createStyle(Alloy.Fuente()) );
$.lblNEmpleado.applyProperties( $.createStyle(Alloy.Fuente()) );
$.lblNomArea.applyProperties( $.createStyle(Alloy.Fuente()) );
$.lblNomPuesto.applyProperties( $.createStyle(Alloy.Fuente()) );
$.lblTNombre.applyProperties( $.createStyle(Alloy.Fuente()) );
$.lblTEdad.applyProperties( $.createStyle(Alloy.Fuente()) );
$.lblTEmpleado.applyProperties( $.createStyle(Alloy.Fuente()) );
$.lblTCentroLaboral.applyProperties( $.createStyle(Alloy.Fuente()) );
$.lblTArea.applyProperties( $.createStyle(Alloy.Fuente()) );
$.lblTPuesto.applyProperties( $.createStyle(Alloy.Fuente()) );
$.lblTNSS.applyProperties( $.createStyle(Alloy.Fuente()) );
$.lblNSS.applyProperties( $.createStyle(Alloy.Fuente()) );
$.lblTPoliza.applyProperties( $.createStyle(Alloy.Fuente()) );
$.lblPoliza.applyProperties( $.createStyle(Alloy.Fuente()) );
$.lblTAseguradora.applyProperties( $.createStyle(Alloy.Fuente()) );
$.lblAseguradora.applyProperties( $.createStyle(Alloy.Fuente()) );

$.lblCabecera.applyProperties( $.createStyle(Alloy.FuenteTitulo()) );

function ajustaVista(e){
	var tamanio = ($.lblTNombre.size.height + 9) * 10 + $.lblCabecera.size.height + Alloy.espacioMenu();
	$.tbDatos.setHeight(tamanio);
	Ti.App.fireEvent('ocultaCargando');
}

$.tbDatos.addEventListener('postlayout',ajustaVista);

var CloudPush = require('ti.cloudpush');
var deviceToken;
    
    CloudPush.retrieveDeviceToken({
    success: function deviceTokenSuccess(e) {
    	deviceToken = e.deviceToken;
    	Ti.API.info(CloudPush.pushType);
        Ti.API.info('Device Token: ' + e.deviceToken);
      CloudPush.enabled = true;
    },
    error: function deviceTokenError(e) {
    	Ti.API.info(JSON.stringify(e));
        alert('Failed to register for push! ' + e.error);
    }
});

CloudPush.showTrayNotification = true;
//CloudPush.showAppOnTrayClick = true;

CloudPush.addEventListener('callback', function (evt) {
	Ti.API.info(JSON.stringify(evt.payload));
    var push = JSON.parse(evt.payload);
    Ti.UI.createNotification({
    		message: push.message,
   			duration: Ti.UI.NOTIFICATION_DURATION_LONG
	}).show();
});
CloudPush.addEventListener('trayClickLaunchedApp', function (evt) {
    Ti.API.info('Tray Click Launched App (app was not running)');
});
CloudPush.addEventListener('trayClickFocusedApp', function (evt) {
    Ti.API.info('Tray Click Focused App (app was already running)');
});
