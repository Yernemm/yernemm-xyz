
<html>
    <head>
	        <?php include($_SERVER['DOCUMENT_ROOT'].'/templates/head.php') ?>
			
				<script>

function debugInfoShow() {
    var x = document.getElementById("debugInfo");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

</script>
			
    </head>
<style>
.gradc {
        background: red; /* For browsers that do not support gradients */
    background: -webkit-linear-gradient(left, cyan, blue, purple, red , yellow, green, cyan); /* For Safari 5.1 to 6.0 */
    background: -o-linear-gradient(right, cyan, blue, purple, red , yellow, green, cyan); /* For Opera 11.1 to 12.0 */
    background: -moz-linear-gradient(right, cyan, blue, purple, red , yellow, green, cyan); /* For Firefox 3.6 to 15 */
    background: linear-gradient(to right, cyan, blue, purple, red , yellow, green, cyan); /* Standard syntax (must be last) */
}

.gradg {
        background: red; /* For browsers that do not support gradients */
    background: -webkit-linear-gradient(left, green, cyan, blue, purple, red , yellow, green); /* For Safari 5.1 to 6.0 */
    background: -o-linear-gradient(right, green, cyan, blue, purple, red , yellow, green); /* For Opera 11.1 to 12.0 */
    background: -moz-linear-gradient(right, green, cyan, blue, purple, red , yellow, green); /* For Firefox 3.6 to 15 */
    background: linear-gradient(to right, green, cyan, blue, purple, red , yellow, green); /* Standard syntax (must be last) */
}

.grady {
        background: red; /* For browsers that do not support gradients */
    background: -webkit-linear-gradient(left , yellow, green, cyan, blue, purple, red , yellow); /* For Safari 5.1 to 6.0 */
    background: -o-linear-gradient(right , yellow, green, cyan, blue, purple, red , yellow); /* For Opera 11.1 to 12.0 */
    background: -moz-linear-gradient(right , yellow, green, cyan, blue, purple, red , yellow); /* For Firefox 3.6 to 15 */
    background: linear-gradient(to right , yellow, green, cyan, blue, purple, red , yellow); /* Standard syntax (must be last) */
}

.gradr {
        background: red; /* For browsers that do not support gradients */
    background: -webkit-linear-gradient(left, red, yellow, green, cyan, blue, purple, red); /* For Safari 5.1 to 6.0 */
    background: -o-linear-gradient(right, red, yellow, green, cyan, blue, purple, red); /* For Opera 11.1 to 12.0 */
    background: -moz-linear-gradient(right, red, yellow, green, cyan, blue, purple, red); /* For Firefox 3.6 to 15 */
    background: linear-gradient(to right, red, yellow, green, cyan, blue, purple, red); /* Standard syntax (must be last) */
}

.gradp {
        background: red; /* For browsers that do not support gradients */
    background: -webkit-linear-gradient(left, purple, red, yellow, green, cyan, blue, purple); /* For Safari 5.1 to 6.0 */
    background: -o-linear-gradient(right, purple, red, yellow, green, cyan, blue, purple); /* For Opera 11.1 to 12.0 */
    background: -moz-linear-gradient(right, purple, red, yellow, green, cyan, blue, purple); /* For Firefox 3.6 to 15 */
    background: linear-gradient(to right, purple, red, yellow, green, cyan, blue, purple); /* Standard syntax (must be last) */
}

.gradb {
        background: red; /* For browsers that do not support gradients */
    background: -webkit-linear-gradient(left, blue, purple, red, yellow, green, cyan, blue); /* For Safari 5.1 to 6.0 */
    background: -o-linear-gradient(right, blue, purple, red, yellow, green, cyan, blue); /* For Opera 11.1 to 12.0 */
    background: -moz-linear-gradient(right, blue, purple, red, yellow, green, cyan, blue); /* For Firefox 3.6 to 15 */
    background: linear-gradient(to right, blue, purple, red, yellow, green, cyan, blue); /* Standard syntax (must be last) */
}

.gradValue {
	background: red; /* For browsers that do not support gradients */
    background: -webkit-linear-gradient(left, black, white); /* For Safari 5.1 to 6.0 */
    background: -o-linear-gradient(right, black, white); /* For Opera 11.1 to 12.0 */
    background: -moz-linear-gradient(right, black, white); /* For Firefox 3.6 to 15 */
    background: linear-gradient(to right, black, white); /* Standard syntax (must be last) */
}

.gradSaturation {
		background: red; /* For browsers that do not support gradients */
    background: -webkit-linear-gradient(left, grey, blue); /* For Safari 5.1 to 6.0 */
    background: -o-linear-gradient(right, grey, blue); /* For Opera 11.1 to 12.0 */
    background: -moz-linear-gradient(right, grey, blue); /* For Firefox 3.6 to 15 */
    background: linear-gradient(to right, grey, blue); /* Standard syntax (must be last) */
}


.slidecontainer {
    width: 100%;
}

.slider {
    -webkit-appearance: none;
    width: 100%;
        height: 15px;
    border-radius: 5px;  

    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
}

.slider:hover {
    opacity: 1;
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%; 
    background: #ffffff;
    cursor: pointer;
}

.slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #4CAF50;
    cursor: pointer;
	
	}
	
	#wrapper {
  text-align: center;
}

#canvasDiv {
	background: #ffffff;
	width: 600px;
	display: block;
	margin-right: auto;
	margin-left: auto;
	-moz-border-radius: 15px;
	border-radius: 15px;
	
	.leftAlign {
		width: 650px;
float: left;
	}
	
	.rightAlign { 
float: right;
width: 50%;
	}
}


</style>
  <?php include($_SERVER['DOCUMENT_ROOT'].'/templates/defback.php') ?>
<?php include($_SERVER['DOCUMENT_ROOT'].'/templates/navp.php') ?>


        <div class="container">
            <div class="Home">
			<h1>Overwatch Skin Recolour (WORK IN PROGRESS)</h1>
			                <hr>
				</div>
				            <div>
							<table style="width: 100%; border-spacing: 15px;">
							<tr>
							<td>
<div>
<div id="wrapper">    
<div id="canvasDiv">
<p id="pngHolder">
<!--<img id="outputImg" width=600 height=700>-->
</div>
</div>

<br>
</div>
</td>
<td style="width: 15px;">
</td>
<td style="width: 50%;">
<div>
<hr>
<p>
<?php
echo '
Skin Code: <input type="text" id="skinCode" style="color: #000000;width: 100%;" ';

  if (isset($_GET['code'])) {
        echo '	
		class="codeLoaded" value="'.$_GET['code'].'"';
    }else{
      
    }
	echo '>';
?>
</p>

<p>Link: <span id="codeLink"></span></p>

<p> <button onClick="setCode(document.getElementById('skinCode').value)">Load Code</button>

 <button onClick="document.getElementById('skinCode').value = getCode()">Generate Code</button>
 
 <button onClick="document.getElementById('codeLink').innerHTML = 'https://yernemm.xyz/projects/overwatchSkinRecolour/?code=' + getCode()">Generate Link</button>
 
 </p>

<hr>
<p>Skin: 
<select style="color: #000000;" onchange="skinSelectChange()" id="skinSelector">
  
  <option value="3">Ana (Classic)</option>
  <option value="4">Doomfist (Classic)</option>
  <option value="5">D.Va (Classic)</option>
  <option value="1">Mei (Classic)</option>
  <option value="2">Mei (Jiangshi)</option>
 
</select>
 - Recolour automatically: <input type="checkbox" id="cCheck"> - <button onClick="recolorAll()">Recolour</button> - <button onClick="setColors(0, 0, 0, 0, 0, 0, 0, 0, 0)">Reset</button> - <button onClick="randomColors()">Random</button>
</p>
<hr>
	<p>Primary Colour:</p>
   <p>Hue: <span id="demo"></span></p>
   <div class="slidecontainer">
  <input type="range" min="0" max="3600" value="0" class="slider" id="colorSlider">
</div>
   <p>Saturation: <span id="pSat"></span></p>
   <div class="slidecontainer">
  <input type="range" min="-1000" max="1000" value="0" class="slider gradSaturation" id="satSlider">
</div>
   <p>Lightness: <span id="pVal"></span></p>
   <div class="slidecontainer">
  <input type="range" min="-1000" max="1000" value="0" class="slider gradValue" id="ligSlider">
</div>
   <hr>
	<p>Secondary Colour:</p>
   <p>Hue: <span id="demo2"></span></p>
      <div class="slidecontainer">
  <input type="range" min="0" max="3600" value="0" class="slider" id="colorSliderSecondary">
</div>
  <p>Saturation: <span id="pSat2"></span></p>
   <div class="slidecontainer">
  <input type="range" min="-1000" max="1000" value="0" class="slider gradSaturation" id="satSliderSecondary">
</div>
   <p>Lightness: <span id="pVal2"></span></p>
   <div class="slidecontainer">
  <input type="range" min="-1000" max="1000" value="0" class="slider gradValue" id="ligSliderSecondary">
</div>
<hr>
	<p>Tertiary Colour:</p>
   <p>Hue: <span id="demo3"></span></p>
      <div class="slidecontainer">
  <input type="range" min="0" max="3600" value="0" class="slider" id="colorSlider3">
</div>
  <p>Saturation: <span id="pSat3"></span></p>
   <div class="slidecontainer">
  <input type="range" min="-1000" max="1000" value="0" class="slider gradSaturation" id="satSlider3">
</div>
   <p>Lightness: <span id="pVal3"></span></p>
   <div class="slidecontainer">
  <input type="range" min="-1000" max="1000" value="0" class="slider gradValue" id="ligSlider3">
</div>
<hr>

</div>
</td>
</tr>
</table>
   <hr> 
   
   <button onclick="debugInfoShow()">Show/Hide Debug info</button>
   <div id="debugInfo" style="display: none;">
   <p>Debug info:</p>
   <p>Constant Image Canvas</p>
   <canvas id="de1" width="600" height="800"></canvas>
   <p>Intermediate Calculation Image Canvas</p>
   <canvas id="de2" width="600" height="800"></canvas>
   <p>Output Image Canvas</p>
   <canvas id="de3" width="600" height="800"></canvas>
   </div>   
   
   <div>
<?php include($_SERVER['DOCUMENT_ROOT'].'/templates/ad.php') ?>
</div>
		
			</div>
					<!-- Sidebar Start
        <?php include($_SERVER['DOCUMENT_ROOT'].'/templates/sidebar.php') ?>
		</div>
		<!-- Sidebar End -->
        </div>
        <!-- /.container -->
        <!-- Bootstrap core JavaScript
    ================================================== -->
        <!-- Placed at the end of the document so the pages load faster -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery.min.js"><\/script>')</script>
        <script src="/bootstrap/js/bootstrap.min.js"></script>
        <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
        <script src="/bootstrap/js/ie10-viewport-bug-workaround.js"></script>
		        <?php include($_SERVER['DOCUMENT_ROOT'].'/templates/foot.php') ?>
   
   
   


<script src="reCoScript.js"></script>

</html>