function Controller() {
    function bajarmedicoDetalles() {
        var url = Alloy.CFG.urlAPIMH + "detalle";
        var xhr = Titanium.Network.createHTTPClient({
            onload: function() {
                obj = JSON.parse(this.responseText);
                $.lblEspecialidad.text = obj.nomEspecialidad;
                $.lblNombre.text = obj.nombre;
                $.lblDireccion.text = obj.direccion;
                $.lblSucursal.text = obj.nomSucursal;
                latitud = obj.latitud;
                longitud = obj.longitud;
                $.lblHorario.text = obj.horario;
                $.lblCosto.text = "$ " + obj.costo;
                hipervinculo = obj.url_link;
                var tel = "";
                for (var i = 0; obj.telefonos.length > i; i++) tel += obj.telefonos[i].Medio + "\n";
                $.lblTelefono.text = tel;
                var anotacion = Alloy.Globals.Map.createAnnotation({
                    latitude: latitud,
                    longitude: longitud,
                    image: "/images/" + img + calidad,
                    title: "" + obj.nomSucursal
                });
                var newRegion = {
                    latitude: latitud,
                    longitude: longitud,
                    latitudeDelta: .003,
                    longitudeDelta: .003,
                    animate: false
                };
                $.mapViewDet.setLocation(newRegion);
                $.mapViewDet.addAnnotation(anotacion);
            },
            onerror: function() {
                alert("Error de red");
            },
            timeout: 1e4
        });
        var params = {
            id: id
        };
        xhr.open("POST", url);
        xhr.send(params);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "detalleProveedor";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.detalleProveedor = Ti.UI.createScrollView({
        backgroundColor: "white",
        layout: "horizontal",
        backgroundGradient: {
            type: "linear",
            colors: [ {
                color: "#f9f9f9",
                position: 0
            }, {
                color: "#e9e9e9",
                position: 1
            } ],
            backFillStart: true
        },
        id: "detalleProveedor"
    });
    $.__views.detalleProveedor && $.addTopLevelView($.__views.detalleProveedor);
    $.__views.lblTitulo = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#21485D",
        text: "Red Medica",
        id: "lblTitulo"
    });
    $.__views.detalleProveedor.add($.__views.lblTitulo);
    $.__views.lblTNombre = Ti.UI.createLabel({
        width: "28%",
        height: Ti.UI.SIZE,
        color: "#21485D",
        top: "2dp",
        left: "2%",
        text: "Nombre:",
        id: "lblTNombre"
    });
    $.__views.detalleProveedor.add($.__views.lblTNombre);
    $.__views.lblNombre = Ti.UI.createLabel({
        width: "70%",
        height: Ti.UI.SIZE,
        color: "#999",
        top: "2dp",
        id: "lblNombre"
    });
    $.__views.detalleProveedor.add($.__views.lblNombre);
    $.__views.lblTEspecialidad = Ti.UI.createLabel({
        width: "28%",
        height: Ti.UI.SIZE,
        color: "#21485D",
        top: "2dp",
        left: "2%",
        text: "Especialidad:",
        id: "lblTEspecialidad"
    });
    $.__views.detalleProveedor.add($.__views.lblTEspecialidad);
    $.__views.lblEspecialidad = Ti.UI.createLabel({
        width: "70%",
        height: Ti.UI.SIZE,
        color: "#999",
        top: "2dp",
        id: "lblEspecialidad"
    });
    $.__views.detalleProveedor.add($.__views.lblEspecialidad);
    $.__views.lblTSucursal = Ti.UI.createLabel({
        width: "28%",
        height: Ti.UI.SIZE,
        color: "#21485D",
        top: "2dp",
        left: "2%",
        text: "Sucursal:",
        id: "lblTSucursal"
    });
    $.__views.detalleProveedor.add($.__views.lblTSucursal);
    $.__views.lblSucursal = Ti.UI.createLabel({
        width: "70%",
        height: Ti.UI.SIZE,
        color: "#999",
        top: "2dp",
        id: "lblSucursal"
    });
    $.__views.detalleProveedor.add($.__views.lblSucursal);
    $.__views.lblTHorario = Ti.UI.createLabel({
        width: "28%",
        height: Ti.UI.SIZE,
        color: "#21485D",
        top: "2dp",
        left: "2%",
        text: "Horario:",
        id: "lblTHorario"
    });
    $.__views.detalleProveedor.add($.__views.lblTHorario);
    $.__views.lblHorario = Ti.UI.createLabel({
        width: "70%",
        height: Ti.UI.SIZE,
        color: "#999",
        top: "2dp",
        id: "lblHorario"
    });
    $.__views.detalleProveedor.add($.__views.lblHorario);
    $.__views.lblTDireccion = Ti.UI.createLabel({
        width: "28%",
        height: Ti.UI.SIZE,
        color: "#21485D",
        top: "2dp",
        left: "2%",
        text: "Direcciòn:",
        id: "lblTDireccion"
    });
    $.__views.detalleProveedor.add($.__views.lblTDireccion);
    $.__views.lblDireccion = Ti.UI.createLabel({
        width: "70%",
        height: Ti.UI.SIZE,
        color: "#999",
        top: "2dp",
        id: "lblDireccion"
    });
    $.__views.detalleProveedor.add($.__views.lblDireccion);
    $.__views.lblTCosto = Ti.UI.createLabel({
        width: "28%",
        height: Ti.UI.SIZE,
        color: "#21485D",
        top: "2dp",
        left: "2%",
        text: "Costo:",
        id: "lblTCosto"
    });
    $.__views.detalleProveedor.add($.__views.lblTCosto);
    $.__views.lblCosto = Ti.UI.createLabel({
        width: "70%",
        height: Ti.UI.SIZE,
        color: "#999",
        top: "2dp",
        id: "lblCosto"
    });
    $.__views.detalleProveedor.add($.__views.lblCosto);
    $.__views.lblTTelefono = Ti.UI.createLabel({
        width: "28%",
        height: Ti.UI.SIZE,
        color: "#21485D",
        top: "2dp",
        left: "2%",
        text: "Telèfono(s):",
        id: "lblTTelefono"
    });
    $.__views.detalleProveedor.add($.__views.lblTTelefono);
    $.__views.lblTelefono = Ti.UI.createLabel({
        width: "70%",
        height: Ti.UI.SIZE,
        color: "#999",
        top: "2dp",
        id: "lblTelefono"
    });
    $.__views.detalleProveedor.add($.__views.lblTelefono);
    $.__views.mapViewDet = Alloy.Globals.Map.createView({
        width: "95%",
        left: "2.5%",
        height: "35%",
        top: "20dp",
        enableZoomControls: false,
        id: "mapViewDet",
        ns: "Alloy.Globals.Map"
    });
    $.__views.detalleProveedor.add($.__views.mapViewDet);
    $.__views.imgRuta = Ti.UI.createImageView({
        id: "imgRuta",
        image: "/images/vermapa.png",
        top: "0",
        right: "-2%",
        zIndex: "999999",
        width: "25%"
    });
    $.__views.mapViewDet.add($.__views.imgRuta);
    $.__views.btnBusqueda = Ti.UI.createButton({
        backgroundColor: "#21485D",
        color: "#FFF",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderWidth: "0.4dp",
        borderRadius: 5,
        title: "Busqueda",
        id: "btnBusqueda",
        top: "5dp",
        left: "25%"
    });
    $.__views.detalleProveedor.add($.__views.btnBusqueda);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.lblTitulo.applyProperties($.createStyle(Alloy.FuenteTitulo()));
    $.lblNombre.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblEspecialidad.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblHorario.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblDireccion.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblCosto.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblTelefono.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblSucursal.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblTNombre.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblTEspecialidad.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblTHorario.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblTDireccion.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblTCosto.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblTTelefono.applyProperties($.createStyle(Alloy.Fuente()));
    $.lblTSucursal.applyProperties($.createStyle(Alloy.Fuente()));
    var args = arguments[0] || {};
    var id = args.id;
    var idTipoBusqueda = args.idTipoBusqueda;
    args.idAfiliacion;
    var latitud;
    var longitud;
    var hipervinculo;
    var img = "";
    var calidad = Alloy.Dimension() + ".png";
    switch (idTipoBusqueda) {
      case "1":
        img = "doc";
        $.lblTitulo.text = "Detalle Mèdico";
        $.addClass($.lblTitulo, "tituloRed", {
            color: "#DA0A0A"
        });
        break;

      case "2":
        img = "servicio";
        $.lblTitulo.text = "Detalle Servicio";
        $.addClass($.lblTitulo, "tituloRed", {
            color: "#DA0A0A"
        });
        break;

      case "3":
        img = "descuento";
        $.lblTitulo.text = "Detalle del Descuento";
        $.addClass($.lblTitulo, "tituloRed", {
            color: "#628f02"
        });
    }
    setTimeout(function() {
        bajarmedicoDetalles();
    }, 300);
    $.imgRuta.addEventListener("click", function() {
        Ti.App.fireEvent("creaRuta", {
            latitud: latitud,
            longitud: longitud
        });
    });
    $.btnBusqueda.addEventListener("click", function() {
        Ti.App.fireEvent("regresaBusqueda");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;