<html>
<head>

<!--<script src="https://widget.battleforthenet.com/widget.js" async></script>-->


<?php include($_SERVER['DOCUMENT_ROOT'].'/templates/hotjar.php') ?>
    	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
	<script src="/scripts/footer.js"></script>
<script>
  (adsbygoogle = window.adsbygoogle || []).push({
    google_ad_client: "ca-pub-2219001427204097",
    enable_page_level_ads: true
  });
</script>

	 <script>
	 
function handleOutboundLinkClicks(event) {
  ga('send', 'event', {
    eventCategory: 'Outbound Link',
    eventAction: 'click',
    eventLabel: event.target.href
  });
}

</script>

<!--<script src="https://widget.battleforthenet.com/widget.js" async></script>-->
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <meta name="description" content="">
        <meta name="author" content="Yernemm - PatPatPat">
        <link rel="icon" href="/favicon.ico?v=3">
        <title>Yernemm - Winter Experience</title>
        <!-- Bootstrap core CSS -->
        
        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

	
	<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-87387417-1', 'auto');
  ga('send', 'pageview');

</script>




	<!-- Cookie Policy Banner -->
	
<link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.css" />
<script src="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.js"></script>
<script>
window.addEventListener("load", function(){
window.cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "#000",
      "text": "#0f0"
    },
    "button": {
      "background": "#0f0"
    }
  },
  "theme": "classic",
  "content": {
    "message": "This website uses cookies to ensure you get the best experience on our website. By using this website, you agree to our cookies policy and our privacy policy.",
    "href": "http://yernemm.xyz/cookiesPolicy"
  }
})});
</script>
<script type="text/javascript">
if (typeof jQuery != 'undefined') {
  jQuery(document).ready(function($) {
    var filetypes = /\.(zip|exe|dmg|pdf|doc.*|xls.*|ppt.*|mp3|txt|rar|wma|mov|avi|wmv|flv|wav)$/i;
    var baseHref = '';
    if (jQuery('base').attr('href') != undefined) baseHref = jQuery('base').attr('href');

    jQuery('a').on('click', function(event) {
      var el = jQuery(this);
      var track = true;
      var href = (typeof(el.attr('href')) != 'undefined' ) ? el.attr('href') :"";
      var isThisDomain = href.match(document.domain.split('.').reverse()[1] + '.' + document.domain.split('.').reverse()[0]);
      if (!href.match(/^javascript:/i)) {
    	var elEv = []; elEv.value=0, elEv.non_i=false;
        if (href.match(/^mailto\:/i)) {
          elEv.category = "email";
          elEv.action = "click";
          elEv.label = href.replace(/^mailto\:/i, '');
          elEv.loc = href;
        }
        else if (href.match(filetypes)) {
          var extension = (/[.]/.exec(href)) ? /[^.]+$/.exec(href) : undefined;
          elEv.category = "download";
          elEv.action = "click-" + extension[0];
          elEv.label = href.replace(/ /g,"-");
          elEv.loc = baseHref + href;
        }
        else if (href.match(/^https?\:/i) && !isThisDomain) {
          elEv.category = "external";
          elEv.action = "click";
          elEv.label = href.replace(/^https?\:\/\//i, '');
          elEv.non_i = true;
          elEv.loc = href;
        }
        else if (href.match(/^tel\:/i)) {
          elEv.category = "telephone";
          elEv.action = "click";
          elEv.label = href.replace(/^tel\:/i, '');
          elEv.loc = href;
        }
        else track = false;

       	if (track) {
          ga('send', 'event', elEv.category.toLowerCase(), elEv.action.toLowerCase(), elEv.label.toLowerCase(), elEv.value, elEv.non_i);
          if ( el.attr('target') == undefined || el.attr('target').toLowerCase() != '_blank') {
            setTimeout(function() { location.href = elEv.loc; }, 400);
            return false;
	  }
	}
      }
    });
  });
}
</script>

<!---------------------------->
    
</head>

<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-red.css">
<body class="w3-theme-d5">
<div class="w3-container">
<div class="w3-center">
<?php include($_SERVER['DOCUMENT_ROOT'].'/templates/ad.php') ?>
</div>
</div>

<div class="w3-container w3-row w3-theme-d3 w3-center">
<div class="w3-col m4">
<div class="w3-row">
<div class="w3-col s4">
<a  href="https://yernemm.xyz/">
<img src="\media\image\snowballAnim.gif" style="max-width: 50px; height: auto;"></img>
</a>
</div>
<div class="w3-col s8">
<p>Made by Yernemm.</p>
</div>
</div>
</div>

<div class="w3-col m4"><p>
 <a href="https://yernemm.xyz/">Click here to go back to the main page.</a></p>
</div>

<div class="w3-col m4">
 <p><a href="https://yernemm.xyz/projects/">Click here to view all other projects.</a></p>
</div>

</div>

<div class="w3-container w3-row w3-theme-d4">
<!--<audio id="patsound" autoplay=true loop=true style="display:none;" src="https://yernemm.xyz/media/sound/MeiPatPatPat.mp3"></audio>-->
<div class="w3-display-container">
<div class="w3-center">
<audio id="player"></audio>
<audio id="player2"></audio>
<audio id="voiceplayer"></audio>
<audio id="voiceplayer2"></audio>
<audio id="voiceplayer3"></audio>
<audio id="voiceplayer4"></audio>
<button id="ok" class="w3-button w3-blue w3-hover-aqua">Click here to start the Winter Mei Experience!</button>
<h1><u>Mei's Winter Experience</u></h1>
<h1>You have been experiencing for...</h1>
<h2>
<span id="timer">0 Hours, 0 Minutes, 0 Seconds.</span>
</h2>
<img style="max-width: 100%; height: auto;" src="https://i.imgur.com/1bfvgnK.png" class="w3-round"></img>
<?php include($_SERVER['DOCUMENT_ROOT'].'/templates/ad.php') ?>
</div>
</div>
</div>

<div class="w3-container w3-row w3-theme-d5">
<div class="w3-col m1">
<p></p>
</div>
<div class="w3-col m10 w3-center w3-text-theme">
<p>Using modern web browser (Chrome, Firefox) on desktop is recommended. This page might have issues on mobile and on web browsers which do not support JavaScript. This page uses JavaScript and jQuery to make sounds (hopefully) work on mobile. The style uses W3.CSS.</p>
</div>
<script>

var voiceLines = [
  "alldown.ogg",
  "catchyeti.ogg",
  "caughthim.ogg",
  "chugga.ogg",
  "comeout.ogg",
  "comeout2.ogg",
  "dobetter.ogg",
  "findyou.ogg",
  "gonnacatch.ogg",
  "gonnagetyou.ogg",
  "hefell.ogg",
  "hidefromus.ogg",
  "icesculpture.ogg",
  "laugh1.ogg",
  "laugh2.ogg",
  "laugh3.ogg",
  "letitgo.ogg",
  "lovesurprises.ogg",
  "nicetry.ogg",
  "notgoinganywhere.ogg",
  "ohyeah.ogg",
  "okay.ogg",
  "okgang.ogg",
  "rock.ogg",
  "surprisemyself.ogg",
  "takethis.ogg",
  "underestimate.ogg",
  "weeyeah.ogg",
  "whereyou.ogg",
  "wonthurt.ogg",
  "yay.ogg",
  "yetipopsicle.ogg"
];


//var timerVar ++= setInterval(countTimer, 1000);
var totalSeconds = 0;
function countTimer() {
   ++totalSeconds;
   var hour = Math.floor(totalSeconds /3600);
   var minute = Math.floor((totalSeconds - hour*3600)/60);
   var seconds = totalSeconds - (hour*3600 + minute*60);

   document.getElementById("timer").innerHTML = hour + " Hours, " + minute + " Minutes, " + seconds + " Seconds.";
}


$("#ok").click(function() {
  player = document.getElementById('player');
  $( this ).slideUp();
  player.play(); // Play the empty element to get control
  player.src = '/media/sound/ShepardLoop.ogg'; // Set the real audio source
  player.loop = true;
  player.volume = 0.5;
  var timerVar = setInterval(countTimer, 1000);
  player.play();

  vplayer1 = document.getElementById('voiceplayer');
  vplayer1.play(); // Play the empty element to get control
  vplayer1.src = '/media/sound/meiLines/' + voiceLines[Math.floor(Math.random()*voiceLines.length)]; // Set the real audio source
  vplayer1.play(); // Play the empty element to get control
  beeper = setInterval(function() { 

    vplayer1.src = '/media/sound/meiLines/' + voiceLines[Math.floor(Math.random()*voiceLines.length)];
    vplayer1.play();
   } ,4000);


 

  setTimeout(function() { 

    vplayer2 = document.getElementById('voiceplayer2');
  vplayer2.play(); // Play the empty element to get control
  vplayer2.src = '/media/sound/meiLines/' + voiceLines[Math.floor(Math.random()*voiceLines.length)]; // Set the real audio source
  vplayer2.play(); // Play the empty element to get control
  beeper = setInterval(function() { 

    vplayer2.src = '/media/sound/meiLines/' + voiceLines[Math.floor(Math.random()*voiceLines.length)];
    vplayer2.play();
   } ,4000);
  },1000);
 



  setTimeout(function() { 

vplayer3 = document.getElementById('voiceplayer3');
vplayer3.play(); // Play the empty element to get control
vplayer3.src = '/media/sound/meiLines/' + voiceLines[Math.floor(Math.random()*voiceLines.length)]; // Set the real audio source
vplayer3.play(); // Play the empty element to get control
beeper = setInterval(function() { 

vplayer3.src = '/media/sound/meiLines/' + voiceLines[Math.floor(Math.random()*voiceLines.length)];
vplayer3.play();
} ,4000);
},2000);

setTimeout(function() { 

vplayer4 = document.getElementById('voiceplayer4');
vplayer4.play(); // Play the empty element to get control
vplayer4.src = '/media/sound/meiLines/' + voiceLines[Math.floor(Math.random()*voiceLines.length)]; // Set the real audio source
vplayer4.play(); // Play the empty element to get control
beeper = setInterval(function() { 

vplayer4.src = '/media/sound/meiLines/' + voiceLines[Math.floor(Math.random()*voiceLines.length)];
vplayer4.play();
} ,4000);
},3000);

setTimeout(function() { 

  player2 = document.getElementById('player2');
  player2.play(); // Play the empty element to get control
  player2.src = '/media/sound/ShepardLoop.ogg'; // Set the real audio source
  player2.loop = true;
  player2.volume = 0.5;
  player2.play();
},10000);


});

</script>


</body>

</html>