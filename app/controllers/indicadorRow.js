var parametros = arguments[0] || {};

$.row.idIndicador = parametros.idIndicador;
$.row.nombreIndicador = $.lblIndicador.text = parametros.nombreIndicador;
$.lblValor.text = parametros.valor;
$.imgBien.image = '/images/' + (parametros.bien ? 'pro' : 'contra') + '.png';
//Estilo a los controles
$.lblIndicador.applyProperties( $.createStyle(Alloy.Fuente()) );
$.lblValor.applyProperties( $.createStyle(Alloy.Fuente()) );