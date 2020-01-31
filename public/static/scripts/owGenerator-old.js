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
    "Reinhardt", "Roadhog", "Winston", "Zarya", "Ana", "Lucio", "Mercy", "Symmetra", "Zenyatta", "Sombra"
];
var offenceHeroes = ["Genji", "McCree", "Pharah", "Reaper", "Soldier: 76", "Tracer", "Sombra"];
var defenceHeroes = ["Bastion", "Hanzo", "Junkrat", "Mei", "Torbjorn", "Widowmaker"];
var tankHeroes = ["D.Va", "Reinhardt", "Roadhog", "Winston", "Zarya"];
var supportHeroes = ["Ana", "Lucio", "Mercy", "Symmetra", "Zenyatta"];
var heaHeroes = ["Ana", "Lucio", "Mercy", "Zenyatta"];
var sniHeroes = ["Ana", "Widowmaker", "Hanzo"];
var buiHeroes = ["Torbjorn", "Symmetra"];
var flaHeroes = ["Genji", "Tracer", "Reaper", "Sombra"];
var harHeroes = ["D.Va", "Winston"];
var survHeroes = ["D.Va", "Reaper", "Mei", "Roadhog", "Sombra"];
var sheaHeroes = ["Soldier: 76", "Bastion", "Mei", "Roadhog", "Lucio", "Mercy", "Reaper", "Ana"];
var mobiHeroes = ["Genji", "Pharah", "Tracer", "Hanzo", "Junkrat", "Mei", "Widowmaker", "D.Va", "Winston", "Lucio", "Mercy", "Sombra"];
var speeHeroes = ["Tracer", "Soldier: 76", "Lucio", "Sombra"];
var genjiCounter = ["Mei", "Symmetra", "Zarya", "Winston"];
var mccreeCounter = ["Widowmaker", "Genji", "Reinhardt", "Ana"];
var pharahCounter = ["Widowmaker", "Soldier: 76", "Roadhog", "McCree", "Ana"];
var reaperCounter = ["Lucio", "McCree", "Pharah", "Genji"];
var tracerCounter = ["McCree", "Mei", "Winston"];
var soldierCounter = ["Widowmaker", "Zarya", "McCree", "Reinhardt"];
var bastionCounter = ["Widowmaker", "Ana", "Hanzo", "Junkrat", "Mei", "Pharah", "Reaper", "Tracer"];
var hanzoCounter = ["Tracer", "Widowmaker", "Winston", "Roadhog"];
var junkratCounter = ["Soldier: 76", "Hanzo", "Reaper", "Roadhog"];
var meiCounter = ["Zarya", "Junkrat", "Reaper"];
var torbjornCounter = ["D.Va", "Mei", "Pharah", "Reaper", "Junkrat", "Widowmaker", "Hanzo", "Ana"];
var widowmakerCounter = ["Soldier: 76", "Tracer", "Winston", "Reaper", "Genji"];
var dvaCounter = ["Roadhog", "Zenyatta", "Reaper", "Ana"];
var reinCounter = ["Roadhog", "Pharah", "Junkrat"];
var zaryaCounter = ["Junkrat", "Pharah", "Widowmaker", "Bastion"];
var roadhogCounter = ["Soldier: 76", "Torbjorn", "Genji", "Reaper", "Ana"];
var anaCounter = ["Genji", "Tracer", "Reaper", "Mei", "Junkrat"];
var lucioCounter = ["McCree", "Pharah", "Soldier: 76", "Zarya"];
var winstonCounter = ["McCree", "Reaper", "Zarya", "Bastion"];
var mercyCounter = ["Genji", "Reaper", "Widowmaker", "Winston", "Tracer", "Bastion", "D.Va"];
var symmetraCounter = ["Winston", "Junkrat", "Pharah", "Reaper"];
var zenCounter = ["Soldier: 76", "Tracer", "Zarya", "Reaper"];
var randAllHero = allHeroes[Math.floor(Math.random() * allHeroes.length)];
document.getElementById("hero").innerHTML = randAllHero;
var inputHero;
var hpic;
var picGenji =
    "https://hydra-media.cursecdn.com/overwatch.gamepedia.com/thumb/d/d8/Genji-portrait.png/322px-Genji-portrait.png?version=e448f8142f240c4534dba343b1c27d70";
var picMccree =
    "https://hydra-media.cursecdn.com/overwatch.gamepedia.com/thumb/d/d2/Mccree-portrait.png/264px-Mccree-portrait.png?version=83f298037e64b8c8565d3a93159fb451";
var picPharah =
    "https://hydra-media.cursecdn.com/overwatch.gamepedia.com/thumb/2/26/Pharah-portrait.png/268px-Pharah-portrait.png?version=33ba45392ee45b2270b8b46c605df8fd";
var picReaper =
    "https://hydra-media.cursecdn.com/overwatch.gamepedia.com/thumb/7/74/Reaper-portrait.png/272px-Reaper-portrait.png?version=648fc857cf4e2f7526833dfaead077ae";
var picSoldier76 =
    "https://hydra-media.cursecdn.com/overwatch.gamepedia.com/thumb/e/e0/Soldier76-portrait.png/224px-Soldier76-portrait.png?version=6ae765538841ad3f22d2dbc38fa3ba03";
var picTracer =
    "https://hydra-media.cursecdn.com/overwatch.gamepedia.com/thumb/8/81/Tracer-portrait.png/169px-Tracer-portrait.png?version=eb0935cc91653983bc409dd51626ba56";
var picBastion =
    "https://hydra-media.cursecdn.com/overwatch.gamepedia.com/thumb/d/d0/Bastion-portrait.png/332px-Bastion-portrait.png?version=5b01cb64cc536d8a856a313a2163e3af";
var picHanzo =
    "https://hydra-media.cursecdn.com/overwatch.gamepedia.com/thumb/a/a0/Hanzo-portrait.png/290px-Hanzo-portrait.png?version=c4290d9249b453e115c24a7bad27ec4a";
var picJunkrat =
    "https://hydra-media.cursecdn.com/overwatch.gamepedia.com/thumb/9/99/Junkrat-Portrait.png/286px-Junkrat-Portrait.png?version=3ae9ea8c78c275ed8d947142c399ad5a";
var picMei =
    "https://hydra-media.cursecdn.com/overwatch.gamepedia.com/thumb/d/d0/Mei-portrait.png/195px-Mei-portrait.png?version=4e88c75249228fb9d9bec3777fd213cb";
var picTorbjorn =
    "https://hydra-media.cursecdn.com/overwatch.gamepedia.com/thumb/c/c5/Torbjorn-portrait.png/350px-Torbjorn-portrait.png?version=790c9a76d2f35bd689c098515305ad72";
var picWidowmaker =
    "https://hydra-media.cursecdn.com/overwatch.gamepedia.com/thumb/4/4c/Widowmaker-portrait.png/222px-Widowmaker-portrait.png?version=91ec29d122ced3a0851624c4407e677f";
var picDva =
    "https://hydra-media.cursecdn.com/overwatch.gamepedia.com/thumb/b/b0/DVa-portrait.png/336px-DVa-portrait.png?version=a61b36e7c026d484f0de8a1ae2811cb1";
var picReinhardt =
    "https://hydra-media.cursecdn.com/overwatch.gamepedia.com/thumb/0/07/Reinhardt-portrait.png/350px-Reinhardt-portrait.png?version=ef1671e6601ed71a5071765f18a85317";
var picRoadhog =
    "https://hydra-media.cursecdn.com/overwatch.gamepedia.com/thumb/c/ce/Roadhog-Portrait.png/345px-Roadhog-Portrait.png?version=8d4d4fd66925b98e23e233c56afd53cc";
var picWinston =
    "https://hydra-media.cursecdn.com/overwatch.gamepedia.com/thumb/b/b8/Winston-portrait.png/350px-Winston-portrait.png?version=9468607a8dfc6a89b17982aff23b34dd";
var picZarya =
    "https://hydra-media.cursecdn.com/overwatch.gamepedia.com/thumb/6/6d/Zarya-portrait.png/350px-Zarya-portrait.png?version=eef150f0ffc0563f00a616fb1a7fa827";
var picAna = "https://hydra-media.cursecdn.com/overwatch.gamepedia.com/thumb/7/76/Ana.png/143px-Ana.png?version=5b239cfd7b36cee56394c894fc07b9af";
var picLucio =
    "https://hydra-media.cursecdn.com/overwatch.gamepedia.com/thumb/8/8c/Lucio-portrait.png/189px-Lucio-portrait.png?version=e7e74213666be71b873908f312ba7928";
var picMercy =
    "https://hydra-media.cursecdn.com/overwatch.gamepedia.com/thumb/d/d2/Mercy-portrait.png/350px-Mercy-portrait.png?version=f7b45a4f3299985cb7a1ae05788c417a";
var picSymmetra =
    "https://hydra-media.cursecdn.com/overwatch.gamepedia.com/thumb/1/18/Symmetra-portrait.png/161px-Symmetra-portrait.png?version=2454ad319b6893184bd7776f08cf91ab";
var picZenyatta =
    "https://hydra-media.cursecdn.com/overwatch.gamepedia.com/thumb/9/92/Zenyatta-portrait.png/269px-Zenyatta-portrait.png?version=fb9c71f0eeac547c6a739f726b0aeab8";
var picSombra =
	"https://hydra-media.cursecdn.com/overwatch.gamepedia.com/thumb/c/c5/Sombra-portrait.png/350px-Sombra-portrait.png?version=9bbba1f8073e8610f699fc86d34fa38d";

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