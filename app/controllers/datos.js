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

var intent = Titanium.Android.createServiceIntent( { url: 'servicioNotificacion.js' } );
// Service should run its code every 2 seconds.
intent.putExtra('interval', 5000);

// A message that the service should 'echo'
intent.putExtra('message_to_echo', 'Titanium rocks!');

var service = Titanium.Android.createService(intent);
service.addEventListener('resume', function(e) {
    Titanium.API.info('Service code resumes, iteration ' + e.iteration);
});
service.addEventListener('pause', function(e) {
	Ti.UI.createNotification({
    		message: 'Iteration ' + e.iteration,
   			duration: Ti.UI.NOTIFICATION_DURATION_LONG
	}).show();
    Titanium.API.info('Service code pauses, iteration ' + e.iteration);
    if (e.iteration === 50) {
        Titanium.API.info('Service code has run 3 times, will now stop it.');
        service.stop();
    }
});
service.start();
