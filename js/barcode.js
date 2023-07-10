function genBarcode(id, school_id) {
    JsBarcode("#" + id, school_id, {
        format: "CODE128",
        height: 47,
        width: 5,
        displayValue: false,
        lineColor: "#000000",
        margin: 0,
        padding: 0
    })
}