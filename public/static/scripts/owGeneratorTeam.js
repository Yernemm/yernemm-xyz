
//Overwatch Random Hero Generator script
//Copyright Yernemm 2016-2017
//Used for http://yernemm.xyz/projects/overwatch
//Changelog: http://yernemm.xyz/news



//-----------------------------------------------------------------------------------------------
//IMAGE PRELOADER
//The code below loads all hero images on page load to avoid image pop in after animation.
//-----------------------------------------------------------------------------------------------



	var images = new Array()
			function preload() {
				for (i = 0; i < preload.arguments.length; i++) {
					images[i] = new Image()
					images[i].src = preload.arguments[i]
				}
			}
			preload(
				"/static/media/image/Genji.png?version=1",
				"/static/media/image/Mccree.png?version=1",
				"/static/media/image/Pharah.png?version=1",
				"/static/media/image/Reaper.png?version=1",
				"/static/media/image/Soldier76.png?version=1",
				"/static/media/image/Tracer.png?version=1",
				"/static/media/image/Bastion.png?version=1",
				"/static/media/image/Hanzo.png?version=1",
				"/static/media/image/Junkrat.png?version=1",
				"/static/media/image/Mei.png?version=1",
				"/static/media/image/Torbjorn.png?version=1",
				"/static/media/image/Widowmaker.png?version=1",
				"/static/media/image/DVa.png?version=1",
				"/static/media/image/Reinhardt.png?version=1",
				"/static/media/image/Roadhog.png?version=1",
				"/static/media/image/Winston.png?version=1",
				"/static/media/image/Zarya.png?version=1",
				"/static/media/image/Ana.png?version=1",
				"/static/media/image/Lucio.png?version=1",
				"/static/media/image/Mercy.png?version=1",
				"/static/media/image/Symmetra.png?version=1",
				"/static/media/image/Zenyatta.png?version=1",
				"/static/media/image/Sombra.png?version=1",
				"/static/media/image/Orisa.png?version=2",
				"/static/media/image/Doomfist.png?version=1",
                "/static/media/image/Moira.png?version=1",
                "/static/media/image/Brigitte.png?version=1"
			)

//-----------------------------------------------------------------------------------------------

var help = 0;

function Help() {
    if (help === 0) {
        $("#helpText").fadeIn();
        document.getElementById("helpButton").innerHTML = "Less info";
        help = 1;
    } else if (help == 1) {
         $("#helpText").fadeOut();
        document.getElementById("helpButton").innerHTML = "More info";
        help = 0;
    }
}

//-----------------------------------------------------------------------------------------------

//Variable displays all current heroes.
var allHeroes = ["Genji", "McCree", "Pharah", "Reaper", "Soldier: 76", "Tracer", "Bastion", "Hanzo", "Junkrat", "Mei", "Torbjorn", "Widowmaker", "D.Va",
    "Reinhardt", "Roadhog", "Winston", "Zarya", "Ana", "Lucio", "Mercy", "Symmetra", "Zenyatta", "Sombra", "Orisa", "Doomfist", "Moira", "Brigitte"
];

//-----------------------------------------------------------------------------------------------

//SINGLE PLAYER GENERATION.
//-------------------------

//Variables contain all heroes used in the single player generation section

var offenceHeroes = ["Genji", "McCree", "Pharah", "Reaper", "Soldier: 76", "Tracer", "Sombra", "Doomfist"];
var defenceHeroes = ["Bastion", "Hanzo", "Junkrat", "Mei", "Torbjorn", "Widowmaker"];
var tankHeroes = ["D.Va", "Reinhardt", "Roadhog", "Winston", "Zarya", "Orisa"];
var supportHeroes = ["Ana", "Lucio", "Mercy", "Symmetra", "Zenyatta", "Moira", "Brigitte"];
var heaHeroes = ["Ana", "Lucio", "Mercy", "Zenyatta", "Moira", "Brigitte"];
var sniHeroes = ["Ana", "Widowmaker", "Hanzo"];
var buiHeroes = ["Torbjorn", "Symmetra"];
var flaHeroes = ["Genji", "Tracer", "Reaper", "Sombra", "Doomfist"];
var harHeroes = ["D.Va", "Winston"];
var survHeroes = ["D.Va", "Reaper", "Mei", "Roadhog", "Sombra", "Orisa"];
var sheaHeroes = ["Soldier: 76", "Bastion", "Mei", "Roadhog", "Lucio", "Mercy", "Reaper", "Ana", "Moira", "Brigitte"];
var mobiHeroes = ["Genji", "Pharah", "Tracer", "Hanzo", "Junkrat", "Mei", "Widowmaker", "D.Va", "Winston", "Lucio", "Mercy", "Sombra", "Doomfist"];
var speeHeroes = ["Tracer", "Soldier: 76", "Lucio", "Sombra"];

var genjiCounter = ["Mei", "Symmetra", "Zarya", "Winston", "Sombra"];
var mccreeCounter = ["Widowmaker", "Genji", "Ana"];
var pharahCounter = ["Widowmaker", "Soldier: 76", "Roadhog", "McCree", "Ana", "Moira", "Sombra"];
var reaperCounter = ["Lucio", "McCree", "Pharah", "Genji"];
var tracerCounter = ["McCree", "Mei", "Winston", "Moira", "Brigitte"];
var soldierCounter = ["Widowmaker", "Zarya", "McCree", "Reinhardt", "Doomfist", "Moira"];
var bastionCounter = ["Widowmaker", "Ana", "Hanzo", "Junkrat", "Mei", "Pharah", "Reaper", "Tracer"];
var hanzoCounter = ["Tracer", "Widowmaker", "Winston", "Roadhog"];
var junkratCounter = ["Soldier: 76", "Hanzo", "Reaper", "Roadhog"];
var meiCounter = ["Zarya", "Junkrat", "Reaper", "Orisa"];
var torbjornCounter = ["D.Va", "Mei", "Pharah", "Reaper", "Junkrat", "Widowmaker", "Hanzo", "Ana", "Sombra", "Orisa"];
var widowmakerCounter = ["Soldier: 76", "Tracer", "Winston", "Reaper", "Genji"];
var dvaCounter = ["Roadhog", "Zenyatta", "Reaper", "Ana", "Doomfist"];
var reinCounter = ["Roadhog", "Pharah", "Junkrat", "Sombra", "Doomfist", "McCree"];
var zaryaCounter = ["Junkrat", "Pharah", "Widowmaker", "Bastion", "Sombra"];
var roadhogCounter = ["Soldier: 76", "Torbjorn", "Genji", "Reaper", "Ana", "Orisa"];
var anaCounter = ["Genji", "Tracer", "Reaper", "Mei", "Junkrat"];
var lucioCounter = ["McCree", "Pharah", "Soldier: 76", "Zarya", "Sombra"];
var winstonCounter = ["McCree", "Reaper", "Zarya", "Bastion"];
var mercyCounter = ["Genji", "Reaper", "Widowmaker", "Winston", "Tracer", "Bastion", "D.Va", "Moira"];
var symmetraCounter = ["Winston", "Junkrat", "Pharah", "Reaper"];
var zenCounter = ["Soldier: 76", "Tracer", "Zarya", "Reaper"];
var sombCounter = ["Winston", "Widowmaker", "Hanzo"];
var orisaCounter = ["Genji", "Junkrat", "Bastion", "Sombra", "Reaper"];
var doomCounter = ["Sombra", "Orisa", "McCree", "Bastion", "Mei"];
var moiraCounter = ["Reinhardt", "Winston", "Orisa", "Zarya", "McCree"];
var brigitteCounter = ["Sombra", "Pharah", "Reaper", "Junkrat", "McCree"];

//-----------------------------------------------------------------------------------------------

//TEAM COMP GENERATION.
//---------------------

//Heroes for generating a team


//2-2-2 TEAM COMP:
var dpsHeroes = ["Genji", "McCree", "Pharah", "Reaper", "Soldier: 76", "Tracer", "Sombra", "Bastion", "Hanzo", "Junkrat", "Mei", "Torbjorn", "Widowmaker", "Symmetra"];
var mainTankHeroes = ["Reinhardt", "Orisa", "D.Va"];
var offTankHeroes = ["Roadhog", "Winston", "Zarya"];

//-----------------------------------------------------------------------------------------------
//GENERATE RANDOM HERO
var randAllHero = allHeroes[Math.floor(Math.random() * allHeroes.length)];
document.getElementById("hero").innerHTML = randAllHero;
var inputHero;

//-----------------------------------------------------------------------------------------------
//DISPLAY HERO PIC
var hpic;
var picGenji =
    "/static/media/image/Genji.png?version=1";
var picMccree =
    "/static/media/image/Mccree.png?version=1";
var picPharah =
    "/static/media/image/Pharah.png?version=1";
var picReaper =
    "/static/media/image/Reaper.png?version=1";
var picSoldier76 =
    "/static/media/image/Soldier76.png?version=1";
var picTracer =
    "/static/media/image/Tracer.png?version=1";
var picBastion =
    "/static/media/image/Bastion.png?version=1";
var picHanzo =
    "/static/media/image/Hanzo.png?version=1";
var picJunkrat =
    "/static/media/image/Junkrat.png?version=1";
var picMei =
    "/static/media/image/Mei.png?version=1";
var picTorbjorn =
    "/static/media/image/Torbjorn.png?version=1";
var picWidowmaker =
    "/static/media/image/Widowmaker.png?version=1";
var picDva =
    "/static/media/image/DVa.png?version=1";
var picReinhardt =
    "/static/media/image/Reinhardt.png?version=1";
var picRoadhog =
    "/static/media/image/Roadhog.png?version=1";
var picWinston =
    "/static/media/image/Winston.png?version=1";
var picZarya =
    "/static/media/image/Zarya.png?version=1";
var picAna = 
    "/static/media/image/Ana.png?version=1";
var picLucio =
    "/static/media/image/Lucio.png?version=1";
var picMercy =
    "/static/media/image/Mercy.png?version=1";
var picSymmetra =
    "/static/media/image/Symmetra.png?version=1";
var picZenyatta =
    "/static/media/image/Zenyatta.png?version=1";
var picSombra =
	"/static/media/image/Sombra.png?version=1";
var picOrisa =
	"/static/media/image/Orisa.png?version=2";
var picDoomfist =
	"/static/media/image/Doomfist.png?version=1";
var picMoira =
    "/static/media/image/Moira.png?version=1";
var picBrigitte =
    "/static/media/image/Brigitte.png?version=1";

function checkPic(elem, elemPic) {
    if (document.getElementById(elem).innerHTML === "Genji") {
        hpic = picGenji;
    } else if (document.getElementById(elem).innerHTML === "McCree") {
        hpic = picMccree;
    } else if (document.getElementById(elem).innerHTML === "Pharah") {
        hpic = picPharah;
    } else if (document.getElementById(elem).innerHTML === "Reaper") {
        hpic = picReaper;
    } else if (document.getElementById(elem).innerHTML === "Soldier: 76") {
        hpic = picSoldier76;
    } else if (document.getElementById(elem).innerHTML === "Tracer") {
        hpic = picTracer;
    } else if (document.getElementById(elem).innerHTML === "Bastion") {
        hpic = picBastion;
    } else if (document.getElementById(elem).innerHTML === "Hanzo") {
        hpic = picHanzo;
    } else if (document.getElementById(elem).innerHTML === "Junkrat") {
        hpic = picJunkrat;
    } else if (document.getElementById(elem).innerHTML === "Mei") {
        hpic = picMei;
    } else if (document.getElementById(elem).innerHTML === "Torbjorn") {
        hpic = picTorbjorn;
    } else if (document.getElementById(elem).innerHTML === "Widowmaker") {
        hpic = picWidowmaker;
    } else if (document.getElementById(elem).innerHTML === "D.Va") {
        hpic = picDva;
    } else if (document.getElementById(elem).innerHTML === "Reinhardt") {
        hpic = picReinhardt;
    } else if (document.getElementById(elem).innerHTML === "Roadhog") {
        hpic = picRoadhog;
    } else if (document.getElementById(elem).innerHTML === "Winston") {
        hpic = picWinston;
    } else if (document.getElementById(elem).innerHTML === "Zarya") {
        hpic = picZarya;
    } else if (document.getElementById(elem).innerHTML === "Ana") {
        hpic = picAna;
    } else if (document.getElementById(elem).innerHTML === "Lucio") {
        hpic = picLucio;
    } else if (document.getElementById(elem).innerHTML === "Mercy") {
        hpic = picMercy;
    } else if (document.getElementById(elem).innerHTML === "Symmetra") {
        hpic = picSymmetra;
	} else if (document.getElementById(elem).innerHTML === "Sombra") {
        hpic = picSombra;
    } else if (document.getElementById(elem).innerHTML === "Zenyatta") {
        hpic = picZenyatta;
	} else if (document.getElementById(elem).innerHTML === "Orisa") {
        hpic = picOrisa;
	} else if (document.getElementById(elem).innerHTML === "Doomfist") {
        hpic = picDoomfist;
	} else if (document.getElementById(elem).innerHTML === "Moira") {
        hpic = picMoira;
    } else if (document.getElementById(elem).innerHTML === "Brigitte") {
        hpic = picBrigitte;
    }
    document.getElementById(elemPic).src = hpic;
}
checkPic("hero", "heropic");

//-----------------------------------------------------------------------------------------------
//GENERATE HERO BASED ON COUNTER
function Rand() {

			
			document.getElementById("heropic2").src = "";
			document.getElementById("heropic3").src = "";
			document.getElementById("heropic4").src = "";
			document.getElementById("heropic5").src = "";
			document.getElementById("heropic6").src = "";
			document.getElementById("hero2").innerHTML = "";
			document.getElementById("hero3").innerHTML = "";
			document.getElementById("hero4").innerHTML = "";
			document.getElementById("hero5").innerHTML = "";
			document.getElementById("hero6").innerHTML = "";
		$(".hideAnim").animate({height: 'toggle'}, "fast", function(){
			var randHero = inputHero[Math.floor(Math.random() * inputHero.length)];
    document.getElementById("hero").innerHTML = randHero;
    checkPic("hero", "heropic");
		});
		$(".hideAnim").animate({height: 'toggle'}, "fast");
}

//-----------------------------------------------------------------------------------------------
//GENERATE 2-2-2 TEAM COMP
function twoComp(){
	console.log("----===Start of 222 comp generation===----")
	
	var randHeroDps1 = dpsHeroes[Math.floor(Math.random() * dpsHeroes.length)];	
	var randHeroDps2 = dpsHeroes[Math.floor(Math.random() * dpsHeroes.length)];
	var randHeroTankMain = mainTankHeroes[Math.floor(Math.random() * mainTankHeroes.length)];
	var randHeroTankOff = offTankHeroes[Math.floor(Math.random() * offTankHeroes.length)];
	var randHeroHeal1 = heaHeroes[Math.floor(Math.random() * heaHeroes.length)];
	var randHeroHeal2 = heaHeroes[Math.floor(Math.random() * heaHeroes.length)];
	
	console.log(randHeroDps1)
	console.log(randHeroDps2)
	console.log(randHeroTankMain)
	console.log(randHeroTankOff)
	console.log(randHeroHeal1)
	console.log(randHeroHeal2)
	
	while (randHeroDps1 == randHeroDps2) {
		randHeroDps2 = dpsHeroes[Math.floor(Math.random() * dpsHeroes.length)];
		console.log("Retrying Dps2 (same as Dps1)")
		console.log(randHeroDps2)
	}
	
	while (randHeroHeal1 == randHeroHeal2) {
		randHeroHeal2 = heaHeroes[Math.floor(Math.random() * heaHeroes.length)];
		console.log("Retrying Heal2 (same as Heal1)")
		console.log(randHeroHeal2)
	}
	
	
		$(".hideAnim").animate({height: 'toggle'}, "fast", function(){
			
    document.getElementById("hero").innerHTML = randHeroDps1;
    checkPic("hero", "heropic");
		});
		$(".hideAnim").animate({height: 'toggle'}, "fast");
		
				$(".hideAnim").animate({height: 'toggle'}, "fast", function(){
			
    document.getElementById("hero2").innerHTML = randHeroDps2;
    checkPic("hero2", "heropic2");
		});
		$(".hideAnim").animate({height: 'toggle'}, "fast");
		
				$(".hideAnim").animate({height: 'toggle'}, "fast", function(){
			
    document.getElementById("hero3").innerHTML = randHeroTankMain;
    checkPic("hero3", "heropic3");
		});
		$(".hideAnim").animate({height: 'toggle'}, "fast");
		
				$(".hideAnim").animate({height: 'toggle'}, "fast", function(){

    document.getElementById("hero4").innerHTML = randHeroTankOff;
    checkPic("hero4", "heropic4");
		});
		$(".hideAnim").animate({height: 'toggle'}, "fast");
		
				$(".hideAnim").animate({height: 'toggle'}, "fast", function(){

    document.getElementById("hero5").innerHTML = randHeroHeal1;
    checkPic("hero5", "heropic5");
		});
		$(".hideAnim").animate({height: 'toggle'}, "fast");
		
				$(".hideAnim").animate({height: 'toggle'}, "fast", function(){
			
    document.getElementById("hero6").innerHTML = randHeroHeal2;
    checkPic("hero6", "heropic6");
		});
		$(".hideAnim").animate({height: 'toggle'}, "fast");
			console.log("----===End of 222 comp generation===----")
}

//-----------------------------------------------------------------------------------------------
//GENERATION BASED ON CONDITIONS
//The code used for this is outdated. A more efficient code is used for hero counters.

function allRand() {

    inputHero = allHeroes;
    Rand();
}

function offenceRand() {
    inputHero = offenceHeroes;
    Rand();
}

function defenceRand() {
    inputHero = defenceHeroes;
    Rand();
}

function tankRand() {
    inputHero = tankHeroes;
    Rand();
}

function supportRand() {
    inputHero = supportHeroes;
    Rand();
}

function heaRand() {
    inputHero = heaHeroes;
    Rand();
}

function sniRand() {
    inputHero = sniHeroes;
    Rand();
}

function buiRand() {
    inputHero = buiHeroes;
    Rand();
}

function flaRand() {
    inputHero = flaHeroes;
    Rand();
}

function harRand() {
    inputHero = harHeroes;
    Rand();
}

function survRand() {
    inputHero = survHeroes;
    Rand();
}

function sheaRand() {
    inputHero = sheaHeroes;
    Rand();
}

function mobiRand() {
    inputHero = mobiHeroes;
    Rand();
}

function speeRand() {
    inputHero = speeHeroes;
    Rand();
}