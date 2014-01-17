function Controller() {
    function muestraCargando() {
        $.cargando.show();
        $.vwCarga.show();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "slideMenu";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.wnSlideMenu = Ti.UI.createWindow({
        id: "wnSlideMenu",
        orientationModes: "[Titanium.UI.PORTRAIT]",
        navBarHidden: "true"
    });
    $.__views.wnSlideMenu && $.addTopLevelView($.__views.wnSlideMenu);
    $.__views.containerview = Ti.UI.createView({
        id: "containerview"
    });
    $.__views.wnSlideMenu.add($.__views.containerview);
    $.__views.leftMenu = Ti.UI.createView({
        top: "0dp",
        left: "0dp",
        width: "60%",
        zIndex: "0",
        backgroundColor: "#333333",
        layout: "vertical",
        id: "leftMenu"
    });
    $.__views.containerview.add($.__views.leftMenu);
    $.__views.leftTableView = Ti.UI.createScrollView({
        id: "leftTableView",
        layout: "vertical"
    });
    $.__views.leftMenu.add($.__views.leftTableView);
    $.__views.rightMenu = Ti.UI.createView({
        top: "0dp",
        right: "0dp",
        width: "80%",
        zIndex: "0",
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "100%",
                y: "70%"
            },
            endPoint: {
                x: "100%",
                y: "100%"
            },
            colors: [ {
                color: "#4E6EAD",
                offset: .01
            }, {
                color: "#95ABD6",
                offset: 1
            } ]
        },
        layout: "vertical",
        id: "rightMenu",
        visible: "false"
    });
    $.__views.containerview.add($.__views.rightMenu);
    $.__views.movableview = Ti.UI.createView({
        id: "movableview"
    });
    $.__views.containerview.add($.__views.movableview);
    $.__views.shadowview = Ti.UI.createView({
        shadowColor: "black",
        shadowOffset: {
            x: "0",
            y: "0"
        },
        shadowRadius: "5",
        id: "shadowview"
    });
    $.__views.movableview.add($.__views.shadowview);
    $.__views.navview = Ti.UI.createView({
        top: "0dp",
        left: "0dp",
        width: Ti.Platform.displayCaps.platformWidth,
        height: "10%",
        backgroundColor: "#21485D",
        color: "#FFF",
        id: "navview"
    });
    $.__views.shadowview.add($.__views.navview);
    $.__views.btnMenu = Ti.UI.createButton({
        backgroundColor: "none",
        color: "#FFF",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderWidth: "0.4dp",
        borderRadius: 5,
        backgroundImage: "/images/ButtonMenu.png",
        left: "2%",
        top: "13%",
        width: "10%",
        height: "75%",
        style: "none",
        zIndex: 2,
        id: "btnMenu"
    });
    $.__views.navview.add($.__views.btnMenu);
    $.__views.btnMenuDer = Ti.UI.createButton({
        backgroundColor: "none",
        color: "#FFF",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderWidth: "0.4dp",
        borderRadius: 5,
        backgroundImage: "/images/ButtonMenuDer.png",
        right: "2%",
        top: "13%",
        width: "10%",
        height: "75%",
        style: "none",
        zIndex: 2,
        id: "btnMenuDer",
        visible: "false"
    });
    $.__views.navview.add($.__views.btnMenuDer);
    $.__views.lblTitulo = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#FFFFFF",
        textAlign: "center",
        shadowColor: "#000000",
        shadowOffset: {
            x: 0,
            y: 3
        },
        zIndex: 0,
        text: "Salud Laboral",
        id: "lblTitulo",
        backgroundColor: "none",
        backgroundGradient: "none"
    });
    $.__views.navview.add($.__views.lblTitulo);
    $.__views.contentview = Ti.UI.createView({
        left: "0dp",
        width: Ti.Platform.displayCaps.platformWidth,
        height: Ti.UI.Fill,
        top: "10%",
        backgroundColor: "white",
        zindex: 2,
        id: "contentview"
    });
    $.__views.shadowview.add($.__views.contentview);
    $.__views.vwCarga = Ti.UI.createView({
        width: Ti.API.FILL,
        height: Ti.API.FILL,
        top: 0,
        backgroundColor: "#21485D",
        zIndex: 99999,
        opacity: ".5",
        color: "#FFF",
        id: "vwCarga"
    });
    $.__views.contentview.add($.__views.vwCarga);
    $.__views.cargando = Ti.UI.createActivityIndicator({
        opacity: "1",
        id: "cargando",
        zIndex: "9999",
        message: "Cargando... porfavor espere un momento"
    });
    $.__views.vwCarga.add($.__views.cargando);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.lblTitulo.applyProperties($.createStyle(Alloy.FuenteTitulo()));
    Titanium.Platform.displayCaps.platformHeight;
    var emp = JSON.parse(Ti.App.Properties.getString("Empleado"));
    muestraCargando();
    var Menu = [ {
        icon: "/images/datos.png",
        titulo: "Mis Datos",
        vista: "datos"
    }, {
        icon: "/images/indicadores.png",
        titulo: "Mis Indicadores",
        vista: "indicadores"
    }, {
        icon: "/images/citas.png",
        titulo: "Mis Citas",
        vista: "citas"
    } ];
    var MenuSI = [ {
        icon: "/images/medicos.png",
        titulo: "Medicos",
        vista: "redMedicos",
        params: {
            idAfiliacion: "2",
            idTipoBusqueda: "1"
        }
    }, {
        icon: "/images/tdc.png",
        titulo: "Descuentos TDC",
        vista: "redMedicos",
        params: {
            idAfiliacion: "2",
            idTipoBusqueda: "3"
        }
    }, {
        icon: "/images/ambulancias.png",
        titulo: " Serviciòs",
        vista: "redMedicos",
        params: {
            idAfiliacion: "2",
            idTipoBusqueda: "2"
        }
    }, {
        icon: "/images/membresia.png",
        titulo: "Mi Membresía",
        vista: "membresia",
        params: null
    } ];
    var usuario = {
        icon: "/images/user.png",
        titulo: emp.nombre,
        vista: null,
        params: null
    };
    var salud = {
        icon: "/images/salud_interactiva.png",
        titulo: "Salud Interactiva",
        vista: null,
        params: null
    };
    var _menuFilaUsu = Alloy.createController("menurow", usuario).getView();
    var _menuFilaSalud = Alloy.createController("menurow", salud).getView();
    $.leftTableView.add(_menuFilaUsu);
    _menuFilaUsu.backgroundColor = "#333333";
    for (var i = 0; Menu.length > i; i++) {
        var _parametros = Menu[i];
        var _menuFila = Alloy.createController("menurow", _parametros).getView();
        $.leftTableView.add(_menuFila);
        _menuFila.addEventListener("click", function(e) {
            $.btnMenu.fireEvent("click");
            muestraCargando();
            $.contentview.remove(_currentView);
            _currentView = null;
            if (null != vistaDer) {
                $.rightMenu.remove(vistaDer);
                vistaDer = null;
            }
            $.btnMenuDer.hide();
            var nuevaVista = Alloy.createController(e.source.vista, e.source.params).getView();
            $.contentview.add(nuevaVista);
            _currentView = nuevaVista;
        });
    }
    $.leftTableView.add(_menuFilaSalud);
    _menuFilaSalud.backgroundColor = "#333333";
    for (var i = 0; MenuSI.length > i; i++) {
        var _parametros = MenuSI[i];
        var _menuFila = Alloy.createController("menurow", _parametros).getView();
        $.leftTableView.add(_menuFila);
        _menuFila.addEventListener("click", function(e) {
            $.btnMenu.fireEvent("click");
            muestraCargando();
            $.contentview.remove(_currentView);
            if (null != vistaDer) {
                $.rightMenu.remove(vistaDer);
                vistaDer = null;
            }
            $.btnMenuDer.hide();
            var nuevaVista = Alloy.createController(e.source.vista, e.source.params).getView();
            $.contentview.add(nuevaVista);
            _currentView = nuevaVista;
            $.contentview.setZIndex(2);
        });
    }
    Ti.App.addEventListener("muestraCargando", function() {
        muestraCargando();
    });
    Ti.App.addEventListener("ocultaCargando", function() {
        $.vwCarga.hide();
    });
    var vistaDer = null;
    Ti.App.addEventListener("muestraSubMenu", function(e) {
        $.rightMenu.removeAllChildren();
        $.btnMenuDer.show();
        vistaDer = Alloy.createController(e.vista, e.parametros).getView();
        $.rightMenu.add(vistaDer);
    });
    Ti.App.addEventListener("cierraMenuDer", function() {
        $.btnMenuDer.fireEvent("click");
    });
    var vistaDet = null;
    Ti.App.addEventListener("MuestraDetalleProveedor", function(e) {
        setTimeout(function() {
            $.btnMenuDer.toogle || $.btnMenuDer.fireEvent("click");
        }, 500);
        $.rightMenu.removeAllChildren();
        vistaDet = null;
        vistaDet = Alloy.createController("detalleProveedor", e).getView();
        $.rightMenu.add(vistaDet);
    });
    Ti.App.addEventListener("regresaBusqueda", function() {
        null != vistaDet && $.rightMenu.remove(vistaDet);
        $.rightMenu.add(vistaDer);
        vistaDet = null;
    });
    $.wnSlideMenu.addEventListener("android:back", function() {
        var activity = Titanium.Android.currentActivity;
        activity.finish();
    });
    $.btnMenu.addEventListener("click", function(e) {
        $.leftMenu.show();
        $.rightMenu.hide();
        if (true == e.source.toggle) {
            $.movableview.setWidth(Titanium.Platform.displayCaps.platformWidth);
            $.movableview.animate({
                left: 0,
                duration: 400,
                curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
            });
            e.source.toggle = false;
        } else {
            $.movableview.animate({
                left: "60%",
                duration: 400,
                curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
            });
            e.source.toggle = true;
        }
    });
    $.btnMenuDer.addEventListener("click", function(e) {
        $.leftMenu.hide();
        $.rightMenu.show();
        if (true == e.source.toggle) {
            $.movableview.setWidth(Titanium.Platform.displayCaps.platformWidth);
            $.movableview.animate({
                left: 0,
                duration: 400,
                curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
            });
            e.source.toggle = false;
        } else {
            $.movableview.animate({
                left: "-80%",
                duration: 400,
                curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
            });
            e.source.toggle = true;
        }
    });
    var _currentView = Alloy.createController("datos").getView();
    $.contentview.add(_currentView);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;