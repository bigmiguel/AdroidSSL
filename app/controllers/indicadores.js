
//Estilo a los controles
$.lblTPeso.applyProperties( $.createStyle(Alloy.Fuente()) );
$.lblTEstatura.applyProperties( $.createStyle(Alloy.Fuente()) );
$.lblPeso.applyProperties( $.createStyle(Alloy.Fuente()) );
$.lblEstatura.applyProperties( $.createStyle(Alloy.Fuente()) );
$.lblCabecera.applyProperties( $.createStyle(Alloy.FuenteTitulo()) );

//Obtiene datos del usuario
var emp = JSON.parse(Ti.App.Properties.getString("Empleado"));

var api = Alloy.CFG.urlAPI + 'EmpleadoIndicadores?idEmpresa=' + emp.idEmpresa + '&numEmpleado='+ emp.numEmpleado;
var total = 0;

//Valida si algun empleado ya a sido guardado en el dispositivo
var indicadores = JSON.parse(Ti.App.Properties.getString("Indicadores"));
if(indicadores == null)
{
	var cliSSL = Ti.Network.createHTTPClient({
		onload:function(e){
			Ti.API.info("Received text: " + this.responseText);
			//Se guarda el resultado, objeto LoginUser 
			Ti.App.Properties.setString("Indicadores", this.responseText);
			indicadores = JSON.parse(Ti.App.Properties.getString("Indicadores"));
			creaTablaIndicadores(indicadores);
			Ti.API.info(indicadores.ultimaActulizacion);
		},
		onerror: function (e) {
		 	var error = JSON.parse(this.responseText);
			alert(error.Message);	
		}
	});
	//Se abre la coneccion
	cliSSL.open('GET', api, true);
	//Cabezeras 
	cliSSL.setRequestHeader('Accept','application/json');
	//Se envia la peticion
	cliSSL.send();
}
else
{	
	creaTablaIndicadores(indicadores);
};


//Funcion que crea la tabla con lo indicadores
function creaTablaIndicadores(indicadores){
	var _indciadorActual;
	
	$.lblPeso.text = indicadores.peso;
	$.lblEstatura.text = indicadores.estatura;	
	total = indicadores.indicadores.length + 3;
	for (var i=0; i < indicadores.indicadores.length; i++) {
	 	 var ind = indicadores.indicadores[i];
	 	 //Se crea un indicador
	 	 var rowIndicador = Alloy.createController('indicadorRow', ind).getView();
	 	 //Agrega evento Click a cada fila
	 	 rowIndicador.addEventListener('click',function(e){
	 	 	Ti.API.info(_indciadorActual);
	 	 	if(_indciadorActual != null){
	 	 		Ti.API.info('------------indicador "Borrado"---------------');	 	 		
	 			_indciadorActual.close();
    			_indcwnIndicadoresiadorActual = null;
    			};
	 	 _indciadorActual = Alloy.createController('indicadorDetalle',{ nombreIndicador : e.row.nombreIndicador, idIndicador: e.row.idIndicador }).getView();
	 	 _indciadorActual.open({ modal: true, navBarHidden: true });	 	 
	 	 });	 	 
	 	 $.tbIndicadores.appendRow(rowIndicador); 		 	 
	};	
	 //Evento Peso 
	$.rowPeso.addEventListener('click',function(e){
	 	_indciadorActual = Alloy.createController('indicadorDetalle',{ nombreIndicador : e.row.nombreIndicador, idIndicador: e.row.idIndicador }).getView().open({ modal: true, navBarHidden: true });
	});	 
		ajustaVista();
}
function ajustaVista(e){
	var tamanio = ($.lblTPeso.size.height + 15) * total + $.lblCabecera.size.height + Alloy.espacioMenu();
	$.tbIndicadores.setHeight(tamanio);	
	Ti.App.fireEvent('ocultaCargando');
}

$.tbIndicadores.addEventListener('postlayout',ajustaVista);

