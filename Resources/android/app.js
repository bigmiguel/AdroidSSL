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
            font: "PT Sans"
        }
    };
    if ("media" == Alloy.Dimension()) return {
        font: {
            fontSize: "36%",
            fontWeight: "bold",
            font: "PT Sans"
        }
    };
    if ("alta" == Alloy.Dimension()) return {
        font: {
            fontSize: "72%",
            fontWeight: "bold",
            font: "PT Sans"
        }
    };
};

Alloy.Fuente = function() {
    if ("baja" == Alloy.Dimension()) return {
        font: {
            fontSize: "13%",
            font: "PT Sans"
        }
    };
    if ("media" == Alloy.Dimension()) return {
        font: {
            fontSize: "26%",
            font: "PT Sans"
        }
    };
    if ("alta" == Alloy.Dimension()) return {
        font: {
            fontSize: "50%",
            font: "PT Sans"
        }
    };
};

Alloy.FuenteMedia = function() {
    if ("baja" == Alloy.Dimension()) return {
        font: {
            fontSize: "13%",
            font: "PT Sans"
        }
    };
    if ("media" == Alloy.Dimension()) return {
        font: {
            fontSize: "25%",
            font: "PT Sans"
        }
    };
    if ("alta" == Alloy.Dimension()) return {
        font: {
            fontSize: "50%",
            font: "PT Sans"
        }
    };
};

Alloy.FuenteChica = function() {
    if ("baja" == Alloy.Dimension()) return {
        font: {
            fontSize: "10%",
            font: "PT Sans"
        }
    };
    if ("media" == Alloy.Dimension()) return {
        font: {
            fontSize: "16%",
            font: "PT Sans"
        }
    };
    if ("alta" == Alloy.Dimension()) return {
        font: {
            fontSize: "32%",
            font: "PT Sans"
        }
    };
};

Alloy.espacioMenu = function() {
    if ("baja" == Alloy.Dimension()) return 6;
    if ("media" == Alloy.Dimension()) return 15;
    if ("alta" == Alloy.Dimension()) return 30;
};

Alloy.Dimension = function() {
    var ancho = Titanium.Platform.displayCaps.platformWidth;
    Ti.API.info("------------------Ancho: " + ancho);
    if (480 > ancho) return "baja";
    if (ancho >= 480 && 600 > ancho) return "media";
    if (ancho >= 600) return "alta";
};

Alloy.createController("index");