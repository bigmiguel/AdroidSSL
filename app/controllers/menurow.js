var parametros = arguments[0] || {};

$.icon.image = parametros.icon;
$.title.text = parametros.titulo || '';
this.vista = $.title.vista = $.icon.vista = $.row.vista = $.vGroup.vista = $.rowUP.vista = $.rowDown.vista = parametros.vista || '';
this.params = $.title.params = $.icon.params = $.row.params = $.vGroup.params = $.rowUP.params = $.rowDown.params = parametros.params || '';


$.title.applyProperties($.createStyle(Alloy.FuenteMedia()));
function ajustaVista(e){
	var tamanio = $.title.size.height +  Alloy.espacioMenu();
	
	$.row.setHeight(tamanio);
	$.icon.setHeight(tamanio * .8);
	$.icon.setWidth(tamanio * .8);
	$.icon.setTop(tamanio * .1);
	$.row.removeEventListener('postlayout',ajustaVista);
}

$.row.addEventListener('postlayout',ajustaVista);

