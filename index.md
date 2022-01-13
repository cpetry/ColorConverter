### ColorConverter

# Color

<table style="width:100%">
<tr>
<td>

# sRGB

<canvas id="colorCanvas" width="200" height="100"></canvas>

#### Hex
<input id="inputHex" type="text" oninput="UpdateHex(this)" value="#000000" size="7" pattern="^#?[a-f\d]{6}$" title="(i.e. #1ad, #123456, #ffaa33)" /> 

#### RGB
R <input id="inputRed" type="number" oninput="UpdateRGB()" min="0" max="255" size="4"/>
G <input id="inputGreen" type="number" oninput="UpdateRGB()" min="0" max="255" size="4"/>
B <input id="inputBlue" type="number"  oninput="UpdateRGB()" min="0" max="255" size="4"/>
      
#### Lab
L <input id="inputL" type="number" step=".001" min="0" max="100" size="6"/>
a <input id="inputA" type="number" step=".001" min="-90" max = "100" size="6" />
b <input id="inputB" type="number" step=".001" min="-110" max = "100" size="6" />

</td>

<td>

# Linear 

<canvas id="colorCanvasLinear" width="200" height="100"></canvas>

#### Hex
<input id="inputHexLinear" type="text" oninput="UpdateHexLinear(this)" value="#000000" size="7" pattern="^#?[a-f\d]{6}$" title="(i.e. #1ad, #123456, #ffaa33)" /> 

#### RGB
R <input id="inputRedLinear" type="number" oninput="UpdateRGBLinear()" min="0" max="255" size="4" />
G <input id="inputGreenLinear" type="number"  oninput="UpdateRGBLinear()" min="0" max="255" size="4"/>
B <input id="inputBlueLinear" type="number"  oninput="UpdateRGBLinear()" min="0" max="255" size="4" />
    
#### Lab
L <input id="inputLLinear" type="number" step=".001" min="0" max="100" size="6" />
a <input id="inputALinear" type="number" step=".001" min="-90" max = "100" size="6" />
b <input id="inputBLinear" type="number" step=".001" min="-110" max = "100" size="6" />

</td>
</tr>
</table>

<script src="js/hex.js" type="text/javascript"></script>
<script src="js/rgb.js" type="text/javascript"></script>
<script src="js/Lab.js" type="text/javascript"></script>
<script src="js/RAL.js" type="text/javascript"></script>
<script src="js/main.js" type="text/javascript"></script>