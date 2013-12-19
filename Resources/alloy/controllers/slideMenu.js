function Controller() {
    function acomodaMenu() {
        var altoMenu = (Menu.length + 1) * $.leftTableView.headerView.size.height + 15 + 6 * Menu.length;
        $.leftTableView.setHeight(altoMenu);
        $.leftTableViewSI.setHeight(altoMenu);
        $.leftTableViewSI.removeEventListener("postlayout", acomodaMenu);
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
        orientationModes: "[Titanium.UI.PORTRAIT]"
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
        backgroundColor: "#303030",
        layout: "vertical",
        id: "leftMenu"
    });
    $.__views.containerview.add($.__views.leftMenu);
    $.__views.__alloyId54 = Ti.UI.createView({
        layout: "horizontal",
        bacbackgroundColor: "#040404",
        height: "12%",
        id: "__alloyId54"
    });
    $.__views.leftMenu.add($.__views.__alloyId54);
    $.__views.imgEmpelado = Ti.UI.createImageView({
        id: "imgEmpelado",
        left: "5px",
        top: "5px",
        width: "15%",
        height: "40%",
        image: "/images/empDefault.png"
    });
    $.__views.__alloyId54.add($.__views.imgEmpelado);
    $.__views.lblNombre = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#FFF",
        left: "5%",
        id: "lblNombre"
    });
    $.__views.__alloyId54.add($.__views.lblNombre);
    $.__views.leftTableView = Ti.UI.createTableView({
        id: "leftTableView"
    });
    $.__views.leftMenu.add($.__views.leftTableView);
    $.__views.__alloyId56 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId56"
    });
    $.__views.lblHeaderSL = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#FFF",
        left: "5%",
        text: "Salud Laboral",
        id: "lblHeaderSL"
    });
    $.__views.__alloyId56.add($.__views.lblHeaderSL);
    $.__views.leftTableView.headerView = $.__views.__alloyId56;
    $.__views.leftTableViewSI = Ti.UI.createTableView({
        id: "leftTableViewSI"
    });
    $.__views.leftMenu.add($.__views.leftTableViewSI);
    $.__views.__alloyId58 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId58"
    });
    $.__views.__alloyId59 = Ti.UI.createView({
        height: "3dp",
        id: "__alloyId59"
    });
    $.__views.__alloyId58.add($.__views.__alloyId59);
    $.__views.lblHeaderSI = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#FFF",
        left: "5%",
        text: "Salud Interactiva",
        id: "lblHeaderSI"
    });
    $.__views.__alloyId58.add($.__views.lblHeaderSI);
    $.__views.leftTableViewSI.headerView = $.__views.__alloyId58;
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
        shadowRadius: "2.5",
        id: "shadowview"
    });
    $.__views.movableview.add($.__views.shadowview);
    $.__views.navview = Ti.UI.createView({
        top: "0dp",
        left: "0dp",
        width: Ti.Platform.displayCaps.platformWidth,
        height: "10%",
        backgroundColor: "#001f5b",
        color: "#FFF",
        backgroundGradient: {
            type: "linear",
            colors: [ "#001f5b", "#4E6EAD" ]
        },
        id: "navview"
    });
    $.__views.shadowview.add($.__views.navview);
    $.__views.btnMenu = Ti.UI.createButton({
        backgroundGradient: {
            type: "linear",
            colors: [ "#001f5b", "#4E6EAD" ]
        },
        color: "#FFF",
        font: {
            fontSize: "20%",
            fontWeight: "blod"
        },
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderWidth: "1dp",
        borderRadius: 5,
        backgroundImage: "/images/ButtonMenu.png",
        backgroundColor: "none",
        left: "2%",
        top: "13%",
        width: "10%",
        height: "75%",
        style: "none",
        zIndex: 2,
        id: "btnMenu"
    });
    $.__views.navview.add($.__views.btnMenu);
    $.__views.lblTitulo = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#FFF",
        textAlign: "center",
        shadowColor: "#000000",
        shadowOffset: {
            x: 0,
            y: -3
        },
        backgroundGradient: "none",
        zIndex: 0,
        text: "Salud Laboral",
        id: "lblTitulo",
        backgroundColor: "none"
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
    $.__views.cargando = Ti.UI.createActivityIndicator({
        id: "cargando"
    });
    $.__views.contentview.add($.__views.cargando);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.lblTitulo.applyProperties($.createStyle(Alloy.FuenteTitulo()));
    $.lblNombre.applyProperties($.createStyle(Alloy.FuenteChica()));
    $.lblHeaderSL.applyProperties($.createStyle(Alloy.FuenteMedia()));
    $.lblHeaderSI.applyProperties($.createStyle(Alloy.FuenteMedia()));
    Titanium.Platform.displayCaps.platformHeight;
    var emp = JSON.parse(Ti.App.Properties.getString("Empleado"));
    $.lblNombre.text = emp.nombre;
    var Menu = [ {
        icon: "/images/user.png",
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
        icon: "/images/docleftmedia.png",
        titulo: "Medicos",
        vista: "redMedicos"
    } ];
    var _d = [];
    var _dSI = [];
    for (var i = 0; Menu.length > i; i++) {
        var _parametros = Menu[i];
        var _menuFila = Alloy.createController("menurow", _parametros).getView();
        _d.push(_menuFila);
    }
    for (var i = 0; MenuSI.length > i; i++) {
        var _parametros = MenuSI[i];
        var _menuFila = Alloy.createController("menurow", _parametros).getView();
        _dSI.push(_menuFila);
    }
    $.leftTableView.data = _d;
    $.leftTableViewSI.data = _dSI;
    $.leftTableViewSI.addEventListener("postlayout", acomodaMenu);
    $.leftTableView.addEventListener("click", function(e) {
        $.btnMenu.fireEvent("click");
        $.cargando.show();
        $.contentview.remove(_currentView);
        var nuevaVista = Alloy.createController(e.row.vista).getView();
        $.contentview.add(nuevaVista);
        _currentView = nuevaVista;
        $.cargando.hide();
    });
    $.leftTableViewSI.addEventListener("click", function(e) {
        $.btnMenu.fireEvent("click");
        $.cargando.show();
        $.contentview.remove(_currentView);
        var nuevaVista = Alloy.createController(e.row.vista).getView();
        $.contentview.add(nuevaVista);
        _currentView = nuevaVista;
        $.cargando.hide();
    });
    $.btnMenu.addEventListener("click", function(e) {
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
    var _currentView = Alloy.createController("datos").getView();
    $.contentview.add(_currentView);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;