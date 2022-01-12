class HEX {
    constructor() {
    }

    getHexElement(){
        return document.getElementById("hex");
    }

    getRGBValue()
    {
        var hexInput = this.getHexElement();
        var rgb = this.hexToRgb(hexInput.value);
        if (rgb == null)
            console.log("Error - hexToRgb");
        return rgb;
    }

    setRGBValue(rgb)
    {
        var hexInput = this.getHexElement();
        var hexString = this.RGBToHex(rgb);
        hexInput.value = hexString;
    }

    hexToRgb(hexString)
    {
        // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hexString = hexString.replace(shorthandRegex, function(m, r, g, b) {
          return r + r + g + g + b + b;
        });
      
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
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