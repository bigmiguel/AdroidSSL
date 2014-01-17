function Controller() {
    function ajustaImagen() {
        $.imgTarjeta.transform = trans;
        $.imgTarjeta.height = $.vwMembresia.size.width;
        $.imgTarjeta.width = $.vwMembresia.size.height;
        $.imgTarjeta.top = Alloy.espacioTarjeta();
        $.imgTarjeta.show();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "membresia";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.vwMembresia = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "vwMembresia"
    });
    $.__views.vwMembresia && $.addTopLevelView($.__views.vwMembresia);
    $.__views.imgTarjeta = Ti.UI.createImageView({
        id: "imgTarjeta",
        image: "/images/clasica.png",
        visible: "false"
    });
    $.__views.vwMembresia.add($.__views.imgTarjeta);
    $.__views.lblHora = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#FFF",
        id: "lblHora"
    });
    $.__views.vwMembresia.add($.__views.lblHora);
    $.__views.lblTitular = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#21485D",
        id: "lblTitular",
        zIndex: "99999"
    });
    $.__views.vwMembresia.add($.__views.lblTitular);
    $.__views.lblMembresia = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#21485D",
        id: "lblMembresia",
        zIndex: "99999"
    });
    $.__views.vwMembresia.add($.__views.lblMembresia);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("date");
    arguments[0] || {};
    var emp = JSON.parse(Ti.App.Properties.getString("Empleado"));
    $.lblTitular.applyProperties($.createStyle(Alloy.FuenteMedia()));
    $.lblMembresia.applyProperties($.createStyle(Alloy.FuenteMedia()));
    $.lblHora.applyProperties($.createStyle(Alloy.FuenteTitulo()));
    var trans = Ti.UI.create2DMatrix();
    trans = trans.rotate(90);
    $.imgTarjeta.addEventListener("postlayout", ajustaImagen);
    setTimeout(function() {
        Alloy.LoginWeb();
    }, 1e3);
    Ti.App.addEventListener("usrLogin", function(e) {
        Ti.API.info(JSON.stringify(e));
        if (true == e.valido) {
            var url = Alloy.CFG.urlAPI + "membresia?membresia=" + emp.membresia;
            var cliSSL = Ti.Network.createHTTPClient({
                onload: function() {
                    var titular = JSON.parse(this.responseText);
                    Ti.API.info(this.responseText);
                    $.lblTitular.text = titular.nomConcatenado;
                    $.lblMembresia.text = titular.memMembresia;
                    $.lblHora.transform = $.lblTitular.transform = $.lblMembresia.transform = trans;
                    $.lblMembresia.left = -$.lblMembresia.size.width + .01 * $.imgTarjeta.size.width;
                    $.lblTitular.left = $.lblTitular.size.width / 2 + .09 * $.imgTarjeta.size.width - $.lblMembresia.size.width;
                    $.lblHora.right = .08 * $.imgTarjeta.size.width - $.lblHora.size.width / 2;
                    $.lblMembresia.top = .15 * $.imgTarjeta.size.height + $.lblMembresia.size.width / 2;
                    $.lblTitular.top = .15 * $.imgTarjeta.size.height + $.lblTitular.size.width / 2;
                    $.lblHora.bottom = .05 * $.imgTarjeta.size.height + $.lblHora.size.width / 2;
                    $.imgTarjeta.removeEventListener("postlayout", ajustaImagen);
                    Ti.App.fireEvent("ocultaCargando");
                },
                onerror: function(e) {
                    var error = JSON.parse(e);
                    Ti.UI.createAlertDialog({
                        message: "Error:" + error.Message,
                        ok: "Aceptar",
                        title: "Error Membresia"
                    }).show();
                }
            });
            cliSSL.open("GET", url);
            cliSSL.send();
        } else Ti.UI.createAlertDialog({
            message: "EL empleado no tiene una membresia asiganada o es incorrecta.",
            ok: "Aceptar",
            title: "Error Login"
        }).show();
    });
    setInterval(function() {
        $.lblHora.text = new Date().toString("HH:mm:ss");
    }, 1e3);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;