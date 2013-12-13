//Estilo para controles
$.lblFecha.applyProperties( $.createStyle(Alloy.Fuente()) );
$.lblHorario.applyProperties( $.createStyle(Alloy.Fuente()) );
$.lblConsultorio.applyProperties( $.createStyle(Alloy.Fuente()) );
$.lblMedico.applyProperties( $.createStyle(Alloy.Fuente()) );
$.lblEstatus.applyProperties( $.createStyle(Alloy.Fuente()) );
$.lblEspecialidad.applyProperties( $.createStyle(Alloy.Fuente()) );

$.lblTFecha.applyProperties( $.createStyle(Alloy.Fuente()) );
$.lblTHorario.applyProperties( $.createStyle(Alloy.Fuente()) );
$.lblTConsultorio.applyProperties( $.createStyle(Alloy.Fuente()) );
$.lblTMedico.applyProperties( $.createStyle(Alloy.Fuente()) );
$.lblTEstatus.applyProperties( $.createStyle(Alloy.Fuente()) );
$.lblTEspecialidad.applyProperties( $.createStyle(Alloy.Fuente()) );

//Parametros para la vista
var parametros = arguments[0] || {};
$.lblFecha.text = parametros.fecInicio;
$.lblHorario.text = parametros.horario;
$.lblConsultorio.text = parametros.nomConsultorio;
$.lblMedico.text = parametros.nomMedico.length > 20 ? parametros.nomMedico.substring(0, 17) + '...' : parametros.nomMedico;
$.lblEstatus.text = parametros.nomEstatusAgenda;
$.lblEspecialidad.text = parametros.especialidad;

var alto = Titanium.Platform.displayCaps.platformHeight * .25;
$.vwCita.setHeight(alto);


 