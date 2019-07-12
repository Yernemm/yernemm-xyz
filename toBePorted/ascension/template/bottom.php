<p id="blink"><span style="text-align:left;font-family:Courier New,Courier,monospace">&gt;_</span></p>
<script>
setInterval(blink, 1000)
var b = true;
function blink(){
if(b){
	document.getElementById("blink").innerHTML = "&gt;";
	b = false;
}else{
document.getElementById("blink").innerHTML = "&gt;_";
	b = true;	
}
}
</script>