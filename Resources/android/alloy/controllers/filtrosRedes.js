function Controller() {
    function bajarEstadosMedicos() {
        var data = [];
        var url = Alloy.CFG.urlAPIMH + "GetEstados/1";
        var xhr = Titanium.Network.createHTTPClient({
            onload: function() {
                var obj = JSON.parse(this.responseText);
                for (var i = 0; obj.length > i; i++) {
                    var efr = obj[i];
                    data[i] = Titanium.UI.createPickerRow({
                        title: efr.nomEstado,
                        value: efr.idEstado
                    });
                }
                Util.AgregaSeleccionar($.pckEstado);
                $.pckEstado.add(data);
            },
            onerror: function() {},
            timeout: 1e4
        });
        xhr.open("GET", url);
        xhr.send();
    }
    function bajarMunicipiosMedicos() {
        data2 = [];
        dataEspe = new Array();
        var url2 = Alloy.CFG.urlAPIMH + "GetMunicipio";
        Ti.API.info(url2);
        Alloy.limpiaPicker($.pckMunicipio);
        var xhr = Titanium.Network.createHTTPClient({
            onload: function() {
                var obj2 = JSON.parse(this.responseText);
                Alloy.limpiaPicker($.pckMunicipio);
                for (var i = 0; obj2.mmunicipios.length > i; i++) {
                    var efr = obj2.mmunicipios[i];
                    data2[i] = Titanium.UI.createPickerRow({
                        title: efr.nomMunicipio,
                        value: efr.idMunicipio
                    });
                }
                Util.AgregaSeleccionar($.pckMunicipio);
                $.pckMunicipio.add(data2);
            },
            onerror: function(e) {
                alert(e);
            },
            timeout: 1e4
        });
        var params = {
            "Filtros[idTipoBusqueda]": idTipoBusqueda,
            "FiltroEstado[idAfiliacion]": idAfiliacion,
            "FiltroEstado[idEstado]": idEstado
        };
        Ti.API.info(JSON.stringify(params));
        xhr.open("POST", url2);
        xhr.send(params);
    }
    function bajarEspecialidadesMedicos() {
        dataEspe = new Array();
        Alloy.limpiaPicker($.pckEspecialidad);
        var url = Alloy.CFG.urlAPIMH + "busqueda";
        var xhr = Titanium.Network.createHTTPClient({
            onload: function() {
                obj = JSON.parse(this.responseText);
                for (var i = 0; obj.mespecialidades.length > i; i++) {
                    var efr = obj.mespecialidades[i];
                    dataEspe[i] = Titanium.UI.createPickerRow({
                        title: efr.nomEspecialidad,
                        value: efr.idEspecialidad
                    });
                }
                Util.AgregaSeleccionar($.pckEspecialidad);
                $.pckEspecialidad.add(dataEspe);
            },
            onerror: function() {},
            timeout: 1e4
        });
        var params = {
            "Filtros[idTipoBusqueda]": idTipoBusqueda,
            "FiltroEstado[idAfiliacion]": idAfiliacion,
            "FiltroEstado[idEstado]": idEstado,
            "FiltroEstado[idMunicipio]": idMunicipio,
            "FiltroEstado[idEspecialidad]": ""
        };
        if (0 != idMunicipio) {
            xhr.open("POST", url);
            xhr.send(params);
        }
    }
    function bajarDoctores() {
        Ti.App.fireEvent("muestraCargando");
        var url = Alloy.CFG.urlAPIMH + "busqueda";
        var xhr = Titanium.Network.createHTTPClient({
            onload: function() {
                obj = JSON.parse(this.responseText);
                Ti.App.fireEvent("resultadosRed", obj);
            },
            onerror: function() {},
            timeout: 1e4
        });
        var params = {
            "Filtros[idTipoBusqueda]": idTipoBusqueda,
            "FiltroEstado[idAfiliacion]": idAfiliacion,
            "FiltroEstado[idEstado]": idEstado,
            "FiltroEstado[idMunicipio]": idMunicipio,
            "FiltroEstado[idEspecialidad]": 0 == idEspecialidad ? "" : idEspecialidad
        };
        xhr.open("POST", url);
        xhr.send(params);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "filtrosRedes";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.filtrosRedes = Ti.UI.createView({
        layout: "horizontal",
        id: "filtrosRedes"
    });
    $.__views.filtrosRedes && $.addTopLevelView($.__views.filtrosRedes);
    $.__views.lblTitulo = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#FFFFFF",
        left: "10dp",
        text: "Red Medica",
        id: "lblTitulo"
    });
    $.__views.filtrosRedes.add($.__views.lblTitulo);
    $.__views.lblTEstado = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#FFFFFF",
        left: "10dp",
        text: "Estado:",
        id: "lblTEstado",
        top: "10"
    });
    $.__views.filtrosRedes.add($.__views.lblTEstado);
    $.__views.__alloyId48 = Ti.UI.createLabel({
        width: "80%",
        height: ".5dp",
        color: "#FFFFFF",
        left: "10dp",
        backgroundColor: "#FFFFFF",
        id: "__alloyId48"
    });
    $.__views.filtrosRedes.add($.__views.__alloyId48);
    $.__views.pckEstado = Ti.UI.createPicker({
        width: "100%",
        id: "pckEstado"
    });
    $.__views.filtrosRedes.add($.__views.pckEstado);
    $.__views.lblTMunicipio = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#FFFFFF",
        left: "10dp",
        text: "Municipio:",
        id: "lblTMunicipio"
    });
    $.__views.filtrosRedes.add($.__views.lblTMunicipio);
    $.__views.__alloyId49 = Ti.UI.createLabel({
        width: "80%",
        height: ".5dp",
        color: "#FFFFFF",
        left: "10dp",
        backgroundColor: "#FFFFFF",
        id: "__alloyId49"
    });
    $.__views.filtrosRedes.add($.__views.__alloyId49);
    $.__views.pckMunicipio = Ti.UI.createPicker({
        width: "100%",
        id: "pckMunicipio"
    });
    $.__views.filtrosRedes.add($.__views.pckMunicipio);
    $.__views.lblTEspecailidad = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#FFFFFF",
        left: "10dp",
        text: "Especialidad:",
        id: "lblTEspecailidad"
    });
    $.__views.filtrosRedes.add($.__views.lblTEspecailidad);
    $.__views.__alloyId50 = Ti.UI.createLabel({
        width: "80%",
        height: ".5dp",
        color: "#FFFFFF",
        left: "10dp",
        backgroundColor: "#FFFFFF",
        id: "__alloyId50"
    });
    $.__views.filtrosRedes.add($.__views.__alloyId50);
    $.__views.pckEspecialidad = Ti.UI.createPicker({
        width: "100%",
        id: "pckEspecialidad"
    });
    $.__views.filtrosRedes.add($.__views.pckEspecialidad);
    $.__views.btnBuscarMedico = Ti.UI.createButton({
        backgroundColor: "#21485D",
        color: "#666",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderWidth: "0.4dp",
        borderRadius: 5,
        top: "5dp",
        left: "35%",
        borderColor: "#dcdcdc",
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
        title: "Buscar",
        id: "btnBuscarMedico"
    });
    $.__views.filtrosRedes.add($.__views.btnBuscarMedico);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Util = require("utils");
    $.lblTitulo.applyProperties($.createStyle(Alloy.FuenteTitulo()));
    $.lblTEstado.applyProperties($.createStyle(Alloy.FuenteChica()));
    $.lblTMunicipio.applyProperties($.createStyle(Alloy.FuenteChica()));
    $.lblTEspecailidad.applyProperties($.createStyle(Alloy.FuenteChica()));
    var args = arguments[0] || {};
    var idEstado = 0;
    var idMunicipio = 0;
    var idEspecialidad = 0;
    var idAfiliacion = args.idAfiliacion;
    var idTipoBusqueda = args.idTipoBusqueda;
    switch (idTipoBusqueda) {
      case "1":
        $.lblTitulo.text = "Red Mèdica";
        $.addClass($.lblTitulo, "tituloRed", {
            color: "#DA0A0A"
        });
        break;

      case "2":
        $.lblTitulo.text = "Servicio";
        $.addClass($.lblTitulo, "tituloRed", {
            color: "#DA0A0A"
        });
        break;

      case "3":
        $.lblTitulo.text = "Descuentos TDC";
        $.addClass($.lblTitulo, "tituloRed", {
            color: "#628f02"
        });
    }
    $.pckEstado.addEventListener("change", function() {
        idEstado = $.pckEstado.getSelectedRow(0).value;
        idMunicipio = 0;
        bajarMunicipiosMedicos();
        Alloy.limpiaPicker($.pckEspecialidad);
    });
    $.pckMunicipio.addEventListener("change", function() {
        idEspecialidad = 0;
        if (null != $.pckMunicipio.getSelectedRow(0)) {
            idMunicipio = "" + $.pckMunicipio.getSelectedRow(0).value;
            bajarEspecialidadesMedicos();
        }
    });
    $.pckEspecialidad.addEventListener("change", function() {
        null != $.pckEspecialidad.getSelectedRow(0) && (idEspecialidad = $.pckEspecialidad.getSelectedRow(0).value);
    });
    $.btnBuscarMedico.addEventListener("click", function() {
        bajarDoctores();
    });
    bajarEstadosMedicos();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;