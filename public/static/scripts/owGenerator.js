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
var allHeroes = ["Genji", "McCree", "Pharah", "Reaper", "Soldier: 76", "Tracer", "Bastion", "Hanzo", "Junkrat", "Mei", "Torbjorn", "Widowmaker", "D.Va",
    "Reinhardt", "Roadhog", "Winston", "Zarya", "Ana", "Lucio", "Mercy", "Symmetra", "Zenyatta", "Sombra", "Orisa"
];
var offenceHeroes = ["Genji", "McCree", "Pharah", "Reaper", "Soldier: 76", "Tracer", "Sombra"];
var defenceHeroes = ["Bastion", "Hanzo", "Junkrat", "Mei", "Torbjorn", "Widowmaker"];
var tankHeroes = ["D.Va", "Reinhardt", "Roadhog", "Winston", "Zarya", "Orisa"];
var supportHeroes = ["Ana", "Lucio", "Mercy", "Symmetra", "Zenyatta"];
var heaHeroes = ["Ana", "Lucio", "Mercy", "Zenyatta"];
var sniHeroes = ["Ana", "Widowmaker", "Hanzo"];
var buiHeroes = ["Torbjorn", "Symmetra"];
var flaHeroes = ["Genji", "Tracer", "Reaper", "Sombra"];
var harHeroes = ["D.Va", "Winston"];
var survHeroes = ["D.Va", "Reaper", "Mei", "Roadhog", "Sombra", "Orisa"];
var sheaHeroes = ["Soldier: 76", "Bastion", "Mei", "Roadhog", "Lucio", "Mercy", "Reaper", "Ana"];
var mobiHeroes = ["Genji", "Pharah", "Tracer", "Hanzo", "Junkrat", "Mei", "Widowmaker", "D.Va", "Winston", "Lucio", "Mercy", "Sombra"];
var speeHeroes = ["Tracer", "Soldier: 76", "Lucio", "Sombra"];
var genjiCounter = ["Mei", "Symmetra", "Zarya", "Winston", "Sombra"];
var mccreeCounter = ["Widowmaker", "Genji", "Reinhardt", "Ana"];
var pharahCounter = ["Widowmaker", "Soldier: 76", "Roadhog", "McCree", "Ana"];
var reaperCounter = ["Lucio", "McCree", "Pharah", "Genji"];
var tracerCounter = ["McCree", "Mei", "Winston"];
var soldierCounter = ["Widowmaker", "Zarya", "McCree", "Reinhardt"];
var bastionCounter = ["Widowmaker", "Ana", "Hanzo", "Junkrat", "Mei", "Pharah", "Reaper", "Tracer"];
var hanzoCounter = ["Tracer", "Widowmaker", "Winston", "Roadhog"];
var junkratCounter = ["Soldier: 76", "Hanzo", "Reaper", "Roadhog"];
var meiCounter = ["Zarya", "Junkrat", "Reaper", "Orisa"];
var torbjornCounter = ["D.Va", "Mei", "Pharah", "Reaper", "Junkrat", "Widowmaker", "Hanzo", "Ana", "Sombra", "Orisa"];
var widowmakerCounter = ["Soldier: 76", "Tracer", "Winston", "Reaper", "Genji"];
var dvaCounter = ["Roadhog", "Zenyatta", "Reaper", "Ana"];
var reinCounter = ["Roadhog", "Pharah", "Junkrat", "Sombra"];
var zaryaCounter = ["Junkrat", "Pharah", "Widowmaker", "Bastion", "Sombra"];
var roadhogCounter = ["Soldier: 76", "Torbjorn", "Genji", "Reaper", "Ana", "Orisa"];
var anaCounter = ["Genji", "Tracer", "Reaper", "Mei", "Junkrat"];
var lucioCounter = ["McCree", "Pharah", "Soldier: 76", "Zarya", "Sombra"];
var winstonCounter = ["McCree", "Reaper", "Zarya", "Bastion"];
var mercyCounter = ["Genji", "Reaper", "Widowmaker", "Winston", "Tracer", "Bastion", "D.Va"];
var symmetraCounter = ["Winston", "Junkrat", "Pharah", "Reaper"];
var zenCounter = ["Soldier: 76", "Tracer", "Zarya", "Reaper"];
var sombCounter = ["Winston", "Widowmaker", "Hanzo"];
var orisaCounter = ["Genji", "Junkrat", "Bastion", "Sombra", "Reaper"];
var randAllHero = allHeroes[Math.floor(Math.random() * allHeroes.length)];
document.getElementById("hero").innerHTML = randAllHero;
var inputHero;
var hpic;
var picGenji =
    "/media/image/Genji.png";
var picMccree =
    "/media/image/Mccree.png";
var picPharah =
    "/media/image/Pharah.png";
var picReaper =
    "/media/image/Reaper.png";
var picSoldier76 =
    "/media/image/Soldier76.png";
var picTracer =
    "/media/image/Tracer.png";
var picBastion =
    "/media/image/Bastion.png";
var picHanzo =
    "/media/image/Hanzo.png";
var picJunkrat =
    "/media/image/Junkrat.png";
var picMei =
    "/media/image/Mei.png";
var picTorbjorn =
    "/media/image/Torbjorn.png";
var picWidowmaker =
    "/media/image/Widowmaker.png";
var picDva =
    "/media/image/DVa.png";
var picReinhardt =
    "/media/image/Reinhardt.png";
var picRoadhog =
    "/media/image/Roadhog.png";
var picWinston =
    "/media/image/Winston.png";
var picZarya =
    "/media/image/Zarya.png";
var picAna = 
    "/media/image/Ana.png";
var picLucio =
    "/media/image/Lucio.png";
var picMercy =
    "/media/image/Mercy.png";
var picSymmetra =
    "/media/image/Symmetra.png";
var picZenyatta =
    "/media/image/Zenyatta.png";
var picSombra =
	"/media/image/Sombra.png";
var picOrisa =
	"/media/image/Orisa.png?version=3";

function checkPic() {
    if (document.getElementById("hero").innerHTML === "Genji") {
        hpic = picGenji;
    } else if (document.getElementById("hero").innerHTML === "McCree") {
        hpic = picMccree;
    } else if (document.getElementById("hero").innerHTML === "Pharah") {
        hpic = picPharah;
    } else if (document.getElementById("hero").innerHTML === "Reaper") {
        hpic = picReaper;
    } else if (document.getElementById("hero").innerHTML === "Soldier: 76") {
        hpic = picSoldier76;
    } else if (document.getElementById("hero").innerHTML === "Tracer") {
        hpic = picTracer;
    } else if (document.getElementById("hero").innerHTML === "Bastion") {
        hpic = picBastion;
    } else if (document.getElementById("hero").innerHTML === "Hanzo") {
        hpic = picHanzo;
    } else if (document.getElementById("hero").innerHTML === "Junkrat") {
        hpic = picJunkrat;
    } else if (document.getElementById("hero").innerHTML === "Mei") {
        hpic = picMei;
    } else if (document.getElementById("hero").innerHTML === "Torbjorn") {
        hpic = picTorbjorn;
    } else if (document.getElementById("hero").innerHTML === "Widowmaker") {
        hpic = picWidowmaker;
    } else if (document.getElementById("hero").innerHTML === "D.Va") {
        hpic = picDva;
    } else if (document.getElementById("hero").innerHTML === "Reinhardt") {
        hpic = picReinhardt;
    } else if (document.getElementById("hero").innerHTML === "Roadhog") {
        hpic = picRoadhog;
    } else if (document.getElementById("hero").innerHTML === "Winston") {
        hpic = picWinston;
    } else if (document.getElementById("hero").innerHTML === "Zarya") {
        hpic = picZarya;
    } else if (document.getElementById("hero").innerHTML === "Ana") {
        hpic = picAna;
    } else if (document.getElementById("hero").innerHTML === "Lucio") {
        hpic = picLucio;
    } else if (document.getElementById("hero").innerHTML === "Mercy") {
        hpic = picMercy;
    } else if (document.getElementById("hero").innerHTML === "Symmetra") {
        hpic = picSymmetra;
	} else if (document.getElementById("hero").innerHTML === "Sombra") {
        hpic = picSombra;
    } else if (document.getElementById("hero").innerHTML === "Zenyatta") {
        hpic = picZenyatta;
	} else if (document.getElementById("hero").innerHTML === "Orisa") {
        hpic = picOrisa;
    }
    document.getElementById("heropic").src = hpic;
}
checkPic();

function Rand() {

		$(".hideAnim").animate({height: 'toggle'}, "fast", function(){
			var randHero = inputHero[Math.floor(Math.random() * inputHero.length)];
    document.getElementById("hero").innerHTML = randHero;
    checkPic();
		});
		$(".hideAnim").animate({height: 'toggle'}, "fast");
}

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