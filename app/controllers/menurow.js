var parametros = arguments[0] || {};

$.icon.image =parametros.icon;
$.title.text = parametros.titulo || '';
$.row.vista = parametros.vista || '';

$.title.applyProperties( $.createStyle(Alloy.FuenteMedia()) );
