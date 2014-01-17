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
 	return { font:{ fontSize: "18%", fontWeight :'bold', font: 'Segoe UI'} };
 }
 else if(Alloy.Dimension() =='media')
 {
 	return { font:{ fontSize: "36%", fontWeight :'bold', font: 'Segoe UI'} };
 }
 else if(Alloy.Dimension() == 'alta')
 {
 	return { font:{ fontSize: "72%", fontWeight :'bold', font: 'Segoe UI'} };
 }
};

Alloy.Fuente = function () {
 if(Alloy.Dimension() == 'baja')
 {
 	return { font:{ fontSize: "12%", font: 'Segoe UI'} };
 }
 else if(Alloy.Dimension() =='media')
 {
 	return { font:{ fontSize: "22%", font: 'Segoe UI'} };
 }
 else if(Alloy.Dimension()=='alta')
 {
 	return { font:{ fontSize: "40%", font: 'Segoe UI'} };
 }
};

Alloy.FuenteMedia = function () {
 if(Alloy.Dimension() == 'baja')
 {
 	return { font:{ fontSize: "13%", font: 'Segoe UI'} };
 }
 else if(Alloy.Dimension()=='media')
 {
 	return { font:{ fontSize: "25%", font: 'Segoe UI'} };
 }
 else if(Alloy.Dimension()=='alta')
 {
 	return { font:{ fontSize: "50%", font: 'Segoe UI'} };
 }
};

Alloy.FuenteChica = function () {
 if(Alloy.Dimension() == 'baja')
 {
 	return { font:{ fontSize: "10%", font: 'Segoe UI'} };
 }
 else if(Alloy.Dimension()=='media')
 {
 	return { font:{ fontSize: "16%", font: 'Segoe UI'} };
 }
 else if(Alloy.Dimension()=='alta')
 {
 	return { font:{ fontSize: "32%", font: 'Segoe UI'} };
 }
};

Alloy.espacioMenu = function () {
 if(Alloy.Dimension() == 'baja')
 {
 	return 12;
 }
 else if(Alloy.Dimension()=='media')
 {
 	return 30;
 }
 else if(Alloy.Dimension()=='alta')
 {
 	return 45;
 }
};
Alloy.espacioTarjeta = function () {
 if(Alloy.Dimension() == 'baja')
 {
 	return '50dp';
 }
 else if(Alloy.Dimension()=='media')
 {
 	return '80dp';
 }
 else if(Alloy.Dimension()=='alta')
 {
 	return '100dp';
 }
};

Alloy.Dimension = function  () {
  var ancho = Ti.Platform.displayCaps.platformWidth;
  //Ti.API.info('------------------Ancho: ' + ancho);
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
  
Alloy.LoginWeb = function(){
	var url = Alloy.CFG.urlAPIMH + 'LoginU';
	//Obtiene datos del usuario
	var emp = JSON.parse(Ti.App.Properties.getString("Empleado"));
	
	if(emp.membresia == ''){
		Ti.UI.createAlertDialog({
			message : 'No hay una membresia ligada a este empleado.',
			ok : 'Aceptar',
			title : 'Falta Membresìa'
		}).show();
		return false;
	}
	
	var cliMH = Ti.Network.createHTTPClient({
	onload : function(e){
		var res= JSON.parse(this.responseText);
		var val = res.response == 'ok' ? true : false;
		Ti.App.fireEvent('usrLogin', { valido : val  }); 
	},
	onerror: function  (e) {
	  Ti.UI.createAlertDialog({
			message : 'Error: ' + e,
			ok : 'Aceptar',
			title : 'Error Login'
		}).show();
		return false;
	}
});
	var params = {	
		"LoginU[idMembresia]" : emp.membresia,
		"LoginU[rfc]" : emp.rfc.toUpperCase()
	};
	cliMH.open('POST', url);
	cliMH.send(params);
};
