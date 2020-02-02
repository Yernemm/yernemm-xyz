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