var parametros = arguments[0] || {};

$.row.idIndicador = parametros.idIndicador;
$.row.nombreIndicador = $.lblIndicador.text = parametros.nombreIndicador;
$.lblValor.text = parametros.valor;
$.imgBien.image = '/images/' + (parametros.bien ? 'smile' : 'sad') + '.png';
var alto = Titanium.Platform.displayCaps.platformHeight * .05;
$.row.setHeight(alto);
