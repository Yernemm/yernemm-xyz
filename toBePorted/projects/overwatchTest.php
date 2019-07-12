<!DOCTYPE html>
<html lang="en">
  <head>
	        <?php include($_SERVER['DOCUMENT_ROOT'].'/templates/head.php') ?>
			  <meta name="keywords" content="JavaScript,Overwatch,Random Hero,Random Hero Generator,Team Comp,Team Composition,free,online,Genji, McCree, Pharah, Reaper, Soldier: 76, Tracer, Bastion, Hanzo, Junkrat, Mei, Torbjorn, Widowmaker, D.Va, Reinhardt, Roadhog, Winston, Zarya, Ana, Lucio, Mercy, Symmetra, Zenyatta, Sombra, Orisa">
			  		
<meta name="description" content="Generate Overwatch Heroes. Either randomly, or based on counters, roles, team comps, and more!" />					
						
						<style>
						
						@font-face {
							font-family: bigNoodleTitling;
							src: url('/media/fonts/big_noodle_titling_oblique.ttf');
							
						}
						
						.font {
    font-family: bigNoodleTitling;
	font-size: 150%;
}
			.buttonOw {
display: inline-block;
  padding: 5px 10px;
  font-size: 25px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color:  #FF6600;
  border: none;
  border-radius: 2px;
  box-shadow: 0 9px #999;
  width:100%;
  font-family: bigNoodleTitling;

				
			}
			
			.buttonOw:hover {background-color:  #fe5320}

.buttonOw:active {
  background-color: #ee3300;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

			</style>

	<script>

	$(document).ready(function(){
	$("#helpText").hide();

	        document.getElementById("helpText").innerHTML =

            "This site will choose which Overwatch hero you should play. This will happen either randomly, or based on certain conditions which you can choose. You can also now select a character from the counters section to receive a random hero which counters the one that you selected. </p> <p> The main purpose of the hero generator is for displaying which heroes are good for certain situations, and for randomly choosing the hero for you. Even though it is always best to pick the hero you are good with yourself, it's sometimes more interesting to generate a random hero and only play as them in quickplay. Blizzard even made a weekly brawl based on this very idea before. It's fun to challenge yourself to try your best, even when the hero you play as is not good for the specific situation. However, if you do want to still be useful to your team with the random hero generator, then there are options that will generate the hero with certain conditions. However, you should remember that   this tool is intended for quickplay, custom games, or the arcade only. DO NOT USE THIS FOR COMPETITIVE! ";
	});</script>
  </head>
  

  <body bgcolor="#00aaff" background="/backgrounds/owback.jpg?version=2">
    <?php include($_SERVER['DOCUMENT_ROOT'].'/templates/navp.php') ?>


    <div class="container" >



      <div class="Home font">

      <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

<!-- Automatic -->

<ins class="adsbygoogle"

     style="display:block"

     data-ad-client="ca-pub-2219001427204097"

     data-ad-slot="2452749368"

     data-ad-format="auto"></ins>

<script>

(adsbygoogle = window.adsbygoogle || []).push({});

</script>

        <h1>Overwatch Hero Generator</h1>


<a class="buttonOw" onclick="Help()" id="helpButton">More info</a>
&nbsp;
&nbsp;
<p id="helpText"></p>

<h1><u>The Random Overwatch Hero Generator is now available for Android on Google Play!</u></h1>
<p>Free version (with ads): <a href='https://play.google.com/store/apps/details?id=xyz.yernemm.overwatchherogenerator.free&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img style="width:300px" alt='Get it on Google Play' src='https://play.google.com/intl/en_gb/badges/images/generic/en_badge_web_generic.png'/></a></p>
<p>Paid version (without ads): <a href='https://play.google.com/store/apps/details?id=xyz.yernemm.overwatchherogenerator.paid&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img style="width:300px" alt='Get it on Google Play' src='https://play.google.com/intl/en_gb/badges/images/generic/en_badge_web_generic.png'/></a></p>


<table style="font-size:300%;">
<tr>



<tr>
<th>Play: </th>
<th style="height:140px"><p   id="hero" align="middle"  class="hideAnim" style="position:relative;">ERROR, JAVASCRIPT NOT WORKING</p></th>
<th style="height:140px"><p   id="hero2" align="middle"  class="hideAnim" style="position:relative;"></p></th>
<th style="height:140px"><p   id="hero3" align="middle"  class="hideAnim" style="position:relative;"></p></th>
<th style="height:140px"><p   id="hero4" align="middle"  class="hideAnim" style="position:relative;"></p></th>
<th style="height:140px"><p   id="hero5" align="middle"  class="hideAnim" style="position:relative;"></p></th>
<th style="height:140px"><p   id="hero6" align="middle"  class="hideAnim" style="position:relative;"></p></th>
</tr>
<tr>
<td></td>
<td height="500" width="400" align="middle" style="height:400px"><img id="heropic" class="hideAnim" style="position:relative;"></td>
<td height="500" width="400" align="middle" style="height:400px"><img id="heropic2" class="hideAnim" style="position:relative;"></td>
<td height="500" width="400" align="middle" style="height:400px"><img id="heropic3" class="hideAnim" style="position:relative;"></td>
<td height="500" width="400" align="middle" style="height:400px"><img id="heropic4" class="hideAnim" style="position:relative;"></td>
<td height="500" width="400" align="middle" style="height:400px"><img id="heropic5" class="hideAnim" style="position:relative;"></td>
<td height="500" width="400" align="middle" style="height:400px"><img id="heropic6" class="hideAnim" style="position:relative;"></td>
</tr>
</table>



&nbsp;


<table>
<tr>
<th><h2>SINGE PLAYER GENERATION</h2></th>
<th><h2>TEAM COMP GENERATION</h2></th>
</tr>
<tr>
<td>
<table>
<tr>
<td>
<th>Generate</th></td>
</tr>
<tr>
<th>Random: </th>
<td>
<a class="buttonOw" onclick="allRand()" >Random</a>
</td>
</tr>
<tr>
<th>By class: </th>
<td>
<a class="buttonOw" onclick="offenceRand()" >Offence</a>
</td>
<td>
<a class="buttonOw" onclick="defenceRand()" >Defence</a>
</td>
<td>
<a class="buttonOw" onclick="tankRand()" >Tank</a>
</td>
<td>
<a class="buttonOw" onclick="supportRand()" >Support</a>
</td>
</tr>
<tr>
<th>By role:</th>
<td>
<a class="buttonOw" onclick="heaRand()" >Healer</a>
</td>
<td>
<a class="buttonOw" onclick="sniRand()" >Sniper</a>
</td>
<td>
<a class="buttonOw" onclick="buiRand()" >Builder</a>
</td>
<td>
<a class="buttonOw" onclick="flaRand()" >Pick/Assassin Flanker</a>
</td>
<td>
<a class="buttonOw" onclick="harRand()" >Harasser Flanker</a>
</td>
</tr>
<tr>
<th>By strengths/abilities:</th>
<td>
<a class="buttonOw" onclick="survRand()" >High Survivability</a>
</td>
<td>
<a class="buttonOw" onclick="sheaRand()" >Self-Heal/Regen</a>
</td>
<td>
<a class="buttonOw" onclick="mobiRand()" >High Mobility</a>
</td>
<td>
<a class="buttonOw" onclick="speeRand()" >High speed</a>
</td>
<td>
<tr><th>-----------</th></tr>
<tr><th>By counter:</th></tr>
<tr><th>Counter Offence:</th>
<td>
<a class="buttonOw" onclick="inputHero = genjiCounter
Rand()" >Genji</a>
</td>
<td>
<a class="buttonOw" onclick="inputHero = mccreeCounter
Rand()" >McCree</a>
</td>
<td><a class="buttonOw" onclick="inputHero = pharahCounter
Rand()" >Pharah</a></td>
<td><a class="buttonOw" onclick="inputHero = reaperCounter
Rand()" >Reaper</a></td>
<td><a class="buttonOw" onclick="inputHero = soldierCounter
Rand()" >Soldier: 76</a></td>
<td><a class="buttonOw" onclick="inputHero = tracerCounter
Rand()" >Tracer</a></td>
<td><a class="buttonOw" onclick="inputHero = sombCounter
Rand()" >Sombra</a></td>
<td><a class="buttonOw" onclick="inputHero = doomCounter
Rand()" >Doomfist</a></td>
</tr>
<tr><th>Counter Defence:</th>
<td><a class="buttonOw" onclick="inputHero = bastionCounter
Rand()" >Bastion</a></td>
<td><a class="buttonOw" onclick="inputHero = hanzoCounter
Rand()" >Hanzo</a></td>
<td><a class="buttonOw" onclick="inputHero = junkratCounter
Rand()" >Junkrat</a></td>
<td><a class="buttonOw" onclick="inputHero = meiCounter
Rand()" >Mei</a></td>
<td><a class="buttonOw" onclick="inputHero = torbjornCounter
Rand()" >Torbjorn</a></td>
<td><a class="buttonOw" onclick="inputHero = widowmakerCounter
Rand()" >Widowmaker</a></td>
</tr>
<tr><th>Counter Tank:</th>
<td><a class="buttonOw" onclick="inputHero = winstonCounter
Rand()" >Winston</a></td>
<td><a class="buttonOw" onclick="inputHero = dvaCounter
Rand()" >D.Va</a></td>
<td><a class="buttonOw" onclick="inputHero = reinCounter
Rand()" >Reinhardt</a></td>
<td><a class="buttonOw" onclick="inputHero = zaryaCounter
Rand()" >Zarya</a></td>
<td><a class="buttonOw" onclick="inputHero = roadhogCounter
Rand()" >Roadhog</a></td>
<td><a class="buttonOw" onclick="inputHero = orisaCounter
Rand()" >Orisa</a></td>
</tr>
<tr><th>Counter Support:</th>
<td><a class="buttonOw" onclick="inputHero = anaCounter
Rand()" >Ana</a></td>
<td><a class="buttonOw" onclick="inputHero = lucioCounter
Rand()" >Lucio</a></td>
<td><a class="buttonOw" onclick="inputHero = mercyCounter
Rand()" >Mercy</a></td>
<td><a class="buttonOw" onclick="inputHero = symmetraCounter
Rand()" >Symmetra</a></td>
<td><a class="buttonOw" onclick="inputHero = zenCounter
Rand()" >Zenyatta</a></td>

</tr>

</table>
</td>
<td>
<a class="buttonOw" onclick="twoComp()">Generate 2/2/2 team comp</a>
</td>
</table>

&nbsp;

&nbsp;

&nbsp;

<p>By Yernemm  -  <a type="button" class="btn btn-sm btn-primary" style="font-size:20px;"  href="https://www.reddit.com/user/Yernemm/">Reddit</a>  -  <a type="button" style="font-size:20px;" class="btn btn-sm btn-primary" href="https://www.youtube.com/channel/UCfOGXFJdLqnhfENzTCC9IjA">YouTube</a></p>





                 			<!------------------- SCRIPT HERE ---------------->



<script type="text/javascript" src="/scripts/owGeneratorTeamTest.js?version=26"></script>





							<!------------------------------------------------>

&nbsp;



<a type="button" class="btn btn-info" href="/" style="font-size:20px;">BACK TO HOME PAGE</a>

<p> You can leave feedback by leaving a comment below or clicking the blue face icon in the bottom-right.</p>

<hr>

		<?php include($_SERVER['DOCUMENT_ROOT'].'/templates/tweet.php') ?>
				<hr>
				<h3><u>Leave a comment or suggestion below!</u></h3>
				        <?php include($_SERVER['DOCUMENT_ROOT'].'/templates/disqus.php') ?>
						<hr>




			<div>

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

<!-- Automatic -->

<ins class="adsbygoogle"

     style="display:block"

     data-ad-client="ca-pub-2219001427204097"

     data-ad-slot="2452749368"

     data-ad-format="auto"></ins>

<script>

(adsbygoogle = window.adsbygoogle || []).push({});

</script>

</div>

      </div>



    </div><!-- /.container -->





    <!-- Bootstrap core JavaScript

    ================================================== -->

    <!-- Placed at the end of the document so the pages load faster -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

    <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery.min.js"><\/script>')</script>

    <script src="/bootstrap/js/bootstrap.min.js"></script>

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->

    <script src="bootstrap/js/ie10-viewport-bug-workaround.js"></script>

  </body>
        <?php include($_SERVER['DOCUMENT_ROOT'].'/templates/foot.php') ?>
</html>

