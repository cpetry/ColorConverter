// the following functions are based off of the pseudocode
// found on www.easyrgb.com

class LAB 
{
    constructor() 
    {
    }
    

    getLelement(){
        return document.getElementById("L");
    }

    getAelement(){
        return document.getElementById("a");
    }

    getBelement(){
        return document.getElementById("b");
    }

    getLabValue()
    {
        var LInput = this.getLelement();
        var aInput = this.getAelement();
        var bInput = this.getBelement();
        return {
            L: parseInt(LInput.value, 16),
            a: parseInt(aInput.value, 16),
            b: parseInt(bInput.value, 16)
        }
    }

    getRGBValue(){
        var labDict = this.getLabValue();
        var labArray = [labDict.L, labDict.a, labDict.b];
        var rgbArray = this.lab2rgb(labArray);
        return {
            L: parseInt(rgbArray[0], 16),
            a: parseInt(rgbArray[1], 16),
            b: parseInt(rgbArray[2], 16)
        }
    }

    setRGBValue(rgb){
        var rgbArray = [rgb.r, rgb.g, rgb.b];
        var labArray = this.rgb2lab(rgbArray);
        
        var LInput = this.getLelement();
        var aInput = this.getAelement();
        var bInput = this.getBelement();

        LInput.value = parseFloat(labArray[0]).toFixed(2);
        aInput.value = parseFloat(labArray[1]).toFixed(2);
        bInput.value = parseFloat(labArray[2]).toFixed(2);
    }

    lab2rgb(lab)
    {
        var y = (lab[0] + 16) / 116,
            x = lab[1] / 500 + y,
            z = y - lab[2] / 200,
            r, g, b;

        x = 0.95047 * ((x * x * x > 0.008856) ? x * x * x : (x - 16/116) / 7.787);
        y = 1.00000 * ((y * y * y > 0.008856) ? y * y * y : (y - 16/116) / 7.787);
        z = 1.08883 * ((z * z * z > 0.008856) ? z * z * z : (z - 16/116) / 7.787);

        r = x *  3.2406 + y * -1.5372 + z * -0.4986;
        g = x * -0.9689 + y *  1.8758 + z *  0.0415;
        b = x *  0.0557 + y * -0.2040 + z *  1.0570;

        r = (r > 0.0031308) ? (1.055 * Math.pow(r, 1/2.4) - 0.055) : 12.92 * r;
        g = (g > 0.0031308) ? (1.055 * Math.pow(g, 1/2.4) - 0.055) : 12.92 * g;
        b = (b > 0.0031308) ? (1.055 * Math.pow(b, 1/2.4) - 0.055) : 12.92 * b;

        return [Math.max(0, Math.min(1, r)) * 255, 
                Math.max(0, Math.min(1, g)) * 255, 
                Math.max(0, Math.min(1, b)) * 255]
    }
  
  
    rgb2lab(rgb)
    {
        var r = rgb[0] / 255,
            g = rgb[1] / 255,
            b = rgb[2] / 255,
            x, y, z;
    
        r = (r > 0.04045) ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
        g = (g > 0.04045) ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
        b = (b > 0.04045) ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
    
        x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
        y = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 1.00000;
        z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;
    
        x = (x > 0.008856) ? Math.pow(x, 1/3) : (7.787 * x) + 16/116;
        y = (y > 0.008856) ? Math.pow(y, 1/3) : (7.787 * y) + 16/116;
        z = (z > 0.008856) ? Math.pow(z, 1/3) : (7.787 * z) + 16/116;
    
        return [(116 * y) - 16, 500 * (x - y), 200 * (y - z)]
    }
}