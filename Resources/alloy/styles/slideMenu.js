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
    priority: 10000.0044,
    key: "lblHeaderMenu",
    style: {
        color: "#FFF",
        left: "5%"
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
}, {
    isId: true,
    priority: 100000.0037,
    key: "leftMenu",
    style: {
        top: "0dp",
        left: "0dp",
        width: "60%",
        zIndex: "0",
        backgroundColor: "#303030",
        layout: "vertical"
    }
}, {
    isId: true,
    priority: 100000.0038,
    key: "rightMenu",
    style: {
        top: "0dp",
        right: "0dp",
        width: "80%",
        zIndex: "0",
        backgroundColor: "#303030",
        layout: "vertical"
    }
}, {
    isId: true,
    priority: 100000.0039,
    key: "contentview",
    style: {
        left: "0dp",
        width: Ti.Platform.displayCaps.platformWidth,
        height: Ti.UI.Fill,
        top: "10%",
        backgroundColor: "white",
        zindex: 2
    }
}, {
    isId: true,
    priority: 100000.004,
    key: "shadowview",
    style: {
        shadowColor: "black",
        shadowOffset: {
            x: "0",
            y: "0"
        },
        shadowRadius: "2.5"
    }
}, {
    isId: true,
    priority: 100000.0041,
    key: "btnMenu",
    style: {
        backgroundImage: "/images/ButtonMenu.png",
        backgroundColor: "none",
        left: "2%",
        top: "13%",
        width: "10%",
        height: "75%",
        style: "none",
        zIndex: 2
    }
}, {
    isId: true,
    priority: 100000.0042,
    key: "btnMenuDer",
    style: {
        backgroundImage: "/images/ButtonMenu.png",
        backgroundColor: "none",
        right: "2%",
        top: "13%",
        width: "10%",
        height: "75%",
        style: "none",
        zIndex: 2
    }
}, {
    isId: true,
    priority: 100000.0043,
    key: "lblNombre",
    style: {
        color: "#FFF",
        left: "5%"
    }
} ];