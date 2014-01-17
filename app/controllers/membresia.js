require('date');

var args = arguments[0] || {};
	//Obtiene datos del usuario
	var emp = JSON.parse(Ti.App.Properties.getString("Empleado"));
	$.lblTitular.applyProperties($.createStyle(Alloy.FuenteMedia()));
	$.lblMembresia.applyProperties($.createStyle(Alloy.FuenteMedia()));
	$.lblHora.applyProperties($.createStyle(Alloy.FuenteTitulo()));
	var trans = Ti.UI.create2DMatrix();
	trans =  trans.rotate(90);
	
function ajustaImagen(e){
	$.imgTarjeta.transform = trans;
	$.imgTarjeta.height = $.vwMembresia.size.width;
	$.imgTarjeta.width = $.vwMembresia.size.height;
	$.imgTarjeta.top = Alloy.espacioTarjeta();
	$.imgTarjeta.show();
}

$.imgTarjeta.addEventListener('postlayout', ajustaImagen);

setTimeout(function(){
	
	Alloy.LoginWeb();
}, 1000);
Ti.App.addEventListener('usrLogin', function(e){
	Ti.API.info(JSON.stringify(e));
	if(e.valido == true){
		var url = Alloy.CFG.urlAPI + 'membresia?membresia=' + emp.membresia;
		
		var cliSSL = Ti.Network.createHTTPClient({
			onload: function(e){
				var titular = JSON.parse(this.responseText);
				Ti.API.info(this.responseText);
				
					
					$.lblTitular.text = titular.nomConcatenado;
					$.lblMembresia.text = titular.memMembresia;
					
					$.lblHora.transform = $.lblTitular.transform = $.lblMembresia.transform = trans;
					
					$.lblMembresia.left = -$.lblMembresia.size.width + ($.imgTarjeta.size.width * .01);
					$.lblTitular.left = ($.lblTitular.size.width / 2) + ($.imgTarjeta.size.width * .09) - $.lblMembresia.size.width;
					$.lblHora.right = $.imgTarjeta.size.width * .08  - ($.lblHora.size.width / 2);
					
					$.lblMembresia.top = $.imgTarjeta.size.height * .15 + ($.lblMembresia.size.width / 2);
					$.lblTitular.top = $.imgTarjeta.size.height * .15 + ($.lblTitular.size.width / 2);
					$.lblHora.bottom = $.imgTarjeta.size.height * .05 + ($.lblHora.size.width / 2);
					
					$.imgTarjeta.removeEventListener('postlayout', ajustaImagen);
					//Ti.API.info($.imgTarjeta.size.width + '-' + $.lblTitular.size.width / 2 + ' - '+ $.imgTarjeta.size.height  + ' - ');
					Ti.App.fireEvent('ocultaCargando');
			},
			onerror:function(e){
				var error = JSON.parse(e);
			
				Ti.UI.createAlertDialog({
					message : 'Error:' + error.Message,
					ok : 'Aceptar',
					title : 'Error Membresia'
				}).show();
			}
		});
		cliSSL.open('GET', url);
		cliSSL.send();
	}
	else
	{
		 Ti.UI.createAlertDialog({
				message : 'EL empleado no tiene una membresia asiganada o es incorrecta.',
				ok : 'Aceptar',
				title : 'Error Login'
			}).show();
	}

});


setInterval(function(){
	$.lblHora.text = new Date().toString('HH:mm:ss');
}, 1000);
