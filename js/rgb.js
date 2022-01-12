class RGB {
    constructor() 
    {
    }

    getRelement(){
        return document.getElementById("red");
    }

    getGelement(){
        return document.getElementById("green");
    }

    getBelement(){
        return document.getElementById("blue");
    }

    getRlinearElement(){
        return document.getElementById("redLinear");
    }

    getGlinearElement(){
        return document.getElementById("greenLinear");
    }

    getBlinearElement(){
        return document.getElementById("blueLinear");
    }

    getRGBValue()
    {
        var rInput = this.getRelement();
        var gInput = this.getGelement();
        var bInput = this.getBelement();
        return {
            r: parseInt(rInput.value),
            g: parseInt(gInput.value),
            b: parseInt(bInput.value)
        }
    }

    getRGBLinearValue()
    {
        var rInput = this.getRlinearElement();
        var gInput = this.getGlinearElement();
        var bInput = this.getBlinearElement();
        var rLinear = parseInt(rInput.value);
        var gLinear = parseInt(gInput.value);
        var bLinear = parseInt(bInput.value);
        return {
            r: rLinear,
            g: gLinear,
            b: bLinear
        }
    }

    setRGBValue(rgb)
    {
        var rInput = this.getRelement();
        var gInput = this.getGelement();
        var bInput = this.getBelement();

        if (rgb.r != rInput.value)
            rInput.value = rgb.r;
        if (rgb.g != gInput.value)
            gInput.value = rgb.g;
        if (rgb.b != bInput.value)
            bInput.value = rgb.b;
    }

    setRGBLinearValue(rgbLinear)
    {
        var rLinearInput = this.getRlinearElement();
        var gLinearInput = this.getGlinearElement();
        var bLinearInput = this.getBlinearElement();
        
        if (rgbLinear.r != rLinearInput.value)
            rLinearInput.value = rgbLinear.r;
        if (rgbLinear.g != gLinearInput.value)
            gLinearInput.value = rgbLinear.g;
        if (rgbLinear.b != bLinearInput.value)
            bLinearInput.value = rgbLinear.b;
    }

    /**
     * Undoes gamma-correction from an RGB-encoded color.
     * https://en.wikipedia.org/wiki/SRGB#Specification_of_the_transformation
     * https://stackoverflow.com/questions/596216/formula-to-determine-brightness-of-rgb-color
     * @param  {number}
     * @return {number}
     */
    sRGBtoLinearRGB(color) {
        // Send this function a decimal sRGB gamma encoded color value
        // between 0.0 and 1.0, and it returns a linearized value.
        if (color <= 0.04045) {
            return color / 12.92
        } else {
            return Math.pow((color + 0.055) / 1.055, 2.4)
        }
    }

    toLinear(rgb){
        return {
            r: Math.round(this.toLinearChannel(rgb.r)),
            g: Math.round(this.toLinearChannel(rgb.g)),
            b: Math.round(this.toLinearChannel(rgb.b))
        }
    }

    tosRGB(rgbLinear){
        return {
            r: Math.round(this.tosRGBChannel(rgbLinear.r)),
            g: Math.round(this.tosRGBChannel(rgbLinear.g)),
            b: Math.round(this.tosRGBChannel(rgbLinear.b))
        }
    }

    toLinearChannel(v){
        v = v / 255;
        var linear;
        if (v <= 0.04045) 
            linear = v / 12.92;
        else 
            linear = Math.pow((v + 0.055) / 1.055, 2.4);
        return linear * 255;
    }

    tosRGBChannel(v){
        v = v / 255;
        var s;
        if (v <= 0.0031308) s = v * 12.92;
        else s = 1.055 * Math.pow(v, 1.0/2.4) - 0.055;
        return s * 255;
    }
  }