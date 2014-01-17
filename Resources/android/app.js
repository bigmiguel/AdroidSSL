var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.limpiaPicker = function(picker) {
    try {
        if (picker.columns[0]) {
            var _col = picker.columns[0];
            var len = _col.rowCount;
            for (var x = len - 1; x >= 0; x--) {
                var _row = _col.rows[x];
                _col.removeRow(_row);
            }
        }
    } catch (ex) {
        Ti.API.info(ex);
    }
};

try {
    Alloy.Globals.Map = require("ti.map");
} catch (ex) {
    alert(ex);
}

Alloy.FuenteTitulo = function() {
    if ("baja" == Alloy.Dimension()) return {
        font: {
            fontSize: "18%",
            fontWeight: "bold",
            font: "Segoe UI"
        }
    };
    if ("media" == Alloy.Dimension()) return {
        font: {
            fontSize: "36%",
            fontWeight: "bold",
            font: "Segoe UI"
        }
    };
    if ("alta" == Alloy.Dimension()) return {
        font: {
            fontSize: "72%",
            fontWeight: "bold",
            font: "Segoe UI"
        }
    };
};

Alloy.Fuente = function() {
    if ("baja" == Alloy.Dimension()) return {
        font: {
            fontSize: "12%",
            font: "Segoe UI"
        }
    };
    if ("media" == Alloy.Dimension()) return {
        font: {
            fontSize: "22%",
            font: "Segoe UI"
        }
    };
    if ("alta" == Alloy.Dimension()) return {
        font: {
            fontSize: "40%",
            font: "Segoe UI"
        }
    };
};

Alloy.FuenteMedia = function() {
    if ("baja" == Alloy.Dimension()) return {
        font: {
            fontSize: "13%",
            font: "Segoe UI"
        }
    };
    if ("media" == Alloy.Dimension()) return {
        font: {
            fontSize: "25%",
            font: "Segoe UI"
        }
    };
    if ("alta" == Alloy.Dimension()) return {
        font: {
            fontSize: "50%",
            font: "Segoe UI"
        }
    };
};

Alloy.FuenteChica = function() {
    if ("baja" == Alloy.Dimension()) return {
        font: {
            fontSize: "10%",
            font: "Segoe UI"
        }
    };
    if ("media" == Alloy.Dimension()) return {
        font: {
            fontSize: "16%",
            font: "Segoe UI"
        }
    };
    if ("alta" == Alloy.Dimension()) return {
        font: {
            fontSize: "32%",
            font: "Segoe UI"
        }
    };
};

Alloy.espacioMenu = function() {
    if ("baja" == Alloy.Dimension()) return 12;
    if ("media" == Alloy.Dimension()) return 30;
    if ("alta" == Alloy.Dimension()) return 45;
};

Alloy.espacioTarjeta = function() {
    if ("baja" == Alloy.Dimension()) return "50dp";
    if ("media" == Alloy.Dimension()) return "80dp";
    if ("alta" == Alloy.Dimension()) return "100dp";
};

Alloy.Dimension = function() {
    var ancho = Ti.Platform.displayCaps.platformWidth;
    if (480 > ancho) return "baja";
    if (ancho >= 480 && 600 > ancho) return "media";
    if (ancho >= 600) return "alta";
};

Alloy.LoginWeb = function() {
    var url = Alloy.CFG.urlAPIMH + "LoginU";
    var emp = JSON.parse(Ti.App.Properties.getString("Empleado"));
    if ("" == emp.membresia) {
        Ti.UI.createAlertDialog({
            message: "No hay una membresia ligada a este empleado.",
            ok: "Aceptar",
            title: "Falta Membresìa"
        }).show();
        return false;
    }
    var cliMH = Ti.Network.createHTTPClient({
        onload: function() {
            var res = JSON.parse(this.responseText);
            var val = "ok" == res.response ? true : false;
            Ti.App.fireEvent("usrLogin", {
                valido: val
            });
        },
        onerror: function(e) {
            Ti.UI.createAlertDialog({
                message: "Error: " + e,
                ok: "Aceptar",
                title: "Error Login"
            }).show();
            return false;
        }
    });
    var params = {
        "LoginU[idMembresia]": emp.membresia,
        "LoginU[rfc]": emp.rfc.toUpperCase()
    };
    cliMH.open("POST", url);
    cliMH.send(params);
};

Alloy.createController("index");