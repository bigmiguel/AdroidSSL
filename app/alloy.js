// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
Alloy.limpiaPicker = function(picker){
	try{
	if(picker.columns[0]) {
    var _col = picker.columns[0];
        var len = _col.rowCount;
        for(var x = len-1; x >= 0; x-- ){
                var _row = _col.rows[x];
                _col.removeRow(_row);
               }
        }
       }catch(ex)
       {
       	Ti.API.info(ex);
       }
};
try{
Alloy.Globals.Map = require('ti.map');
}
catch(ex){
	alert(ex);
}

Alloy.FuenteTitulo = function () {
 if(Alloy.Dimension() == 'baja')
 {
 	return { font:{ fontSize: "18%", fontWeight :'bold', font: 'PT Sans'} };
 }
 else if(Alloy.Dimension() =='media')
 {
 	return { font:{ fontSize: "36%", fontWeight :'bold', font: 'PT Sans'} };
 }
 else if(Alloy.Dimension() == 'alta')
 {
 	return { font:{ fontSize: "72%", fontWeight :'bold', font: 'PT Sans'} };
 }
};

Alloy.Fuente = function () {
 if(Alloy.Dimension() == 'baja')
 {
 	return { font:{ fontSize: "12%", font: 'PT Sans'} };
 }
 else if(Alloy.Dimension() =='media')
 {
 	return { font:{ fontSize: "24%", font: 'PT Sans'} };
 }
 else if(Alloy.Dimension()=='alta')
 {
 	return { font:{ fontSize: "48%", font: 'PT Sans'} };
 }
};

Alloy.FuenteMedia = function () {
 if(Alloy.Dimension() == 'baja')
 {
 	return { font:{ fontSize: "13%", font: 'PT Sans'} };
 }
 else if(Alloy.Dimension()=='media')
 {
 	return { font:{ fontSize: "25%", font: 'PT Sans'} };
 }
 else if(Alloy.Dimension()=='alta')
 {
 	return { font:{ fontSize: "50%", font: 'PT Sans'} };
 }
};

Alloy.FuenteChica = function () {
 if(Alloy.Dimension() == 'baja')
 {
 	return { font:{ fontSize: "10%", font: 'PT Sans'} };
 }
 else if(Alloy.Dimension()=='media')
 {
 	return { font:{ fontSize: "16%", font: 'PT Sans'} };
 }
 else if(Alloy.Dimension()=='alta')
 {
 	return { font:{ fontSize: "32%", font: 'PT Sans'} };
 }
};

Alloy.espacioMenu = function () {
 if(Alloy.Dimension() == 'baja')
 {
 	return 6;
 }
 else if(Alloy.Dimension()=='media')
 {
 	return 15;
 }
 else if(Alloy.Dimension()=='alta')
 {
 	return 30;
 }
};

Alloy.Dimension = function  () {
  var ancho = Titanium.Platform.displayCaps.platformWidth;
  Ti.API.info('------------------Ancho: ' + ancho);
  if(ancho < 480)
  {
  	return 'baja';
  }
  else if(ancho >= 480 && ancho < 600){
  	return 'media';
  }
  else if(ancho >= 600){
  	return 'alta';
  };		
};
  
  