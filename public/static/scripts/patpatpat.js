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




  
//var timerVar = setInterval(countTimer, 1000);
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
  player.src = 'http://yernemm.xyz/media/sound/MeiPatPatPat.mp3'; // Set the real audio source
  var timerVar = setInterval(countTimer, 1000);
  beeper = setInterval(function() { player.play(); } ,0);
});
