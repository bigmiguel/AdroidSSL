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