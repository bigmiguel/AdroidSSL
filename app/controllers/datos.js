//Obtiene datos del usuario
var emp = JSON.parse(Ti.App.Properties.getString("Empleado"));

$.lblNombre.text =  emp.nombre;
$.lblNomCentro.text = emp.nomCentroLaboral;
$.lblEdad.text =  emp.edad;
$.lblNEmpleado.text = emp.numEmpleado;
$.lblNomArea.text = emp.nomArea;
$.lblNomPuesto.text = emp.nomPuesto;

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

