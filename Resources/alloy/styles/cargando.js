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
        color: "#001f5b"
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
        color: "#FFF",
        shadowColor: "#000000",
        shadowOffset: {
            x: 0,
            y: -3
        },
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
        color: "#666"
    }
}, {
    isClass: true,
    priority: 10000.0008,
    key: "lbl",
    style: {
        width: "40%"
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
        color: "#001f5b",
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
        color: "#001f5b"
    }
}, {
    isClass: true,
    priority: 10000.0016,
    key: "cargando",
    style: {
        color: "#FFF",
        style: Titanium.UI.ActivityIndicatorStyle.DARK,
        height: "100px",
        width: "200px",
        top: "50%"
    }
}, {
    isId: true,
    priority: 100000.0013,
    key: "navview",
    style: {
        top: "0dp",
        left: "0dp",
        width: Ti.Platform.displayCaps.platformWidth,
        height: "10%",
        backgroundColor: "#001f5b",
        color: "#FFF",
        backgroundGradient: {
            type: "linear",
            colors: [ "#001f5b", "#4E6EAD" ]
        }
    }
} ];