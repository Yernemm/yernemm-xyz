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

//--------------------------

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


function okClicked() {
  player = document.getElementById('player');
  $( this ).slideUp();
  player.play(); // Play the empty element to get control
  player.src = '/static/media/sound/ShepardLoop.ogg'; // Set the real audio source
  player.loop = true;
  player.volume = 0.5;
  var timerVar = setInterval(countTimer, 1000);
  player.play();

  vplayer1 = document.getElementById('voiceplayer');
  vplayer1.play(); // Play the empty element to get control
  vplayer1.src = '/static/media/sound/meiLines/' + voiceLines[Math.floor(Math.random()*voiceLines.length)]; // Set the real audio source
  vplayer1.play(); // Play the empty element to get control
  beeper = setInterval(function() { 

    vplayer1.src = '/static/media/sound/meiLines/' + voiceLines[Math.floor(Math.random()*voiceLines.length)];
    vplayer1.play();
   } ,4000);


 

  setTimeout(function() { 

    vplayer2 = document.getElementById('voiceplayer2');
  vplayer2.play(); // Play the empty element to get control
  vplayer2.src = '/static/media/sound/meiLines/' + voiceLines[Math.floor(Math.random()*voiceLines.length)]; // Set the real audio source
  vplayer2.play(); // Play the empty element to get control
  beeper = setInterval(function() { 

    vplayer2.src = '/static/media/sound/meiLines/' + voiceLines[Math.floor(Math.random()*voiceLines.length)];
    vplayer2.play();
   } ,4000);
  },1000);
 



  setTimeout(function() { 

vplayer3 = document.getElementById('voiceplayer3');
vplayer3.play(); // Play the empty element to get control
vplayer3.src = '/static/media/sound/meiLines/' + voiceLines[Math.floor(Math.random()*voiceLines.length)]; // Set the real audio source
vplayer3.play(); // Play the empty element to get control
beeper = setInterval(function() { 

vplayer3.src = '/static/media/sound/meiLines/' + voiceLines[Math.floor(Math.random()*voiceLines.length)];
vplayer3.play();
} ,4000);
},2000);

setTimeout(function() { 

vplayer4 = document.getElementById('voiceplayer4');
vplayer4.play(); // Play the empty element to get control
vplayer4.src = '/static/media/sound/meiLines/' + voiceLines[Math.floor(Math.random()*voiceLines.length)]; // Set the real audio source
vplayer4.play(); // Play the empty element to get control
beeper = setInterval(function() { 

vplayer4.src = '/static/media/sound/meiLines/' + voiceLines[Math.floor(Math.random()*voiceLines.length)];
vplayer4.play();
} ,4000);
},3000);

setTimeout(function() { 

  player2 = document.getElementById('player2');
  player2.play(); // Play the empty element to get control
  player2.src = '/static/media/sound/ShepardLoop.ogg'; // Set the real audio source
  player2.loop = true;
  player2.volume = 0.5;
  player2.play();
},10000);


};