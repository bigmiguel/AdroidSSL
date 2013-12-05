function Controller() {
    function txtFocus() {
        "20%" == $.vwLogin.top && $.vwLogin.animate({
            top: "26px",
            duration: 2e3
        });
    }
    function txtBlur() {
        "26px" == $.vwLogin.top && $.vwLogin.animate({
            top: "20%",
            duration: 2e3
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        orientationModes: "[Titanium.UI.PORTRAIT]",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#FFF",
        textAlign: "center",
        font: {
            fontSize: "35%",
            fontWeight: "bold",
            font: "PT Sans"
        },
        backgroundGradient: {
            type: "linear",
            colors: [ "#001f5b", "#4E6EAD" ]
        },
        zIndex: 0,
        text: "Salud Laboral",
        id: "label"
    });
    $.__views.index.add($.__views.label);
    $.__views.vwLogin = Ti.UI.createView({
        id: "vwLogin",
        top: "20%",
        layout: "vertical"
    });
    $.__views.index.add($.__views.vwLogin);
    $.__views.__alloyId52 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#001f5b",
        text: "Numero de Empleado:",
        font: "35%",
        id: "__alloyId52"
    });
    $.__views.vwLogin.add($.__views.__alloyId52);
    $.__views.txtNEmpleado = Ti.UI.createTextField({
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderWidth: "1dp",
        borderRadius: 5,
        borderColor: "#999",
        color: "#001f5b",
        font: {
            fontSize: "20%",
            fontWeight: "bold",
            font: "PT Sans"
        },
        top: "5px",
        width: "80%",
        id: "txtNEmpleado"
    });
    $.__views.vwLogin.add($.__views.txtNEmpleado);
    $.__views.__alloyId53 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#001f5b",
        text: "Empresa:",
        id: "__alloyId53"
    });
    $.__views.vwLogin.add($.__views.__alloyId53);
    $.__views.pckEmpresas = Ti.UI.createPicker({
        id: "pckEmpresas"
    });
    $.__views.vwLogin.add($.__views.pckEmpresas);
    $.__views.btnLogin = Ti.UI.createButton({
        backgroundGradient: {
            type: "linear",
            colors: [ "#001f5b", "#4E6EAD" ]
        },
        color: "#FFF",
        font: {
            fontSize: "20%",
            fontWeight: "bold",
            font: "PT Sans"
        },
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderWidth: "1dp",
        borderRadius: 5,
        top: "5px",
        title: "Login",
        id: "btnLogin"
    });
    $.__views.vwLogin.add($.__views.btnLogin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.Android.currentActivity.setRequestedOrientation(Ti.Android.SCREEN_ORIENTATION_PORTRAIT);
    $.btnLogin.addEventListener("click", function() {
        if ("" == $.txtNEmpleado.value) {
            alert("El numero de empledo no puede estar vacio.");
            return;
        }
        var api = Alloy.CFG.urlAPI + "login";
        var cliSSL = Ti.Network.createHTTPClient({
            onload: function() {
                Ti.API.info("Received text: " + this.responseText);
                Ti.App.Properties.setString("Empleado", this.responseText);
                var _principal = Alloy.createController("slideMenu");
                $.index.close();
                _principal.getView().open();
                $.index = null;
            },
            onerror: function() {
                Ti.API.info("Received text: " + this.responseText);
                var error = JSON.parse(this.responseText);
                alert(error.Message);
            }
        });
        var user = {
            numEmpleado: $.txtNEmpleado.value,
            idEmpresa: $.pckEmpresas.getSelectedRow(0).value,
            movilID: Ti.Platform.getId(),
            modelo: Ti.Platform.model
        };
        cliSSL.open("POST", api, true);
        cliSSL.setRequestHeader("Accept", "application/json");
        cliSSL.setRequestHeader("Content-Type", "application/json");
        cliSSL.send(JSON.stringify(user));
    });
    $.txtNEmpleado.addEventListener("focus", txtFocus);
    $.txtNEmpleado.addEventListener("blur", txtBlur);
    $.index.addEventListener("open", function() {
        var api = Alloy.CFG.urlAPI + "/Empresa";
        var cliSSL = Ti.Network.createHTTPClient({
            onload: function() {
                Ti.API.info("Received text: " + this.responseText);
                var Empresas = JSON.parse(this.responseText);
                for (var i = 0; Empresas.length > i; i++) {
                    Empresa = Empresas[i];
                    var pckRow = Ti.UI.createPickerRow({
                        title: Empresa.nomNombre,
                        value: Empresa.idEmpresa
                    });
                    $.pckEmpresas.add(pckRow);
                }
            },
            onerror: function() {
                var error = JSON.parse(this.responseText);
                alert(error.Message);
            }
        });
        cliSSL.open("GET", api, true);
        cliSSL.setRequestHeader("Accept", "application/json");
        cliSSL.send();
    });
    var emp = JSON.parse(Ti.App.Properties.getString("Empleado"));
    if (null != emp) {
        var _principal = Alloy.createController("slideMenu");
        $.index.close();
        _principal.getView().open();
        $.index = null;
    } else $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;