var hex = new HEX();
var rgb = new RGB();
var lab = new LAB();
var ral = new RAL();

var ignoreRALUpdate = false;

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

function UpdateRAL(element){
    console.log("New RAL:" + element.value)
    var isValid = element.reportValidity();
    if (!isValid || ignoreRALUpdate)
        return;
    var hexString = ral.getHexString(element.value);
    if (hexString == null)
        return;
    var rgbValue = hex.getRGBValue(hexString);
    UpdateAllsRGB(rgbValue, true);
}

function UpdateRALLinear(element){
    var isValid = element.reportValidity();
    if (!isValid || ignoreRALUpdate)
        return;
    var hexString = ral.getHexString(element.value);
    if (hexString == null)
        return;
    var rgbValue = hex.getRGBValue(hexString);
    UpdateAllLinear(rgbValue, true);
}

function UpdateRGB(){
    var rgbValue = rgb.getRGBValue();
    UpdateAllsRGB(rgbValue);
}
function UpdateRGBLinear(){
    var rgbLinear = rgb.getRGBValueLinear();
    UpdateAllLinear(rgbLinear);
}
function UpdateAllsRGB(rgbValue, ignoreRAL = false){
    if (rgbValue != null){
        rgb.setRGBValue(rgbValue);
        hex.setRGBValue(rgbValue);
        lab.setRGBValue(rgbValue);
        if (!ignoreRAL){
            var hexString = hex.getHexString();
            var bestHex = ral.getBestHexFitForRAL(hexString, hex);
            ral.setHexString(bestHex);
        }
        UpdateCanvas();

        var rgbValueLinear = rgb.tosRGB(rgbValue);
        rgb.setRGBValueLinear(rgbValueLinear);
        hex.setRGBValueLinear(rgbValueLinear);
        lab.setRGBValueLinear(rgbValueLinear);
        if (!ignoreRAL){
            var hexString = hex.getHexStringLinear();
            var bestHex = ral.getBestHexFitForRAL(hexString, hex);
            ral.setHexStringLinear(bestHex);
        }
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