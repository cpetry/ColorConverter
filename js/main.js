var hex = new HEX();
var rgb = new RGB();
var lab = new LAB();

function UpdateHex(element){
    var isValid = element.reportValidity();
    if (!isValid)
        return;
    var rgbValue = hex.getRGBValue(element.value);
    UpdateAllsRGB(rgbValue);
}

function UpdateHexLinear(element){
    var isValid = element.reportValidity();
    if (!isValid)
        return;
    var rgbLinearValue = hex.getRGBValue(element.value);
    UpdateAllLinear(rgbLinearValue);
}

function UpdateRGB(){
    var rgbValue = rgb.getRGBValue();
    UpdateAllsRGB(rgbValue);
}
function UpdateRGBLinear(){
    var rgbLinear = rgb.getRGBValueLinear();
    UpdateAllLinear(rgbLinear);
}
function UpdateAllsRGB(rgbValue){
    if (rgbValue != null){
        rgb.setRGBValue(rgbValue);
        hex.setRGBValue(rgbValue);
        lab.setRGBValue(rgbValue);
        UpdateCanvas();

        var rgbValueLinear = rgb.tosRGB(rgbValue);
        rgb.setRGBValueLinear(rgbValueLinear);
        hex.setRGBValueLinear(rgbValueLinear);
        lab.setRGBValueLinear(rgbValueLinear);
        UpdateCanvasLinear();
    }
}
function UpdateAllLinear(rgbValueLinear){
    if (rgbValueLinear != null){
        rgb.setRGBValueLinear(rgbValueLinear);
        hex.setRGBValueLinear(rgbValueLinear);
        lab.setRGBValueLinear(rgbValueLinear);
        UpdateCanvasLinear();

        var rgbValue = rgb.toLinear(rgbValueLinear);
        rgb.setRGBValue(rgbValue);
        hex.setRGBValue(rgbValue);
        lab.setRGBValue(rgbValue);
        UpdateCanvas();
    }
}
function UpdateCanvas(){
    var c = document.getElementById("colorCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = hex.getHexString();
    ctx.fillRect(0, 0, 200, 100);
}
function UpdateCanvasLinear(){
    var c = document.getElementById("colorCanvasLinear");
    var ctx = c.getContext("2d");
    ctx.fillStyle = hex.getHexStringLinear();
    ctx.fillRect(0, 0, 200, 100);
}

// default value
UpdateHex(document.getElementById("inputHex"));