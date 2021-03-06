var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

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
            fontSize: "10%",
            fontWeight: "bold",
            font: "PT Sans"
        }
    };
    if ("media" == Alloy.Dimension()) return {
        font: {
            fontSize: "20%",
            fontWeight: "bold",
            font: "PT Sans"
        }
    };
    if ("alta" == Alloy.Dimension()) return {
        font: {
            fontSize: "40%",
            fontWeight: "bold",
            font: "PT Sans"
        }
    };
};

Alloy.FuenteMedia = function() {
    if ("baja" == Alloy.Dimension()) return {
        font: {
            fontSize: "15%",
            fontWeight: "bold",
            font: "PT Sans"
        }
    };
    if ("media" == Alloy.Dimension()) return {
        font: {
            fontSize: "25%",
            fontWeight: "bold",
            font: "PT Sans"
        }
    };
    if ("alta" == Alloy.Dimension()) return {
        font: {
            fontSize: "50%",
            fontWeight: "bold",
            font: "PT Sans"
        }
    };
};

Alloy.FuenteChica = function() {
    if ("baja" == Alloy.Dimension()) return {
        font: {
            fontSize: "8%",
            fontWeight: "bold",
            font: "PT Sans"
        }
    };
    if ("media" == Alloy.Dimension()) return {
        font: {
            fontSize: "16%",
            fontWeight: "bold",
            font: "PT Sans"
        }
    };
    if ("alta" == Alloy.Dimension()) return {
        font: {
            fontSize: "32%",
            fontWeight: "bold",
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
    if (480 > ancho) return "baja";
    if (ancho >= 480 && 600 > ancho) return "media";
    if (ancho >= 600) return "alta";
};

Alloy.createController("index");