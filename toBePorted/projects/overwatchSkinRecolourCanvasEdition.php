<html>
    <head>
	        <?php include($_SERVER['DOCUMENT_ROOT'].'/templates/head.php') ?>
    </head>
<style>
.grad1 {
        background: red; /* For browsers that do not support gradients */
    background: -webkit-linear-gradient(right, blue, purple, red , yellow, green, cyan); /* For Safari 5.1 to 6.0 */
    background: -o-linear-gradient(left, blue, purple, red , yellow, green, cyan); /* For Opera 11.1 to 12.0 */
    background: -moz-linear-gradient(left, blue, purple, red , yellow, green, cyan); /* For Firefox 3.6 to 15 */
    background: linear-gradient(to left, blue, purple, red , yellow, green, cyan); /* Standard syntax (must be last) */
}

.grad2 {
        background: red; /* For browsers that do not support gradients */
    background: -webkit-linear-gradient(right, cyan, blue, purple, red , yellow, green); /* For Safari 5.1 to 6.0 */
    background: -o-linear-gradient(left, cyan, blue, purple, red , yellow, green); /* For Opera 11.1 to 12.0 */
    background: -moz-linear-gradient(left, cyan, blue, purple, red , yellow, green); /* For Firefox 3.6 to 15 */
    background: linear-gradient(to left, cyan, blue, purple, red , yellow, green); /* Standard syntax (must be last) */
}

.grad3 {
        background: red; /* For browsers that do not support gradients */
    background: -webkit-linear-gradient(right, green, cyan, blue, purple, red , yellow); /* For Safari 5.1 to 6.0 */
    background: -o-linear-gradient(left, green, cyan, blue, purple, red , yellow); /* For Opera 11.1 to 12.0 */
    background: -moz-linear-gradient(left, green, cyan, blue, purple, red , yellow); /* For Firefox 3.6 to 15 */
    background: linear-gradient(to left, green, cyan, blue, purple, red , yellow); /* Standard syntax (must be last) */
}

.grad4 {
        background: red; /* For browsers that do not support gradients */
    background: -webkit-linear-gradient(right ,yellow, green, cyan, blue, purple, red); /* For Safari 5.1 to 6.0 */
    background: -o-linear-gradient(left ,yellow, green, cyan, blue, purple, red); /* For Opera 11.1 to 12.0 */
    background: -moz-linear-gradient(left, yellow, green, cyan, blue, purple, red); /* For Firefox 3.6 to 15 */
    background: linear-gradient(to left, yellow, green, cyan, blue, purple, red); /* Standard syntax (must be last) */
}

.grad5 {
        background: red; /* For browsers that do not support gradients */
    background: -webkit-linear-gradient(right, red, yellow, green, cyan, blue, purple); /* For Safari 5.1 to 6.0 */
    background: -o-linear-gradient(left, red, yellow, green, cyan, blue, purple); /* For Opera 11.1 to 12.0 */
    background: -moz-linear-gradient(left, red, yellow, green, cyan, blue, purple); /* For Firefox 3.6 to 15 */
    background: linear-gradient(to left, red, yellow, green, cyan, blue, purple); /* Standard syntax (must be last) */
}

.grad6 {
        background: red; /* For browsers that do not support gradients */
    background: -webkit-linear-gradient(right, purple, red, yellow, green, cyan, blue); /* For Safari 5.1 to 6.0 */
    background: -o-linear-gradient(left, purple, red, yellow, green, cyan, blue); /* For Opera 11.1 to 12.0 */
    background: -moz-linear-gradient(left, purple, red, yellow, green, cyan, blue); /* For Firefox 3.6 to 15 */
    background: linear-gradient(to left, purple, red, yellow, green, cyan, blue); /* Standard syntax (must be last) */
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
}


</style>
  <?php include($_SERVER['DOCUMENT_ROOT'].'/templates/defback.php') ?>
<?php include($_SERVER['DOCUMENT_ROOT'].'/templates/navp.php') ?>


        <div class="container">
            <div class="Home">
			<h1>Overwatch Skin Recolour (WORK IN PROGRESS)</h1>
			                <hr>
				</div>
				            <div class="col-sm-8 blog-main">

<div id="wrapper">    
<div id="canvasDiv">
<canvas id="canvas" width=600 height=700></canvas>
</div>
</div>

<br>

<div class="slidecontainer">
  <input type="range" min="0" max="1000" value="0" class="slider grad1" id="colorSlider">

</div>
   <p>Primary Colour Hue Value: <span id="demo"></span></p>
   
   
   <div class="slidecontainer">
  <input type="range" min="0" max="1000" value="0" class="slider grad4" id="colorSliderSecondary">

</div>
   <p>Secondary Colour Hue Value: <span id="demo2"></span></p>
   
   
   
   
   
   
   
   
   
   
   <div>
<?php include($_SERVER['DOCUMENT_ROOT'].'/templates/ad.php') ?>
</div>
<div>
<?php include($_SERVER['DOCUMENT_ROOT'].'/templates/disqus.php') ?>
</div>		
			</div>
					<!-- Sidebar Start-->
        <?php include($_SERVER['DOCUMENT_ROOT'].'/templates/sidebar.php') ?>
		</div>
		<!-- Sidebar End-->
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
   
   
   

<script>
var slider = document.getElementById("colorSlider");
var slider2 = document.getElementById("colorSliderSecondary");
var output = document.getElementById("demo");
var output2 = document.getElementById("demo2");
output.innerHTML = slider.value;
output2.innerHTML = slider2.value;
var shift = 0;

slider.oninput = function() {
setShift(this.value)
  output.innerHTML = this.value;
  
}

function setShift(a){
shift = - (a/1000)
recolorSkin(shift, 50, 20, 150, 300)
}

slider2.oninput = function() {

shift2 = - ( this.value /1000)
recolorSkin(shift2, 50, 20, 0, 150)
  output2.innerHTML = this.value;
  
}



var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var img = new Image();
img.crossOrigin = "anonymous";
img.onload = start;
img.src = "https://i.imgur.com/VuNkexu.png";


function start() {
    ctx.drawImage(img, 50, 20);
   //ctx.drawImage(img, 100, 0);
    // shift blueish colors to greenish colors
   // recolorSkin(-.25);
}

var imgData
var data
var hsl
var hue
var newRgb
var i
var newimgData

	    var canvasConst = document.createElement("canvas");
    canvasConst.width = 600;
    canvasConst.height = 700;
    var ctxc = canvasConst.getContext("2d");
	  ctxc.drawImage(img, 50, 20);

function recolorSkin(colorshift, xoffset, yoffset, rangeStart, rangeEnd) {
//ctx.clearRect(0, 0, canvas.width, canvas.height);
//ctx.drawImage(img, xoffset, yoffset);
    imgData = ctxc.getImageData(0, 0, canvas.width, canvas.height);
    data = imgData.data;
	var newData = [];

	

    for (i = 0; i < data.length; i += 4) {
        red = data[i + 0];
        green = data[i + 1];
        blue = data[i + 2];
        alpha = data[i + 3];

        // skip transparent/semiTransparent pixels
        if (alpha < 200) {
            continue;
        }

        hsl = rgbToHsl(red, green, blue);
        hue = hsl.h * 360;
		
		

        // change blueish pixels to the new color
        if (hue > rangeStart && hue < rangeEnd) {
            newRgb = hslToRgb(hsl.h + colorshift, hsl.s, hsl.l);
            newData[i + 0] = newRgb.r;
            newData[i + 1] = newRgb.g;
            newData[i + 2] = newRgb.b;
            newData[i + 3] = 255;
        }

    }
	newData = new Uint8ClampedArray(newData);
		imgData.data.set(newData);
	    var canvas2 = document.createElement("canvas");
    canvas2.width = 600;
    canvas2.height = 700;
    var ctx2 = canvas2.getContext("2d");
	  ctx2.putImageData(imgData, 0, 0);
	  ctx.drawImage(canvas2, 0, 0);
	
		
   // ctx.putImageData(imgData, 0, 0);
}


function rgbToHsl(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b),
        min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if (max == min) {
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }

    return ({
        h: h,
        s: s,
        l: l,
    });
}


function hslToRgb(h, s, l) {
    var r, g, b;

    if (s == 0) {
        r = g = b = l; // achromatic
    } else {
        function hue2rgb(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return ({
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255),
    });
}
</script>
</html>