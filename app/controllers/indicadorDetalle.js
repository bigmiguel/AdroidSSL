require('date');
	
//Obtiene datos del usuario
var emp = JSON.parse(Ti.App.Properties.getString("Empleado"));

var parametros = arguments[0] || {};
var idIndicador = parametros.idIndicador;
var nombreIndicador = parametros.nombreIndicador;  


var paginaCargada = function(e){
	Ti.API.info('------------carga indicador view---------------');	
	Ti.App.removeEventListener('app:paginaCargada', paginaCargada);
	var ultimaActulizacion = Ti.App.Properties.getObject("ultimaActulizacion");
	if (ultimaActulizacion == null || Date.parse(ultimaActulizacion) > Date.now().add({ days : -5})) {
		cargaIndicador('');
	}
	else
	{		
		//Se crea la base de datos
		var db = Ti.Database.open('SSL');
	  	var maxDate = '';
	  	//Obtiene la ultima toma de medidas
	  	var resFecMax = db.execute('SELECT max(cast(fecha as date)), fecha FROM indicadores WHERE idIndicador = ?', idIndicador);
	  	
	  	if(resFecMax.isValidRow()){
	  		 maxDate = resFecMax.fieldByName('fecha');  		
	 	};  	
	  	resFecMax.close();
	  	db.close();	  	
	  	if(maxDate == null)
	  	{
	  		cargaIndicador('');
	  	}
	  	else{
	  		if(Date.parse(maxDate) > Date.now().add({ days : -5})){
	  			cargaIndicador(maxDate);	
	  		}else{
	  			graficaIndicador();	
	  		};  			
	  	};			
	};	
};
//Evento que se dispara cuando el navegador web termina la carga

Ti.App.addEventListener('app:paginaCargada', paginaCargada); 
//obtiene los indicadores del sistema
function cargaIndicador (fecha) {
	var db = Ti.Database.open('SSL');
  	
  	var api = Alloy.CFG.urlAPI  +'HistoricoIndicador?idEmpleado=' + emp.idEmpleado +'&idIndicador=' + idIndicador +'&ultimaActulizadion=' + fecha;
  	Ti.API.info(api);
		
	//Se crea la tabla 
	db.execute('CREATE TABLE IF NOT EXISTS indicadores(idIndicador INTEGER, valor TEXT, fecha TEXT)');
	
	var cliSSL = Ti.Network.createHTTPClient({
		onload : function(e){
			var indicadores = JSON.parse(this.responseText);
			Ti.API.info("Received text: " + this.responseText);
			
			for (var i=0; i < indicadores.length; i++) {
			 		var indicador = indicadores[i];
			 		//Se inserta la tabal con los resultados
			 		db.execute('INSERT INTO indicadores (idIndicador, valor, fecha) VALUES(?,?,?)', indicador.idIndicador, indicador.valor, indicador.fecha);			 				 				 
			};
			Ti.App.Properties.setObject("ultimaActulizacion", Date.now());
			db.close();
			graficaIndicador();
		},
		onerror : function(e) {
	  		var error = JSON.parse(this.responseText);
	  		db.close();
			alert(error.Message);			
		}		
	});
	cliSSL.open('GET', api, true);
	cliSSL.send();	
}

//dispara el evento para pintar la grafica
function graficaIndicador () {
	var db = Ti.Database.open('SSL');
		
	var resIndicadores = db.execute('SELECT cast(valor as real) valor, fecha FROM indicadores where idIndicador = ? ORDER BY fecha DESC Limit 10', idIndicador);		
	var _labels = [];
	var _data =[];
	while(resIndicadores.isValidRow()){
		_labels.push(resIndicadores.fieldByName('fecha'));
		_data.push(resIndicadores.fieldByName('valor'));
		resIndicadores.next();
	};	

	var fuente = {
		labels : _labels.reverse(),
		data : _data.reverse(),
		nombreIndicador : nombreIndicador 
	};
	resIndicadores.close();
	db.close();
    Ti.App.fireEvent('app:cargaIndicador', fuente);
}

$.wnIndDet.addEventListener('androidback',function(e){
	e.source.close();	
});