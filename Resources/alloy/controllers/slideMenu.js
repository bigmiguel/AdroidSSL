function Controller() {
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
    $.__views.__alloyId65 = Ti.UI.createView({
        layout: "horizontal",
        bacbackgroundColor: "#040404",
        height: "12%",
        id: "__alloyId65"
    });
    $.__views.leftMenu.add($.__views.__alloyId65);
    $.__views.imgEmpelado = Ti.UI.createImageView({
        id: "imgEmpelado",
        left: "5px",
        top: "5px",
        width: "15%",
        height: "40%",
        image: "/images/empDefault.png"
    });
    $.__views.__alloyId65.add($.__views.imgEmpelado);
    $.__views.lblNombre = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#FFF",
        font: {
            fontSize: "12%"
        },
        left: "5%",
        id: "lblNombre"
    });
    $.__views.__alloyId65.add($.__views.lblNombre);
    $.__views.leftTableView = Ti.UI.createTableView({
        id: "leftTableView"
    });
    $.__views.leftMenu.add($.__views.leftTableView);
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
        height: "8%",
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
        top: "7%",
        width: "10%",
        height: "80%",
        style: "none",
        zIndex: 2,
        id: "btnMenu"
    });
    $.__views.navview.add($.__views.btnMenu);
    $.__views.__alloyId66 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#FFF",
        textAlign: "center",
        font: {
            fontSize: "35%",
            fontWeight: "bold",
            font: "PT Sans"
        },
        backgroundGradient: "none",
        zIndex: 0,
        text: "Salud Laboral",
        backgroundColor: "none",
        id: "__alloyId66"
    });
    $.__views.navview.add($.__views.__alloyId66);
    $.__views.contentview = Ti.UI.createView({
        left: "0dp",
        width: Ti.Platform.displayCaps.platformWidth,
        height: Ti.UI.Fill,
        top: "7%",
        backgroundColor: "white",
        id: "contentview"
    });
    $.__views.shadowview.add($.__views.contentview);
    $.__views.cargando = Ti.UI.createActivityIndicator({
        id: "cargando"
    });
    $.__views.contentview.add($.__views.cargando);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var emp = JSON.parse(Ti.App.Properties.getString("Empleado"));
    $.lblNombre.text = emp.nombre;
    var Menu = [ {
        icon: "/images/menuIconDefault.png",
        titulo: "Mis Datos",
        vista: "datos"
    }, {
        icon: "/images/menuIconDefault.png",
        titulo: "Mis Indicadores",
        vista: "indicadores"
    }, {
        icon: "/images/menuIconDefault.png",
        titulo: "Mis Citas",
        vista: "citas"
    } ];
    var _d = [];
    for (var i = 0; Menu.length > i; i++) {
        var _parametros = Menu[i];
        var _menuFila = Alloy.createController("menurow", _parametros).getView();
        _d.push(_menuFila);
    }
    $.leftTableView.data = _d;
    $.leftTableView.addEventListener("click", function(e) {
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