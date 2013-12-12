//Obtiene datos del usuario
var emp = JSON.parse(Ti.App.Properties.getString("Empleado"));

//Metodos y Funciones
function actulizaCitas () {	
	//Elimina las citas anteriores   	
   	$.svCitas.removeAllChildren();
	Ti.API.info('----ActulizaCitas');
	//Obtiene la url de la api de la configuracion	
	var api = Alloy.CFG.urlAPI + 'citas?idEmpresa='+ emp.idEmpresa + '&idEmpleado=' + emp.idEmpleado;	
	var cliSSL =Ti.Network.createHTTPClient({
		//En case de exito
		onload: function(e){
				Ti.API.info(this.responseText);
				var citas = JSON.parse(this.responseText);
				for (var i=0; i < citas.length; i++) {
				 var cita = citas[i];
				 var vwCita = Alloy.createController('citaDetalle', cita).getView();
				 $.svCitas.add(vwCita);
				};				
		},
		//En case de error
		onerror: function  (e) {
		 var error = JSON.parse(this.responseText);
			alert(error.Message);		
		}
	});
	cliSSL.open('GET', api, true);
	cliSSL.send();
}
 actulizaCitas();
//Eventos
//Variables para actualizar
var  posYini = 0;
$.svCitas.addEventListener('touchstart', function(e)
{
	posYini = e.y;	
});
$.svCitas.addEventListener('touchend', function(e)
{	
	if((e.y - posYini) > 40 && $.svCitas.contentOffset.y == 0)
	{
		actulizaCitas();
	};	
});