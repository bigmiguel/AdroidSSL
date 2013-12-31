var parametros = arguments[0] || {};

$.icon.image =parametros.icon;
$.title.text = parametros.titulo || '';
this.vista = $.title.vista = $.icon.vista = $.row.vista = parametros.vista || '';

$.title.applyProperties($.createStyle(Alloy.FuenteMedia()));
function ajustaVista(e){
	$.row.setHeight($.title.size.height + Alloy.espacioMenu());
	$.row.removeEventListener('postlayout',ajustaVista);
}

$.row.addEventListener('postlayout',ajustaVista);
