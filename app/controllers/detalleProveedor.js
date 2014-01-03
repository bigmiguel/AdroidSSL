$.lblTitulo.applyProperties($.createStyle(Alloy.FuenteTitulo()) );
$.lblNombre.applyProperties($.createStyle(Alloy.Fuente()));
$.lblEspecialidad.applyProperties($.createStyle(Alloy.Fuente()));
$.lblHorario.applyProperties($.createStyle(Alloy.Fuente()));
$.lblDireccion.applyProperties($.createStyle(Alloy.Fuente()));
$.lblCosto.applyProperties($.createStyle(Alloy.Fuente()));
$.lblTelefono.applyProperties($.createStyle(Alloy.Fuente()));
$.lblSucursal.applyProperties($.createStyle(Alloy.Fuente()));

$.lblTNombre.applyProperties($.createStyle(Alloy.Fuente()));
$.lblTEspecialidad.applyProperties($.createStyle(Alloy.Fuente()));
$.lblTHorario.applyProperties($.createStyle(Alloy.Fuente()));
$.lblTDireccion.applyProperties($.createStyle(Alloy.Fuente()));
$.lblTCosto.applyProperties($.createStyle(Alloy.Fuente()));
$.lblTTelefono.applyProperties($.createStyle(Alloy.Fuente()));
$.lblTSucursal.applyProperties($.createStyle(Alloy.Fuente()));

//----------------------Variables -------------------
var args = arguments[0] || {};
var id = args.id;
var idTipoBusqueda = args.idTipoBusqueda;
var idAfiliacion = args.idAfiliacion;
var latitud;
var longitud;
var hipervinculo;
var img = '';
var calidad = Alloy.Dimension() + '.png';

switch(idTipoBusqueda)
{
	case '1':
	 	img = 'doc';
	 	$.lblTitulo.text = 'Detalle Mèdico';
	 	$.addClass($.lblTitulo, 'tituloRed', { color: '#DA0A0A' });
	break;
	case '2':
		img = 'servicio';
		$.lblTitulo.text = 'Detalle Servicio';
		$.addClass($.lblTitulo, 'tituloRed', { color: '#DA0A0A' });
	break;
	case '3':
		img = 'descuento';
		$.lblTitulo.text = 'Detalle del Descuento';
		$.addClass($.lblTitulo, 'tituloRed', { color: '#628f02' });
	break;
}

function bajarmedicoDetalles() {

	var url = Alloy.CFG.urlAPIMH + 'detalle';

	var xhr = Titanium.Network.createHTTPClient({
		onload : function(e) {

			obj = JSON.parse(this.responseText);
			$.lblEspecialidad.text = obj.nomEspecialidad;
			$.lblNombre.text = obj.nombre;
			$.lblDireccion.text = obj.direccion;
			$.lblSucursal.text = obj.nomSucursal;
			latitud = obj.latitud;
			longitud = obj.longitud;
			$.lblHorario.text = obj.horario;
			$.lblCosto.text = '$ ' + obj.costo;
			hipervinculo = obj.url_link;
			var tel = '';
			for (var i=0; i < obj.telefonos.length; i++) {
			 tel += obj.telefonos[i].Medio + '\n';
			};
			$.lblTelefono.text = tel;
			
			var anotacion = Alloy.Globals.Map.createAnnotation({
							latitude : latitud,
							longitude : longitud,
							image : '/images/' + img + calidad,
							title : '' + obj.nomSucursal
					});
				var newRegion = {
						latitude : latitud,
						longitude : longitud,
						latitudeDelta : 0.003,
						longitudeDelta : 0.003,
						animate : false
					};
					$.mapViewDet.setLocation(newRegion);
					$.mapViewDet.addAnnotation(anotacion);

		},
		onerror : function(e) {
			alert("Error de red");
		},
		timeout : 10000
	});

	var params = {
		'id' : id
	};

	xhr.open("POST", url);
	xhr.send(params);

}
setTimeout(function() {
				bajarmedicoDetalles();
			}, 300);

//Eventos
$.imgRuta.addEventListener('click', function(e){
	Ti.App.fireEvent('creaRuta', { latitud: latitud, longitud: longitud });
});
$.btnBusqueda.addEventListener('click', function(e){
	Ti.App.fireEvent('regresaBusqueda');
});

//-------Eventos nivel aplicaciòn

