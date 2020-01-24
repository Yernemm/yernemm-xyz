var intro = ["I don't even care anymore. I work with the Overwatch team and here's what we're working on:", "You know what? Screw it! Here's the upcoming Overwatch content.", "I can't handle the pressure working for Blizz. Here's my content leak.", "I'm a QA tester from Austin. Here's some content for Overwatch that I managed to see", "I am Jeff Kaplan from the Overwatch team. Here's what's in the pipeline for Overwatch this year:", "Blizzard already fired me... Might as well leak this stuff.", "I can't contain myself with all the hype. I know it's a bit early but here's what we're working on for Overwatch."];
var gamemodes = ["an escort", "a hybrid", "an assault", "a capture", "an arena", "a payload", "a 2cp", "a control point"]
var uptxt = ["They're currently working on", "We're in the late stages of developing", "There's an upcoming announcement of", "Soon, you'll see the release of", "I've heard that there's gonna be an announcement of", "In a few days we will announce", "We're almost done with"]
var mapcont =[".", " which seems like a lot of fun!", " which looks quite bad so far.", " but it hasn't got any textures yet.", " but we're still working on it a bit.", " but it's a bit disappointing.", " and it's really cool.", " and it has some cool new map features that we've never tried before.", " and it's quite revolutionary.", " and it's quite basic.", "!"]
var mapexp =["From what I've heard, it seems to be set in a major city in ", "I've seen some of the concept art of it and it's set somewhere in ", "From the concept art, I think it's going to be set somewhere in ", "I've seen some art for it and it seems to be set in ", "We haven't got any good maps set in this location, so the team decided to make a map set in ", "It's going to be a map that's in a small town on the outskirts of ", "There's some lore linked with some of the upcoming and current heroes and it's going to be somewhere in "] 
var loc = ["Africa", "Germany", "England", "Britain", "France", "Portugal", "Australia", "Mexico", "South America", "America", "Italy", "Norway", "Brussels", "Belgium", "Poland", "Ukraine", "Turkey", "Korea", "Japan", "China", "the Maldives", "the Canary Islands", "a remote island", "the ocean, underwater", "Sweden", "Egypt", "Greece"]
var mfea1 = ["There's going to be some awesome verticality to it", "It has many sneaky flank routes", "It features a variety of jump pads", "We decided to play around with the concept of adding ladders", "It has some small tunnels in which only small heroes can fit", "It's one of the largest maps we've made", "It's one of the smallest maps for the chosen gamemode"]
var conn = ["and", "and also"]
var mfea2 = ["it has some great sight lines for snipers", "it has some new working elevators", "it has a sort of force field which lifts heroes up, kind of like an elevator", "it has a bunch of moving floating platforms everywhere"]

var hein = ["Blizz is experimenting with some new hero concepts. ", "We're working on a couple of heroes and some of them seem to be almost done. ", "We're in the late stages of development for some of the heroes. ", "We have reached the art stage for some of the heroes that we're working on. ", "The team is happy with the abilities for some of our prototype heroes and you should expect a few to come out over the next year. "]
var heint = ["One of the heroes that's far along the development cycle is ", "There's one hero which we're almost done with, their internal name is ", "We're done with a hero called ", "The next hero to come out will be ", "You should expect the next hero to be called ", "Next week, we are going to update the PTR with a hero called "]
var hen1 = ["Doom", "Sound", "Ultra", "Infra", "Violet", "Red", "Fire", "Boom", "Peace", "Light", "Blue", "Sea", "Sky", "Wind", "Robo", "Omni", "Dark", "Moon"]
var hen2 = ["fist", "quake", "red", "violet", "monk", "blade", "robot", "sword", "gun", "orb", "boot", "hood"]

var role = ["an offense", "a defense", "a tank", "a support", "a healer", "a dps", "a flanker", "a tank/offense hybrid", "a tank/defense hybrid", "a tank/support hybrid", "an offense/defense hybrid", "an offense/support hybrid", "a defense/support hybrid"]

var allHeroes = ["Genji", "McCree", "Pharah", "Reaper", "Soldier: 76", "Tracer", "Bastion", "Hanzo", "Junkrat", "Mei", "Torbjorn", "Widowmaker", "D.Va", "Reinhardt", "Roadhog", "Winston", "Zarya", "Ana", "Lucio", "Mercy", "Symmetra", "Zenyatta", "Sombra", "Orisa"];

var ab1 = ["They have this cool ability called ", "We experimented with a new ability called ", "We gave it a cool new ability called ", "It has this weird ability called "]

var nab1 = ["re", "over", "trans", "pro", "de", "over", "tele", "super", "under", "bright", "con"]
var nab2 = ["port", "position", "extend", "hook", "verse", "watch", "locate", "duce", "cussion", "see", "lap", "-jump"]

var abex = [". This ability allows the hero to ", " which lets the hero ", " which can be used to ", ". We think it's a great ability because it allows this hero to "]
var averb = ["jump over", "heal", "instantly eliminate", "eliminate", "block off", "shield", "help", "defend", "attack", "damage", "debuff", "buff", "hack", "disable", "control", "fly over", "see through walls around", "charge towards", "teleport to"]
var anoun = [" every enemy. ", " every ally. ", " a selected enemy. ", " a selected ally. ", " a targeted location. ", " the enemy spawn door. ", " the area around the current objective. ", " low health allies. ", " low health enemies. "]
var conti = ["We think that this hero will be very useful for ", "These abilities allow the hero to be effective at ", "We believe that the hero will be good at ", "With this, we hope to make a hero which can be good at ", "We tried to fill a certain role with this; we think that the hero will be good at "]
var role1 = ["flanking the enemies and surprising them", "healing allies", "being an annoyance", "front-line brawling", "back-line harassment", "eliminating squishy targets", "supporting the team", "blocking enemy damage", "distracting the enemy"]

var addcont = ["shorts", "animated shorts", "origin stories", "comics"]

var closer = ["That's all I was able to see.", "Have fun with the new content ;)", "That's all I know so far.", "And that is it as far as I'm aware."]


function generateLeak(){
	var dd = new Date()
	var day = addZero(dd.getDate())
	var month = addZero(dd.getMonth() + 1)
	var year = dd.getFullYear() - 2000
	var wday = dd.getDay()
	
	
	var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
	
	function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
	}
	
	function r(ab){
		var b = ab[Math.floor(Math.random() * ab.length)];
		return b
	}
	
	var h = addZero(dd.getHours());
    var m = addZero(dd.getMinutes());
    var s = addZero(dd.getSeconds());
	
	var no = Math.floor(Math.random() * 999999)
	var num = "178" + no
	
	var re1 = Math.floor(Math.random() * (999999 - no)) + no
	var re2 = Math.floor(Math.random() * (999999 - re1)) + re1
	
	var rep1 = "178" + re1
	var rep2 = "178" + re2
	
	document.getElementById("leakhead").innerHTML = '<b class="anon"><span class="anon" style="color: rgb(17, 119, 67);">Anonymous</span></b> ' + month + '/' + day + '/' + year + '(' + days[wday] + ')' + h + ":" + m + ":" + s + " No." + num + '<span class="replies"> ▶ <span class="repsmall"> <u> >>' + rep1 + '</u> <u> >>' + rep2 + '</u></span></span>'
	

	
	//var rintro = intro[Math.floor(Math.random() * intro.length)];
	//var rgm = gamemodes[Math.floor(Math.random() * gamemodes.length)];
	//var ruptxt = uptxt[Math.floor(Math.random() * uptxt.length)];
	//var rmapcont = rmapcont[Math.floor(Math.random() * mapcont.length)];
	
    document.getElementById("leak").innerHTML = '<p class="theleak"> ' + r(intro) + ' </p> <p class="theleak"> ' + r(uptxt) + " " + r(gamemodes) + " map" + r(mapcont) + " " + r(mapexp) + r(loc) + ". " + r(mfea1) + " " + r(conn) + " " + r(mfea2) + '. </p> <p class="theleak">' + r(hein) + r(heint) + r(hen1) + r(hen2) + ". It is going to be " + r(role) + " hero. Some of its abilities are kind of similar to " + r(allHeroes) + ". " + r(ab1) + r(nab1) + r(nab2) + r(abex) + r(averb) + r(anoun) + r(conti) + r(role1) + '. </p> <p class="theleak">' + "We've also got a few " + r(addcont) + " coming soon, featuring " + r(allHeroes) + " and " + r(allHeroes) + '. </p> <p class="theleak">' + r(closer) + "</p>"
	
}
