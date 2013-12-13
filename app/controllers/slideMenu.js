//Estilos controles
$.lblTitulo.applyProperties( $.createStyle(Alloy.FuenteTitulo()) );
$.lblNombre.applyProperties( $.createStyle(Alloy.FuenteChica()) );
$.lblHeaderSL.applyProperties( $.createStyle(Alloy.Fuente()) );
$.lblHeaderSI.applyProperties( $.createStyle(Alloy.Fuente()) );

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

var _d =[];
	
	
for (var i=0; i < Menu.length; i++) {
  	var _parametros = Menu[i];
  	var _menuFila = Alloy.createController('menurow', _parametros).getView();  		 
	_d.push(_menuFila);
};

$.leftTableView.data =_d;

$.wnSlideMenu.addEventListener('load', function (e) {
	//alert($.leftTableView.headerView.size.height);//.size.height);  
	var altoMenu = ((Menu.length + 1) * $.leftTableView.headerView.size.height) + 5;
	$.leftTableView.setHeight(altoMenu);
	$.leftTableViewSI.setHeight(altoMenu);
});
//Evento que se dispara cuando se hace click sobre una opcion del menu
$.leftTableView.addEventListener('click',function(e)
{
	$.btnMenu.fireEvent('click');
	$.cargando.show();
	$.contentview.remove(_currentView);
	var nuevaVista = Alloy.createController(e.row.vista).getView();	
	$.contentview.add(nuevaVista);
	_currentView = nuevaVista;
	$.cargando.hide();
});

$.btnMenu.addEventListener('click',function(e){
	 if(e.source.toggle == true){
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
var _currentView = Alloy.createController('datos').getView();

$.contentview.add(_currentView);

