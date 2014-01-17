
//Estilos controles
$.lblTitulo.applyProperties( $.createStyle(Alloy.FuenteTitulo()) );



//Obtiene datos del usuario
var alto = Titanium.Platform.displayCaps.platformHeight;
var emp = JSON.parse(Ti.App.Properties.getString("Empleado"));

muestraCargando();
//Crea el mnenu de la applicacion
var Menu = [
	{
		icon:'/images/datos.png',
		titulo : 'Mis Datos',
		vista : 'datos'
	},
	{
		icon:'/images/indicadores.png',
		titulo : 'Mis Indicadores',
		vista : 'indicadores'
	},
	{
		icon:'/images/citas.png',
		titulo : 'Mis Citas',
		vista : 'citas'
	}
];
var MenuSI = [{
		icon:'/images/medicos.png',
		titulo : 'Medicos',
		vista : 'redMedicos',
		params: { 
			idAfiliacion : '2',
			idTipoBusqueda: '1'
			}
	},{
		icon:'/images/tdc.png',
		titulo : 'Descuentos TDC',
		vista : 'redMedicos',
		params: { 
			idAfiliacion : '2',
			idTipoBusqueda: '3'
			}
	},{
		icon:'/images/ambulancias.png',
		titulo : ' Serviciòs',
		vista : 'redMedicos',
		params: { 
			idAfiliacion : '2',
			idTipoBusqueda: '2'
			}
	},{
		icon:'/images/membresia.png',
		titulo : 'Mi Membresía',
		vista : 'membresia',
		params : null
	}];

//Nombre del usuario
var usuario = {
		icon:'/images/user.png',
		titulo : emp.nombre,
		vista: null,
		params: null
};
var salud = {
		icon:'/images/salud_interactiva.png',
		titulo : 'Salud Interactiva',
		vista: null,
		params: null
};

var _menuFilaUsu = Alloy.createController('menurow', usuario).getView();
var _menuFilaSalud =   Alloy.createController('menurow', salud).getView();		 
$.leftTableView.add(_menuFilaUsu);
_menuFilaUsu.backgroundColor ='#333333';

//Menu Salud Laboral
for (var i=0; i < Menu.length; i++) {
  	var _parametros = Menu[i];
  	var _menuFila = Alloy.createController('menurow', _parametros).getView();  		 
	
	$.leftTableView.add(_menuFila);
	//Evento que se dispara cuando se hace click sobre una opcion del menu
	_menuFila.addEventListener('click',function(e)
	{
		$.btnMenu.fireEvent('click');
		muestraCargando();
		$.contentview.remove(_currentView);
		_currentView = null;
		if(vistaDer != null){
			$.rightMenu.remove(vistaDer);
			vistaDer = null;
		}
		$.btnMenuDer.hide();
		var nuevaVista = Alloy.createController(e.source.vista, e.source.params).getView();	
		$.contentview.add(nuevaVista);
		_currentView = nuevaVista;
	});
};
//Menu salud interactiva
$.leftTableView.add(_menuFilaSalud);
_menuFilaSalud.backgroundColor ='#333333';


for (var i=0; i < MenuSI.length; i++) {
  	var _parametros = MenuSI[i];
  	var _menuFila = Alloy.createController('menurow', _parametros).getView();  		 
	
	$.leftTableView.add(_menuFila);
	//Evento que se dispara cuando se hace click sobre una opcion del menu
 	_menuFila.addEventListener('click',function(e)
	{
		$.btnMenu.fireEvent('click');
		muestraCargando();
		$.contentview.remove(_currentView);
		if(vistaDer != null){
			$.rightMenu.remove(vistaDer);
			vistaDer = null;
		}
		$.btnMenuDer.hide();
		var nuevaVista = Alloy.createController(e.source.vista, e.source.params).getView();	
		$.contentview.add(nuevaVista);
		_currentView = nuevaVista;
		$.contentview.setZIndex(2);
	});
};
//Eventos a nivel Aplicacion
Ti.App.addEventListener('muestraCargando', function(){
  	muestraCargando();
});
Ti.App.addEventListener('ocultaCargando', function(){
  $.vwCarga.hide();
});
var vistaDer = null;
Ti.App.addEventListener('muestraSubMenu', function  (e) {
	$.rightMenu.removeAllChildren();
  $.btnMenuDer.show();
  vistaDer = Alloy.createController(e.vista, e.parametros).getView();
$.rightMenu.add(vistaDer);
});
Ti.App.addEventListener('cierraMenuDer', function(e) {
  	$.btnMenuDer.fireEvent('click');
});
var vistaDet = null;
Ti.App.addEventListener('MuestraDetalleProveedor', function(e){
	setTimeout(function(e) {
		if(!$.btnMenuDer.toogle)
	   $.btnMenuDer.fireEvent('click');	
	}, 500);
	$.rightMenu.removeAllChildren();
	 vistaDet = null;
	 vistaDet = Alloy.createController('detalleProveedor', e).getView();
	 $.rightMenu.add(vistaDet);
});

Ti.App.addEventListener('regresaBusqueda', function(){
	if(vistaDet != null)
		$.rightMenu.remove(vistaDet);
	$.rightMenu.add(vistaDer);
	vistaDet = null;
});

//Eventos
$.wnSlideMenu.addEventListener('android:back', function(e) {
	var activity = Titanium.Android.currentActivity;
	activity.finish();
});
//Evento para abrir el Menu
$.btnMenu.addEventListener('click',function(e){
	$.leftMenu.show();
    $.rightMenu.hide();
	 if(e.source.toggle == true){
	 	$.movableview.setWidth(Titanium.Platform.displayCaps.platformWidth);
        $.movableview.animate({
            left:0,
            duration:400,
            curve:Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
        });
        e.source.toggle = false;
    }
    // If the menu isn't opened
    else{
         $.movableview.animate({
            left : "60%",
            duration : 400,
            curve : Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
        });
        e.source.toggle  = true;
    }
});
$.btnMenuDer.addEventListener('click',function(e){
$.leftMenu.hide();
$.rightMenu.show();
	 if(e.source.toggle == true){
	 	$.movableview.setWidth(Titanium.Platform.displayCaps.platformWidth);
        $.movableview.animate({
            left:0,
            duration:400,
            curve:Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
        });
        e.source.toggle = false;
    }
    // If the menu isn't opened
    else{
         $.movableview.animate({
            left : "-80%",
            duration : 400,
            curve : Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
        });
        e.source.toggle  = true;
    }
});
var _currentView = Alloy.createController('datos').getView();

$.contentview.add(_currentView);
//Metodos
function muestraCargando () {
	$.cargando.show();
	$.vwCarga.show();  
}
