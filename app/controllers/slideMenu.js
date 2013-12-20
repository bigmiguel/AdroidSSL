Alloy.parent = this;
//Estilos controles
$.lblTitulo.applyProperties( $.createStyle(Alloy.FuenteTitulo()) );
$.lblNombre.applyProperties( $.createStyle(Alloy.FuenteChica()) );
$.lblHeaderSL.applyProperties( $.createStyle(Alloy.FuenteMedia()) );

//Obtiene datos del usuario
var alto = Titanium.Platform.displayCaps.platformHeight;
var emp = JSON.parse(Ti.App.Properties.getString("Empleado"));

$.lblNombre.text =  emp.nombre;

//Crea el mnenu de la applicacion
var Menu = [
	{
		icon:'/images/user.png',
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
		icon:'/images/docleftmedia.png',
		titulo : 'Medicos',
		vista : 'redMedicos'
	}];
	
var _d = [];
var _dSI = [];
	
//Menu Salud Laboral
for (var i=0; i < Menu.length; i++) {
  	var _parametros = Menu[i];
  	var _menuFila = Alloy.createController('menurow', _parametros).getView();  		 
	_d.push(_menuFila);
	$.leftTableView.add(_menuFila);
	//Evento que se dispara cuando se hace click sobre una opcion del menu
	_menuFila.addEventListener('click',function(e)
	{
		$.btnMenu.fireEvent('click');
		$.cargando.show();
		$.contentview.remove(_currentView);
		var nuevaVista = Alloy.createController(e.source.vista).getView();	
		$.contentview.add(nuevaVista);
		_currentView = nuevaVista;
		$.cargando.hide();
	});
};
//Menu salud interactiva
var lblTitulo = Ti.UI.createLabel({
	text:'Salud Laboral'
});
$.addClass(lblTitulo, 'lblHeaderMenu');
lblTitulo.applyProperties( $.createStyle(Alloy.FuenteMedia()) );
$.leftTableView.add(lblTitulo);
for (var i=0; i < MenuSI.length; i++) {
  	var _parametros = MenuSI[i];
  	var _menuFila = Alloy.createController('menurow', _parametros).getView();  		 
	_dSI.push(_menuFila);
	$.leftTableView.add(_menuFila);
	//Evento que se dispara cuando se hace click sobre una opcion del menu
 	_menuFila.addEventListener('click',function(e)
	{
		$.btnMenu.fireEvent('click');
		$.cargando.show();
		$.contentview.remove(_currentView);
		var nuevaVista = Alloy.createController(e.source.vista).getView();	
		$.contentview.add(nuevaVista);
		_currentView = nuevaVista;
		$.cargando.hide();
	});
};

//Oculta o muestra el boton 
exports.muestraSubMenu = function(){
	$.btnMenuDer.show();
};
exports.ocultaSubMenu = function(){
	$.btnMenuDer.hide();
};

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

