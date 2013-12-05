module.exports = [ {
    isApi: true,
    priority: 1000.0002,
    key: "Label",
    style: {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#001f5b"
    }
}, {
    isApi: true,
    priority: 1000.0004,
    key: "TextField",
    style: {
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderWidth: "1dp",
        borderRadius: 5,
        borderColor: "#999",
        color: "#001f5b",
        font: {
            fontSize: "15%"
        }
    }
}, {
    isApi: true,
    priority: 1000.0005,
    key: "Button",
    style: {
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
        borderRadius: 5
    }
}, {
    isClass: true,
    priority: 10000.0001,
    key: "container",
    style: {
        backgroundColor: "white",
        layout: "vertical"
    }
}, {
    isClass: true,
    priority: 10000.0003,
    key: "Titulo",
    style: {
        width: Ti.UI.FILL,
        textAlign: "center",
        font: {
            fontSize: "35%",
            fontWeight: "bold",
            font: "PT Sans"
        },
        color: "#FFF",
        backgroundGradient: {
            type: "linear",
            colors: [ "#001f5b", "#4E6EAD" ]
        },
        zIndex: 0
    }
}, {
    isClass: true,
    priority: 10000.0006,
    key: "tabMenu",
    style: {
        height: "20px"
    }
}, {
    isClass: true,
    priority: 10000.0007,
    key: "dato",
    style: {
        color: "#666",
        font: {
            fontSize: "25%",
            fontWeight: "bold",
            font: "PT Sans"
        }
    }
}, {
    isClass: true,
    priority: 10000.0008,
    key: "lbl",
    style: {
        width: "40%",
        font: {
            fontSize: "20%",
            fontWeight: "bold",
            font: "PT Sans"
        }
    }
}, {
    isClass: true,
    priority: 10000.0009,
    key: "rowDatos",
    style: {
        touchEnabled: false
    }
}, {
    isClass: true,
    priority: 10000.001,
    key: "vwDatos",
    style: {
        font: {
            fontSize: "20%"
        },
        layout: "horizontal"
    }
}, {
    isClass: true,
    priority: 10000.0011,
    key: "cargando",
    style: {
        width: Ti.UI.FILL,
        height: 60,
        message: "Cargando...",
        font: {
            fontSize: "16px"
        },
        color: "001f5b",
        left: "50%",
        top: "50%",
        style: Ti.UI.ActivityIndicatorStyle.BIG
    }
}, {
    isClass: true,
    priority: 10000.0012,
    key: "cabezera",
    style: {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: "25%",
            fontWeight: "bold",
            font: "PT Sans"
        },
        color: "#001f5b"
    }
}, {
    isClass: true,
    priority: 10000.0015,
    key: "cargando",
    style: {
        color: "#FFF",
        style: Titanium.UI.ActivityIndicatorStyle.DARK,
        height: "100px",
        width: "200px",
        top: "50%"
    }
} ];