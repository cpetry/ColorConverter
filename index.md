### ColorConverter

# Color
<link rel="stylesheet" href="styles.css">
<div class="begin-twoColumns"></div>

<div class="begin-leftColumn"></div>

## sRGB
<canvas id="colorCanvas" width="200" height="100"></canvas>

### Hex
<input id="inputHex" type="text" oninput="UpdateHex(this)" value="#000000" size="7" pattern="^\s*#?[a-fA-F\d]{6}$" title="(i.e. #1ad, #123456, #ffaa33)" />

### RAL
<input id="inputRAL" type="text" oninput="UpdateRAL(this)" value="RAL 050 60 70" size="13" pattern="^(RAL ?\d\d\d\d)|(RAL ?\d\d\d ?\d\d ?\d\d)$" title="(i.e. RAL 050 60 70, RAL1001)" /> 

### RGB
R <input id="inputRed" type="number" oninput="UpdateRGB()" min="0" max="255" size="4"/>
G <input id="inputGreen" type="number" oninput="UpdateRGB()" min="0" max="255" size="4"/>
B <input id="inputBlue" type="number"  oninput="UpdateRGB()" min="0" max="255" size="4"/>

### RGB(float)
R <input id="inputRedfloat" type="number" oninput="UpdateRGBFloat(this)" min="0" step=".01"  max="1" size="4"/>
G <input id="inputGreenfloat" type="number" oninput="UpdateRGBFloat(this)" min="0" step=".01" max="1" size="4"/>
B <input id="inputBluefloat" type="number"  oninput="UpdateRGBFloat(this)" min="0" step=".01" max="1" size="4"/>
      
### Lab
L <input id="inputL" type="number" step=".001" min="0" max="100" size="6"/>
a <input id="inputA" type="number" step=".001" min="-90" max = "100" size="6" />
b <input id="inputB" type="number" step=".001" min="-110" max = "100" size="6" />

<div class="end-leftColumn"></div>

<div class="begin-rightColumn"></div>

## Linear
<canvas id="colorCanvasLinear" width="200" height="100"></canvas>

### Hex
<input id="inputHexLinear" type="text" oninput="UpdateHexLinear(this)" value="#000000" size="7" pattern="^\s*#?[a-fA-F\d]{6}$" title="(i.e. #1ad, #123456, #ffaa33)" /> 

### RAL
<input id="inputRALLinear" type="text" oninput="UpdateRALLinear(this)" value="RAL 050 60 70" size="13" pattern="^(RAL ?\d\d\d\d)|(RAL ?\d\d\d ?\d\d ?\d\d)$" title="(i.e. RAL 050 60 70, RAL1001)" /> 

### RGB
R <input id="inputRedLinear" type="number" oninput="UpdateRGBLinear()" min="0" max="255" size="4" />
G <input id="inputGreenLinear" type="number"  oninput="UpdateRGBLinear()" min="0" max="255" size="4"/>
B <input id="inputBlueLinear" type="number"  oninput="UpdateRGBLinear()" min="0" max="255" size="4" />

### RGB(float)
R <input id="inputRedLinearfloat" type="number" oninput="UpdateRGBFloatLinear(this)" min="0" max="1" step=".01" size="4" />
G <input id="inputGreenLinearfloat" type="number"  oninput="UpdateRGBFloatLinear(this)" min="0" max="1" step=".01" size="4"/>
B <input id="inputBlueLinearfloat" type="number"  oninput="UpdateRGBFloatLinear(this)" min="0" max="1" step=".01" size="4" />
    
### Lab
L <input id="inputLLinear" type="number" step=".001" min="0" max="100" size="6" />
a <input id="inputALinear" type="number" step=".001" min="-90" max = "100" size="6" />
b <input id="inputBLinear" type="number" step=".001" min="-110" max = "100" size="6" />

<div class="end-rightColumn"></div>
<div class="end-twoColumns"></div>

<script src="js/hex.js" type="text/javascript"></script>
<script src="js/rgb.js" type="text/javascript"></script>
<script src="js/Lab.js" type="text/javascript"></script>
<script src="js/RAL.js" type="text/javascript"></script>
<script src="js/main.js" type="text/javascript"></script>