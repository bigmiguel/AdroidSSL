if (Titanium.Platform.osname == 'android') 
	Ti.Android.currentActivity.setRequestedOrientation(Ti.Android.SCREEN_ORIENTATION_PORTRAIT);

var idEmpresa = 0;
//Evento que que se dispara cuando se quiere firmar un usuario
$.btnLogin.addEventListener('click', function(e){
	if($.txtNEmpleado.value == '')
	{
		alert("El numero de empledo no puede estar vacio.");			
		return;
	}
	if(idEmpresa == 0)
	{
		alert("No has seleccionado una Empresa");
		return;
	}
	//Obtiene la url de la api de la configuracion	
	var api = Alloy.CFG.urlAPI + 'login';	
	
	//Se crea un httpClient para consultar el servicio REST
	var cliSSL = Ti.Network.createHTTPClient({
		//si tiene exito 
		onload:function(e){
			
			Ti.API.info("Received text: " + this.responseText);
			//Se guarda el resultado, objeto LoginUser 
			Ti.App.Properties.setString("Empleado", this.responseText);
			
			//Se abre el view Principal
			var _principal = Alloy.createController('slideMenu');
			$.index.close();
			_principal.getView().open();			
			$.index = null;			
		},
		//En caso de error
		onerror:function(e)
		{			
			//Ti.API.info("Received text: " + this.responseText);
			var error = JSON.parse(this.responseText);
			Ti.UI.createAlertDialog({
				message : error.Message,
				ok : 'Ok',
				title : 'Datos invalidos'
			}).show();
					
		}		
	});
	
	//Objeto que se le manda al servicio
	var user ={
		numEmpleado: $.txtNEmpleado.value,
		idEmpresa : idEmpresa,
		movilID: Ti.Platform.getId(),
		modelo: Ti.Platform.model
	};
	//Se abre el cliente
	cliSSL.open('POST', api, true);
	//Cabezeras 
	cliSSL.setRequestHeader('Accept','application/json');
	cliSSL.setRequestHeader('Content-Type','application/json');
	//Consulta el servicio
	cliSSL.send(JSON.stringify(user));
});

//Evento para que no se pierda de vista la caja de texto
$.txtNEmpleado.addEventListener('focus', txtFocus);
$.txtNEmpleado.addEventListener('blur', txtBlur);

function txtFocus(e){	
	if ($.vwLogin.top == '20%') {
		$.vwLogin.animate({ top:'26px', duration : 2000});	
	};		
}
function txtBlur(e)
{
	if ($.vwLogin.top == '26px') {
	$.vwLogin.animate({ top:'20%', duration : 2000});
	};
}
//Evento que se dispara cuando se carga la vista
$.index.addEventListener('open', function(e)
{
	//Obtiene la url de la api de la configuracion	
	var api = Alloy.CFG.urlAPI+'/Empresa';
	//Se crea un httpClient para consultar el servicio REST
	var cliSSL = Ti.Network.createHTTPClient({
		onload:function(e)
		{
			Ti.API.info("Received text: " + this.responseText);
			//Se obtiene las empresa que tiene el sistema
			var Empresas = JSON.parse(this.responseText);
			
			var opciones = [ ];
			//Se llena el picker
			for (var i=0; i < Empresas.length; i++) {
			 	Empresa= Empresas[i];
				 opciones.push(Empresa.nomNombre);
			};
			//Dialogo para seleccionar empresa
			var dialogo = Ti.UI.createOptionDialog({ title: 'Empresas:',
		 							options: opciones
		 							});
			dialogo.addEventListener('click', function(e){
				idEmpresa = Empresas[e.index].idEmpresa;
				$.lblEmpresa.text = 'Empresa: ' + Empresas[e.index].nomNombre;
			});
			$.btnSeleccionaEmpresa.addEventListener('click', function(e){
				dialogo.show();
			});

		},
		onerror:function(e){			
			var error = JSON.parse(this.responseText);
			alert(error.Message);			
		}
	});
	//Se abre la coneccion
	cliSSL.open('GET', api, true);
	//Cabezeras 
	cliSSL.setRequestHeader('Accept','application/json');
	//Se encvia la peticion
	cliSSL.send();
});

//Valida si algun empleado ya a sido guardad;o en el dispositivo
var emp = JSON.parse(Ti.App.Properties.getString("Empleado"));
if(emp != null)
{
	var _principal = Alloy.createController('slideMenu');
	$.index.close();
	_principal.getView().open();				
	$.index = null;			
}
else
{
	$.index.open();
};
