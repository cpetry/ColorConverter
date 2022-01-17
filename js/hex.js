class HEX {
    constructor() {
    }

    getHexElement(){
        return document.getElementById("inputHex");
    }

    getHexElementLinear(){
        return document.getElementById("inputHexLinear");
    }

    getRGBValue(hexString)
    {
        if (hexString === undefined){
            console.log("Error - hexToRgb with " + hexString);
            return null;
        }

        var rgb = this.hexToRgb(hexString);
        if (rgb == null)
        {
            console.log("Error - hexToRgb with " + hexString);
            return null;
        }
        return rgb;
    }

    getHexString(){
        var hexInput = this.getHexElement();
        var hexString = hexInput.value;
        return hexString;
    }

    getHexStringLinear(){
        var hexInput = this.getHexElementLinear();
        var hexString = hexInput.value;
        return hexString;
    }

    setRGBValue(rgb)
    {
        var hexString = this.RGBToHex(rgb);
        var hexInput = this.getHexElement();
        hexInput.value = hexString;
    }

    setRGBValueLinear(rgbLinear){
        var hexString = this.RGBToHex(rgbLinear);
        var hexInputLinear = this.getHexElementLinear();
        hexInputLinear.value = hexString;
    }

    hexToRgb(hexString)
    {
        // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hexString = hexString.toLowerCase().replace(shorthandRegex, function(m, r, g, b) {
          return r + r + g + g + b + b;
        });
      
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexString);
        return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        } : null;
    }

    RGBToHex(rgb) 
    {
        return "#" + ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1);
    }

    componentToHex(c) {
        var hex = parseInt(c).toString(16);
        return hex.length == 1 ? "0" + hex : hex;
      }
}