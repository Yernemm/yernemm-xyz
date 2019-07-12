
//===============================================

//OVERWATCH SKIN RECOLOUR CODE

//By Yernemm

//For https://yernemm.xyz/projects/overwatchSkinRecolour/
//---------------------------------------------------------


//(Original hue shift code taken from http://jsfiddle.net/m1erickson/2d7ZN/ )
//This code has been heavily edited and expanded upon by Yernemm.
//The additions/changes include..
//-Adding support for sliders which constantly change the hue by adding a constant image canvas.
//-Adding support for two or more areas of the images to be shifted simultaneously by using an intermediate calculation canvas.
//-Switching images
//-Expandability
//-Lightness/Saturation shift

//===============================================

//Skin Imgaes:
var currentImage = 3;

var divHue = 3600;
var divSatLig = 10;

var skinName = ["test", "meiClassic", "meiJiangshi", "anaClassic", "doomfistClassic", "dvaClassic"];


var primaryHueRangeBottom = 	[150, 100, 140, 25, 0, 260];
var primaryHueRangeTop = 		[300, 300, 300, 100, 220, 360];

var secondaryHueRangeBottom = 	[0, 300, 70, 100, 300, 120];
var secondaryHueRangeTop = 		[150, 360, 140, 360, 360, 260];

var tertiaryHueRangeBottom = 	[0, 0, -70, 0, 220, 0];
var tertiaryHueRangeTop = 		[150, 100, 300, 25, 300, 120];

var primarySliderHue = 			["gradc", "gradc", "gradc", "grady", "grady", "gradp"];
var secondarySliderHue = 		["gradr", "gradr", "gradr", "gradc", "gradr", "gradb"];
var tertiarySliderHue = 		["gradr", "gradr", "gradr", "gradr", "gradp", "gradr"];

var slider = document.getElementById("colorSlider");
var sslider = document.getElementById("satSlider");
var lslider = document.getElementById("ligSlider");
var slider2 = document.getElementById("colorSliderSecondary");
var sslider2 = document.getElementById("satSliderSecondary");
var lslider2 = document.getElementById("ligSliderSecondary");
var slider3 = document.getElementById("colorSlider3");
var sslider3 = document.getElementById("satSlider3");
var lslider3 = document.getElementById("ligSlider3");

slider.className = "slider " + primarySliderHue[currentImage]
slider2.className = "slider " + secondarySliderHue[currentImage]
slider3.className = "slider " + tertiarySliderHue[currentImage]

var deCan1 = document.getElementById("de1").getContext("2d");
var deCan2 = document.getElementById("de2").getContext("2d");
var deCan3 = document.getElementById("de3").getContext("2d");

var hues = [0,0,0];
var sats = [0,0,0];
var ligs = [0,0,0];


var xDefOffset = 20;
var yDefOffset = 20;

var imgHeight = 800;
var imgWidth = 600;



var output = document.getElementById("demo");
var satOut = document.getElementById("pSat");
var ligOut = document.getElementById("pVal");
var output2 = document.getElementById("demo2");
var sat2Out = document.getElementById("pSat2");
var lig2Out = document.getElementById("pVal2");
var output3 = document.getElementById("demo3");
var sat3Out = document.getElementById("pSat3");
var lig3Out = document.getElementById("pVal3");

output.innerHTML = slider.value;
satOut.innerHTML = sslider.value;
ligOut.innerHTML = lslider.value;

output2.innerHTML = slider2.value;
sat2Out.innerHTML = sslider2.value;
lig2Out.innerHTML = lslider2.value;

output3.innerHTML = slider3.value;
sat3Out.innerHTML = sslider3.value;
lig3Out.innerHTML = lslider3.value;




var shift = 0;


var img = new Image();
img.crossOrigin = "anonymous";
//img.onload = start;
//img.src = "https://i.imgur.com/VuNkexu.png";
img.src = "/media/image/owModel/" + skinName[currentImage] + ".png"


var hh1
var hh2
var ss1
var ss2
var ll1
var ll2
var ss3
var ll3
var hh3





var canvas2 = document.createElement("canvas");
var ctx2 = canvas2.getContext("2d");
canvas2.width = imgWidth + xDefOffset;
    canvas2.height = imgHeight + xDefOffset;




//Creates hidden output canvas which will be converted to .png
	    var canvas = document.createElement("canvas");
    canvas.width = imgWidth;
    canvas.height = imgHeight;
    var ctx = canvas.getContext("2d");
	  ctx.drawImage(img, xDefOffset, yDefOffset);


	deCan1.clearRect(0, 0, canvas.width, canvas.height);
	deCan3.clearRect(0, 0, canvas.width, canvas.height);
	deCan1.drawImage(img, xDefOffset, yDefOffset);
	deCan3.drawImage(img, xDefOffset, yDefOffset);


var newimgData

	    var canvasConst = document.createElement("canvas");
    canvasConst.width = imgWidth + xDefOffset;
    canvasConst.height = imgHeight + yDefOffset;
    var ctxc = canvasConst.getContext("2d");
	  ctxc.drawImage(img, xDefOffset, yDefOffset);
	  deCan2.drawImage(img, xDefOffset, yDefOffset);
	  
	  if(document.getElementById("skinCode").className == "codeLoaded"){
	setCode(document.getElementById('skinCode').value)
}

//--IMAGE ONLOAD--


img.onload = function(){
	ctx.drawImage(img, xDefOffset, yDefOffset);
	ctxc.drawImage(img, xDefOffset, yDefOffset);
	deCan1.drawImage(img, xDefOffset, yDefOffset);
	deCan3.drawImage(img, xDefOffset, yDefOffset);
	//recolorSkin(0, xDefOffset, yDefOffset, 150, 300, 1, 0);
	recolorAll()
}



//--SLIDER LOGIC--

slider.oninput = function() {
		shift = (this.value)
	hues[0] = shift;
	  output.innerHTML = this.value;
	if(document.getElementById("cCheck").checked){
recolorSkin(0, xDefOffset, yDefOffset, primaryHueRangeBottom[currentImage], primaryHueRangeTop[currentImage], 1, 0)
	}

  
}

sslider.oninput = function() {
		
	sats[0] = (this.value);
	  satOut.innerHTML = this.value;
	if(document.getElementById("cCheck").checked){
recolorSkin(0, xDefOffset, yDefOffset, primaryHueRangeBottom[currentImage], primaryHueRangeTop[currentImage], 1, 0)
	}

  
}

sslider2.oninput = function() {
		
	sats[1] = (this.value);
	  sat2Out.innerHTML = this.value;
	if(document.getElementById("cCheck").checked){
recolorSkin(0, xDefOffset, yDefOffset, secondaryHueRangeBottom[currentImage], secondaryHueRangeTop[currentImage], 1, 1)
	}

  
}


lslider.oninput = function() {
		
	ligs[0] = (this.value );
	  ligOut.innerHTML = this.value;
	if(document.getElementById("cCheck").checked){
recolorSkin(0, xDefOffset, yDefOffset, primaryHueRangeBottom[currentImage], primaryHueRangeTop[currentImage], 1, 0)
	}

  
}

lslider2.oninput = function() {
		
	ligs[1] = (this.value);
	  lig2Out.innerHTML = this.value;
	if(document.getElementById("cCheck").checked){
recolorSkin(0, xDefOffset, yDefOffset, secondaryHueRangeBottom[currentImage], secondaryHueRangeTop[currentImage], 1, 1)
	}

  
}


slider3.oninput = function() {

	
hues[2] = ( this.value)
  output3.innerHTML = this.value;
if(document.getElementById("cCheck").checked){
recolorSkin(0, xDefOffset, yDefOffset, tertiaryHueRangeBottom[currentImage], tertiaryHueRangeTop[currentImage], 1, 2)
}

}


sslider3.oninput = function() {
		
	sats[2] = (this.value);
	  sat3Out.innerHTML = this.value;
	if(document.getElementById("cCheck").checked){
recolorSkin(0, xDefOffset, yDefOffset, tertiaryHueRangeBottom[currentImage], tertiaryHueRangeTop[currentImage], 1, 2)
	}

  
}


lslider3.oninput = function() {
		
	ligs[2] = (this.value);
	  lig3Out.innerHTML = this.value;
	if(document.getElementById("cCheck").checked){
recolorSkin(0, xDefOffset, yDefOffset, tertiaryHueRangeBottom[currentImage], tertiaryHueRangeTop[currentImage], 1, 2)
	}

  
}


slider2.oninput = function() {

	shift2 = ( this.value)
hues[1] = shift2;
  output2.innerHTML = this.value;
if(document.getElementById("cCheck").checked){
recolorSkin(0, xDefOffset, yDefOffset, secondaryHueRangeBottom[currentImage], secondaryHueRangeTop[currentImage], 1, 1)
}

  
}

//---FUNCTIONS---

function randomColors(){
	hh1 = randomise(0, 3600)
	hh2 = randomise(0, 3600)
	hh3 = randomise(0, 3600)
	ss1 = randomise(-1000, 1000)
	ss2 = randomise(-1000, 1000)
	ll1 = randomise(-1000, 1000)
	ll2 = randomise(-1000, 1000)
	ss3 = randomise(-1000, 1000)
	ll3 = randomise(-1000, 1000)

	setColors(hh1, ss1, ll1, hh2, ss2, ll2, hh3, ss3, ll3)
}

function randomise(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function setCode(a){
	var inputs = a.split("z", 10)
	
	for (var i = 0; i <=9; i++){
	inputs[i] = parseInt(inputs[i], 35)	
	}
	
	document.getElementById("skinSelector").value = inputs[0];
	
	
	skinSelectChange()
	
	setColors(inputs[1], inputs[2] - 1000, inputs[3] - 1000, inputs[4], inputs[5] - 1000, inputs[6] - 1000, inputs[7], inputs[8] - 1000, inputs[9] - 1000)
}

function getCode() {
	
	var h1 = hues[0] * 1
	var s1 = sats[0] * 1 + 1000
	var l1 = ligs[0] * 1 + 1000
	var h2 = hues[1] * 1
	var s2 = sats[1] * 1 + 1000
	var l2 = ligs[1] * 1 + 1000
	var h3 = hues[2] * 1
	var s3 = sats[2] * 1 + 1000
	var l3 = ligs[2] * 1 + 1000
	

	
	var theCode = currentImage + "z" + h1.toString(35) + "z" + s1.toString(35) + "z" + l1.toString(35) + "z" + h2.toString(35) + "z" + s2.toString(35) + "z" + l2.toString(35) + "z" + h3.toString(35) + "z" + s3.toString(35) + "z" + l3.toString(35)
	
	return theCode
	
}

function setColors(h1, s1, l1, h2, s2, l2, h3, s3, l3){
	
	h1 = h1 * 1
	s1 = s1 * 1
	l1 = l1 * 1	
	h2 = h2 * 1
	s2 = s2 * 1
	l2 = l2 * 1
	h3 = h3 * 1
	s3 = s3 * 1
	l3 = l3 * 1
	
	slider.value = h1;
	sslider.value = s1;
	lslider.value = l1;
	slider2.value = h2;
	sslider2.value = s2;
	lslider2.value = l2;
	slider3.value = h3;
	sslider3.value = s3;
	lslider3.value = l3;
	
	hues = [h1,h2,h3];
	sats = [s1,s2,s3];
	ligs = [l1,l2,l3];
	
	output.innerHTML = slider.value;
output2.innerHTML = slider2.value;
satOut.innerHTML = sslider.value;
sat2Out.innerHTML = sslider2.value;
ligOut.innerHTML = lslider.value;
lig2Out.innerHTML = lslider2.value;
output3.innerHTML = slider3.value;
sat3Out.innerHTML = sslider3.value;
lig3Out.innerHTML = lslider3.value;

recolorAll()
}

function recolorAll(){
	recolorSkin(0, xDefOffset, yDefOffset, primaryHueRangeBottom[currentImage], primaryHueRangeTop[currentImage], 1, 0)
	recolorSkin(0, xDefOffset, yDefOffset, secondaryHueRangeBottom[currentImage], secondaryHueRangeTop[currentImage], 1, 1)
	recolorSkin(0, xDefOffset, yDefOffset, tertiaryHueRangeBottom[currentImage], tertiaryHueRangeTop[currentImage], 1, 2)
}


function skinSelectChange(){
	
	ctxc.clearRect(0, 0, canvas.width, canvas.height);
	ctx.clearRect(0, 0, canvas.width, canvas.height);	
	deCan1.clearRect(0, 0, canvas.width, canvas.height);
	deCan3.clearRect(0, 0, canvas.width, canvas.height);
	
	currentImage = document.getElementById("skinSelector").value
	img.src = "/media/image/owModel/" + skinName[currentImage] + ".png"
	
	slider.className = "slider " + primarySliderHue[currentImage]
	slider2.className = "slider " + secondarySliderHue[currentImage]
	slider3.className = "slider " + tertiarySliderHue[currentImage]


	//ctx2.clearRect(0, 0, canvas.width, canvas.height);
	
	//ctx.drawImage(img, xDefOffset, yDefOffset);
	//ctxc.drawImage(img, xDefOffset, yDefOffset);
	//deCan1.drawImage(img, xDefOffset, yDefOffset);
	//deCan3.drawImage(img, xDefOffset, yDefOffset);
	
	
	
	//For SOME reason this code below will not execute so just stop trying.
	//recolorSkin(0, xDefOffset, yDefOffset, primaryHueRangeBottom[currentImage], primaryHueRangeTop[currentImage], 1, 0)
	//recolorSkin(0, xDefOffset, yDefOffset, secondaryHueRangeBottom[currentImage], secondaryHueRangeTop[currentImage], 1, 1)
}


function recolorSkin(colorshift, xoffset, yoffset, rangeStart, rangeEnd, hslSwitch, column) {
//ctx.clearRect(0, 0, canvas.width, canvas.height);
//ctx.drawImage(img, xoffset, yoffset);
    var imgData = ctxc.getImageData(0, 0, canvas.width + xoffset, canvas.height + yoffset);
    var data = imgData.data;
	var newData = [];
	var newHues = hues[column] / 3600
	var newSats = sats[column] / 10
	var newLigs = ligs[column] / 10

    for (var i = 0; i < data.length; i += 4) {
        red = data[i + 0];
        green = data[i + 1];
        blue = data[i + 2];
        alpha = data[i + 3];

        // skip transparent/semiTransparent pixels
        if (alpha < 255) {
            continue;
        }

       var hsl = rgbToHsl(red, green, blue);
       var hue = hsl.h * 360;
		
		
		
		var a = 0
		var b = 0
		if(sats[column]<0){
			a = (((100 + newSats) / 100) * hsl.s)
		}else{
			a = (((newSats / 50) * (1 - hsl.s)) + hsl.s)
		}
		
		if(ligs[column]<0){
			b = (((100 + newLigs) / 100) * hsl.l)
		}else{
			b = (((newLigs / 50) * (1 - hsl.l)) + hsl.l)
		}
		
		
		// change blueish pixels to the new color
		
		
		if ( rangeStart < 0 || rangeEnd < 0){
			
			var absStart = Math.abs(rangeStart);
			var absEnd = Math.abs(rangeEnd)
	
	
			if (hue < absStart || hue > absEnd) {
            var newRgb = hslToRgb(hsl.h + newHues, a, b);
            newData[i + 0] = newRgb.r;
            newData[i + 1] = newRgb.g;
            newData[i + 2] = newRgb.b;
            newData[i + 3] = 255;
        }
			
		} else {
			
			if (hue >= rangeStart && hue <= rangeEnd) {
            var newRgb = hslToRgb(hsl.h + newHues, a, b);
            newData[i + 0] = newRgb.r;
            newData[i + 1] = newRgb.g;
            newData[i + 2] = newRgb.b;
            newData[i + 3] = 255;
        }
		
		}

        // change blueish pixels to the new color


    }
	var newDataEdited = new Uint8ClampedArray(newData);
		imgData.data.set(newDataEdited);
	    
    
    
	  ctx2.putImageData(imgData, 0, 0);
	  deCan2.putImageData(imgData, 0, 0);
	  ctx.drawImage(canvas2, 0, 0);
	  deCan3.drawImage(canvas2, 0, 0);
	  
	  convertCanvasToImage(canvas)
	 // document.getElementById("outputImg").src = (convertCanvasToImage(canvas));
	  document.getElementById("pngHolder").innerHTML = "";
	  document.getElementById("pngHolder").appendChild(convertCanvasToImage(canvas));
	
		
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

// Converts canvas to an image
function convertCanvasToImage(canvas) {
	var image = new Image();
	image.src = canvas.toDataURL("image/png");
	return image;
}

