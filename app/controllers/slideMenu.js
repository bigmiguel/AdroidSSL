
//Obtiene datos del usuario
var emp = JSON.parse(Ti.App.Properties.getString("Empleado"));

$.lblNombre.text =  emp.nombre;

//Crea el mnenu de la applicacion
var Menu = [
	{
		icon:'/images/menuIconDefault.png',
		titulo : 'Mis Datos',
		vista : 'datos'
	},
	{
		icon:'/images/menuIconDefault.png',
		titulo : 'Mis Indicadores',
		vista : 'indicadores'
	},
	{
		icon:'/images/menuIconDefault.png',
		titulo : 'Mis Citas',
		vista : 'citas'
	}
];

var _d =[];
	
	
for (var i=0; i < Menu.length; i++) {
  	var _parametros = Menu[i];
  	var _menuFila = Alloy.createController('menurow',_parametros).getView();  		 
	_d.push(_menuFila);
};

$.leftTableView.data =_d;
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

