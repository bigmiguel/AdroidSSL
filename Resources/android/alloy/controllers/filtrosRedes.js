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
                Ti.API.info(this.responseText);
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
            "Filtros[idTipoBusqueda]": "1",
            "FiltroEstado[idAfiliacion]": idAfiliacion,
            "FiltroEstado[idEstado]": idEstado
        };
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
                Ti.API.info(this.responseText);
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
            "Filtros[idTipoBusqueda]": "1",
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
        color: "#DA0A0A",
        left: 0,
        backgroundColor: "#FFFFFF",
        textAlign: "center",
        shadowColor: "#000000",
        shadowOffset: {
            x: 0,
            y: 2
        },
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
    $.__views.__alloyId40 = Ti.UI.createLabel({
        width: "80%",
        height: ".5dp",
        color: "#FFFFFF",
        left: "10dp",
        backgroundColor: "#FFFFFF",
        id: "__alloyId40"
    });
    $.__views.filtrosRedes.add($.__views.__alloyId40);
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
    $.__views.__alloyId41 = Ti.UI.createLabel({
        width: "80%",
        height: ".5dp",
        color: "#FFFFFF",
        left: "10dp",
        backgroundColor: "#FFFFFF",
        id: "__alloyId41"
    });
    $.__views.filtrosRedes.add($.__views.__alloyId41);
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
    $.__views.__alloyId42 = Ti.UI.createLabel({
        width: "80%",
        height: ".5dp",
        color: "#FFFFFF",
        left: "10dp",
        backgroundColor: "#FFFFFF",
        id: "__alloyId42"
    });
    $.__views.filtrosRedes.add($.__views.__alloyId42);
    $.__views.pckEspecialidad = Ti.UI.createPicker({
        width: "100%",
        id: "pckEspecialidad"
    });
    $.__views.filtrosRedes.add($.__views.pckEspecialidad);
    $.__views.btnBuscarMedico = Ti.UI.createButton({
        backgroundGradient: {
            type: "linear",
            colors: [ {
                color: "#7E9CD6",
                position: 0
            }, {
                color: "#4E6EAD",
                position: 1
            } ],
            backFillStart: true
        },
        color: "#000",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderWidth: "1dp",
        borderRadius: 5,
        top: "5dp",
        left: "30%",
        borderColor: "#4C5E82",
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
    switch (args.tipoRed) {
      case 2:
        $.lblTitulo.text = "Red Mèdica";
    }
    $.pckEstado.addEventListener("change", function() {
        Ti.API.info("______________________________Change");
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
    bajarEstadosMedicos();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;