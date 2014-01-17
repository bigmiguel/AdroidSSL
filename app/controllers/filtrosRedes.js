var Util = require('utils');
//Aplica Estilos a los controles
$.lblTitulo.applyProperties($.createStyle(Alloy.FuenteTitulo()) );
$.lblTEstado.applyProperties($.createStyle(Alloy.FuenteChica()));
$.lblTMunicipio.applyProperties($.createStyle(Alloy.FuenteChica()));
$.lblTEspecailidad.applyProperties($.createStyle(Alloy.FuenteChica()));
//Variable
var args = arguments[0] || {};
var idEstado=0;
var idMunicipio = 0;
var idEspecialidad = 0;
var idAfiliacion = args.idAfiliacion;
var idTipoBusqueda = args.idTipoBusqueda;
switch(idTipoBusqueda)
{
	case '1':
		$.lblTitulo.text = "Red Mèdica";
		$.addClass($.lblTitulo, 'tituloRed', { color: '#DA0A0A' });
	break;
	case '2':
		$.lblTitulo.text = "Servicio";
		$.addClass($.lblTitulo, 'tituloRed', { color: '#DA0A0A' });
	break;
	case '3':
		$.lblTitulo.text = "Descuentos TDC";
		$.addClass($.lblTitulo, 'tituloRed', { color: '#628f02' });
	break;
}

//-------------------------------Eventos
$.pckEstado.addEventListener('change', function(e){
	idEstado = $.pckEstado.getSelectedRow(0).value;
	idMunicipio = 0;
	bajarMunicipiosMedicos();
	Alloy.limpiaPicker($.pckEspecialidad);
});
$.pckMunicipio.addEventListener('change', function(f) {
	idEspecialidad = 0;
	if($.pckMunicipio.getSelectedRow(0) != null){
		idMunicipio = '' + $.pckMunicipio.getSelectedRow(0).value;
		bajarEspecialidadesMedicos();
	}
});
$.pckEspecialidad.addEventListener('change', function(f) {
	if($.pckEspecialidad.getSelectedRow(0) != null)
		idEspecialidad = $.pckEspecialidad.getSelectedRow(0).value;
});

$.btnBuscarMedico.addEventListener('click', function(e){
	bajarDoctores();
});

bajarEstadosMedicos();

//-------------------------------Metodos
function bajarEstadosMedicos() {
	var data = [];
	var url = Alloy.CFG.urlAPIMH + 'GetEstados/1';
	var xhr = Titanium.Network.createHTTPClient({
		onload : function(e) {
			var obj = JSON.parse(this.responseText);
			for (var i = 0; i < obj.length; i++) {
				var efr = obj[i];

				data[i] = Titanium.UI.createPickerRow({
					title : efr.nomEstado,
					value : efr.idEstado
				});
			}
			Util.AgregaSeleccionar($.pckEstado);
			$.pckEstado.add(data);
			
			//$.pckEstado.selectionIndicator = true;
		},

		onerror : function(e) {
			//alert("Error de red");
		},
		timeout : 10000
	});

	xhr.open("GET", url);
	xhr.send();

}
function bajarMunicipiosMedicos() {
	data2 = [];
	dataEspe = new Array();
	var url2 =  Alloy.CFG.urlAPIMH + 'GetMunicipio';
	Ti.API.info(url2);
	Alloy.limpiaPicker($.pckMunicipio);
	var xhr = Titanium.Network.createHTTPClient({
		onload : function(e) {
			var obj2 = JSON.parse(this.responseText);
			Alloy.limpiaPicker($.pckMunicipio);
			for (var i = 0; i < obj2.mmunicipios.length; i++) {
				var efr = obj2.mmunicipios[i];
				data2[i] = Titanium.UI.createPickerRow({
					title : efr.nomMunicipio,
					value : efr.idMunicipio
				});
			}
		 	Util.AgregaSeleccionar($.pckMunicipio);
			$.pckMunicipio.add(data2);
			
		},
		onerror : function(e) {
			alert(e);
		},
		timeout : 10000
	});

	var params = {
		'Filtros[idTipoBusqueda]' : idTipoBusqueda,
		'FiltroEstado[idAfiliacion]' : idAfiliacion,
		'FiltroEstado[idEstado]' : idEstado
	};
	Ti.API.info(JSON.stringify(params));
	xhr.open("POST", url2);
	xhr.send(params);
}
function bajarEspecialidadesMedicos() {
	//var url = hostApp + '/MedicallHomeWeb/index.php/API/GetMunicipio';
	//Cambio que hizo Jair
	dataEspe = new Array();
	Alloy.limpiaPicker($.pckEspecialidad);
	
	var url = Alloy.CFG.urlAPIMH + 'busqueda';
	var xhr = Titanium.Network.createHTTPClient({
		onload : function(e) {			
			obj = JSON.parse(this.responseText);
			for (var i = 0; i < obj.mespecialidades.length; i++) {
				var efr = obj.mespecialidades[i];
				dataEspe[i] = Titanium.UI.createPickerRow({
					title : efr.nomEspecialidad,
					value : efr.idEspecialidad
				});
				
			}	
			Util.AgregaSeleccionar($.pckEspecialidad);
			$.pckEspecialidad.add(dataEspe);
		},

		onerror : function(e) {
			//alert("Error de red");
		},
		timeout : 10000
	});

	var params = {
		'Filtros[idTipoBusqueda]' : idTipoBusqueda,
		'FiltroEstado[idAfiliacion]' : idAfiliacion,
		'FiltroEstado[idEstado]' : idEstado,
		'FiltroEstado[idMunicipio]' : idMunicipio,
		'FiltroEstado[idEspecialidad]' : ''
	};
	if(idMunicipio != 0){
		xhr.open("POST", url);
		xhr.send(params);
	}
}

function bajarDoctores() {
	Ti.App.fireEvent('muestraCargando');
	var tableData = [];
	var url = Alloy.CFG.urlAPIMH + 'busqueda';
	var latitudNueva;
	var longitudNueva;

	var xhr = Titanium.Network.createHTTPClient({
		onload : function(e) {
			
			obj = JSON.parse(this.responseText);
			Ti.App.fireEvent('resultadosRed', obj);
	
		},
		onerror : function(e) {
			//alert("Error de red");
		},
		timeout : 10000
	});

	//alert('todo estado '+estadoidx);
	//alert('todo municipio '+municipioidx);
	//alert('todo espe '+especialidadidx);

	var params = {
		'Filtros[idTipoBusqueda]' : idTipoBusqueda,
		'FiltroEstado[idAfiliacion]' : idAfiliacion,
		'FiltroEstado[idEstado]' : idEstado,
		'FiltroEstado[idMunicipio]' : idMunicipio,
		'FiltroEstado[idEspecialidad]' : idEspecialidad == 0 ? '' : idEspecialidad,
	};

	xhr.open("POST", url);
	xhr.send(params);

}
//--------------------------------Eventos a nivel aplicacion

