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
try{
Alloy.Globals.Map = require('ti.map');
}
catch(ex){}

Alloy.FuenteTitulo = function () {
 if(Alloy.Dimension() == 'baja')
 {
 	return { font:{ fontSize: "18%", fontWeight :'bold', font: 'PT Sans'} };
 }
 else if(Alloy.Dimension() =='media')
 {
 	return { font:{ fontSize: "30%", fontWeight :'bold', font: 'PT Sans'} };
 }
 else if(Alloy.Dimension() == 'alta')
 {
 	return { font:{ fontSize: "45%", fontWeight :'bold', font: 'PT Sans'} };
 }
};

Alloy.Fuente = function () {
 if(Alloy.Dimension() == 'baja')
 {
 	return { font:{ fontSize: "10%", fontWeight :'bold', font: 'PT Sans'} };
 }
 else if(Alloy.Dimension() =='media')
 {
 	return { font:{ fontSize: "20%", fontWeight :'bold', font: 'PT Sans'} };
 }
 else if(Alloy.Dimension()=='alta')
 {
 	return { font:{ fontSize: "30%", fontWeight :'bold', font: 'PT Sans'} };
 }
};

Alloy.FuenteMedia = function () {
 if(Alloy.Dimension() == 'baja')
 {
 	return { font:{ fontSize: "15%", fontWeight :'bold', font: 'PT Sans'} };
 }
 else if(Alloy.Dimension()=='media')
 {
 	return { font:{ fontSize: "25%", fontWeight :'bold', font: 'PT Sans'} };
 }
 else if(Alloy.Dimension()=='alta')
 {
 	return { font:{ fontSize: "30%", fontWeight :'bold', font: 'PT Sans'} };
 }
};

Alloy.FuenteChica = function () {
 if(Alloy.Dimension() == 'baja')
 {
 	return { font:{ fontSize: "8%", fontWeight :'bold', font: 'PT Sans'} };
 }
 else if(Alloy.Dimension()=='media')
 {
 	return { font:{ fontSize: "16%", fontWeight :'bold', font: 'PT Sans'} };
 }
 else if(Alloy.Dimension()=='alta')
 {
 	return { font:{ fontSize: "24%", fontWeight :'bold', font: 'PT Sans'} };
 }
};

Alloy.Dimension = function  () {
  var ancho = Titanium.Platform.displayCaps.platformWidth;
 // Ti.API.info('------------------Ancho: ' + ancho);
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
  
  