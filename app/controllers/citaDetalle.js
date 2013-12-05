//Parametros para la vista
var parametros = arguments[0] || {};
$.lblFecha.text = parametros.fecInicio;
$.lblHorario.text = parametros.horario;
$.lblConsultorio.text = parametros.nomConsultorio;
$.lblMedico.text = parametros.nomMedico.length > 20 ? parametros.nomMedico.substring(0, 17) + '...' : parametros.nomMedico;
$.lblEstatus.text = parametros.nomEstatusAgenda;
$.lblEspecialidad.text = parametros.especialidad;