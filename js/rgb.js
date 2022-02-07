class RGB {
    constructor() 
    {
    }

    getRelement(){
        return document.getElementById("inputRed");
    }

    getGelement(){
        return document.getElementById("inputGreen");
    }

    getBelement(){
        return document.getElementById("inputBlue");
    }

    getRFloatelement(){
        return document.getElementById("inputRedfloat");
    }

    getGFloatelement(){
        return document.getElementById("inputGreenfloat");
    }

    getBFloatelement(){
        return document.getElementById("inputBluefloat");
    }

    getRlinearElement(){
        return document.getElementById("inputRedLinear");
    }

    getGlinearElement(){
        return document.getElementById("inputGreenLinear");
    }

    getBlinearElement(){
        return document.getElementById("inputBlueLinear");
    }

    getRlinearFloatElement(){
        return document.getElementById("inputRedLinearfloat");
    }

    getGlinearFloatElement(){
        return document.getElementById("inputGreenLinearfloat");
    }

    getBlinearFloatElement(){
        return document.getElementById("inputBlueLinearfloat");
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

    getRGBFloatValue()
    {
        var rInput = this.getRFloatelement();
        var gInput = this.getGFloatelement();
        var bInput = this.getBFloatelement();
        return {
            r: parseFloat(rInput.value),
            g: parseFloat(gInput.value),
            b: parseFloat(bInput.value)
        }
    }

    getRGBValueLinear()
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

    getRGBFloatValueLinear()
    {
        var rInput = this.getRlinearFloatElement();
        var gInput = this.getGlinearFloatElement();
        var bInput = this.getBlinearFloatElement();
        var rLinear = parseFloat(rInput.value);
        var gLinear = parseFloat(gInput.value);
        var bLinear = parseFloat(bInput.value);
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

    setRGBFloatValue(rgb)
    {
        var rInput = this.getRFloatelement();
        var gInput = this.getGFloatelement();
        var bInput = this.getBFloatelement();

        if (rgb.r != rInput.value)
            rInput.value = rgb.r;
        if (rgb.g != gInput.value)
            gInput.value = rgb.g;
        if (rgb.b != bInput.value)
            bInput.value = rgb.b;
    }

    setRGBValueLinear(rgbLinear)
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

    setRGBFloatValueLinear(rgbLinear)
    {
        var rLinearInput = this.getRlinearFloatElement();
        var gLinearInput = this.getGlinearFloatElement();
        var bLinearInput = this.getBlinearFloatElement();
        
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
            r: this.toLinearChannel(rgb.r),
            g: this.toLinearChannel(rgb.g),
            b: this.toLinearChannel(rgb.b)
        }
    }

    tosRGB(rgbLinear){
        return {
            r: this.tosRGBChannel(rgbLinear.r),
            g: this.tosRGBChannel(rgbLinear.g),
            b: this.tosRGBChannel(rgbLinear.b)
        }
    }

    toLinearChannel(v){
        v = v / 255;
        var linear;
        if (v <= 0.04045) 
            linear = v / 12.92;
        else 
            linear = Math.pow((v + 0.055) / 1.055, 2.4);
        return Math.ceil(linear * 255);
    }

    tosRGBChannel(v){
        v = this.byteToFloat(v);
        var s;
        if (v <= 0.0031308) s = v * 12.92;
        else s = 1.055 * Math.pow(v, 1.0/2.4) - 0.055;
        return this.floatToByte(s);
    }

    floatToByteColor(rgb){
        return {
            r: this.floatToByte(rgb.r),
            g: this.floatToByte(rgb.g),
            b: this.floatToByte(rgb.b)
        };
    }

    byteToFloatColor(rgb){
        return {
            r: this.byteToFloat(rgb.r),
            g: this.byteToFloat(rgb.g),
            b: this.byteToFloat(rgb.b)
        };
    }

    floatToByte(v){
        v = Math.ceil(v * 255);
        return v;
    }

    byteToFloat(v){
        v = v / 255;
        return v;
    }
  }