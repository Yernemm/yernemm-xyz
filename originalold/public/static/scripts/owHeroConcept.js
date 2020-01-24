var loc = ["Africa", "Germany", "England", "Britain", "France", "Portugal", "Australia", "Mexico", "South America", "America", "Italy", "Norway", "Brussels", "Belgium", "Poland", "Ukraine", "Turkey", "Korea", "Japan", "China", "the Maldives", "the Canary Islands", "Sweden", "Egypt", "Greece", "Numbani", "King's Row", "Ilios", "Hanamura"]

var hen1 = ["Doom", "Sound", "Ultra", "Infra", "Violet", "Red", "Fire", "Boom", "Peace", "Light", "Blue", "Sea", "Sky", "Wind", "Robo", "Omni", "Dark", "Moon", "Dragon", "Snow", "Wolf", "He", "Folk", "White", "Black", "Spider", "Moth", "Butterfly", "Hawk", "Eagle"]
var hen2 = ["fist", "quake", "red", "violet", "monk", "blade", "robot", "sword", "gun", "orb", "boot", "hood", "born", "yatta", "oni", "night", "knight", "maker", "-man", "-woman", "rider", "hand", "run", "kin", "rim", "bot"]

var role = ["Offense", "Defense", "Tank", "Support"]

var prewep =["Rocket-powered", "Steel", "Burning", "Freezing", "Ice", "Hybrid", "Storm", "Huge", "Mini", "Makeshift", "Professional", "Long", "Short", "Hunting", "Spiked", "Sharp", "Tactical", "Musical", "Loud", "Quiet", "Stealth", "Light", "Photon", "Laser", "Plasma", "Hovering", "Floating", "Robotic", "Flying"];

var weapon = ["Hammer", "Sword", "Assault Rifle", "Pistol", "SMG", "Sniper Rifle", "Bow", "Throwing Knives", "Knife", "Dagger", "Axe", "Balls", "Staff", "Rod", "Lasso", "Hook", "Fist", "Gauntlet", "Claws", "Rocket Launcher", "Grenade Launcher", "Bomb Launcher", "Drums", "Speakers", "Orbs", "Blaster"];

var nab1 = ["re", "over", "trans", "pro", "de",  "tele", "super", "under", "bright", "con", "swift", "dragon", "cat", "free", "cryo", "bio", "nano", "cease", "doom", "left", "right", "loud", "fear", "counter", "para", "freeze", "ice", "fire", "burning", "fire", "anti", "holy", "rising", "down"]
var nab2 = ["port", "position", "extend", "hook", "verse", "watch", "locate", "duce", "cussion", "see", "lap", "jump", "strike", "walk", "run", "freeze", "burn", "wet", "wind", "water", "land", "block", "shield", "heal", "life", "dim", "beam"]

//var abex = [". This ability allows the hero to ", " which lets the hero ", " which can be used to ", ". We think it's a great ability because it allows this hero to "]
var averb = ["jump over", "heal", "instantly eliminate", "eliminate", "block off", "shield", "help", "defend", "attack", "damage", "debuff", "buff", "hack", "disable", "control", "fly over", "see through walls around", "charge towards", "teleport to", "slowly walk towards", "delete", "crash", "blind", "annoy", "mildly inconvenience", "ride on", "jump on", "crawl under", "pick up", "lift", "burn", "freeze", "poison", "hide", "kick", "punch", "throw", "spawn"]
var anoun = [ "a selected enemy", "a selected ally", "a targeted location", "the enemy spawn door",  "low health allies", "low health enemies", "a straight line",  "any targeted player", "a radius around the hero", "a rock", "a satellite in the sky", "a cloud", "a car", "a jump pad"]
var ultnoun = ["every enemy", "every ally", "anywhere", "the area around the current objective", "anything in the entire map", "a train", "a helicopter", "the planet", "the game", "the match", "an enemy player's internet connection", "Jeff Kaplan"];

var mname =["Alli", "Arthur", "Andrew", "Adam", "Adrian", "Bart", "Bartek", "Bjorn","Blaine", "Blake","Blakelee","Blanch", "Cedric", "Charlie", "Dimitri","Domenic", "Donald", "Dori", "Dorian", "Ed", "Eddy", "Eddie", "Earl", "Edwin", "Felix", "Flory", "Freddie", "Freddy", "Fred", "Gabe", "Gabriel", "Gant", "Garry", "Guy", "Hank", "Harry", "Hans", "Hazel", "Hector", "Hammond", "Hercules", "Ignaz", "Irwin", "Isaac", "Jake", "Jakob", "James", "Javier", "John", "Jeff", "Jeph", "Geoff", "Ken", "Kent", "Kermit", "Kyle", "Karl", "Larry", "Lenny", "Law", "Lawrence", "Lewis", "Lowe", "Marco", "Markus", "Matthew", "Matt", "Maximilian", "Michael", "Mylo", "Nathan", "Ned", "Nev", "Nam", "Norton", "Oby", "Oliver", "Oliwier", "Ozzy", "Palmer", "Patrick", "Pedro", "Phillip", "Prinz", "Quill", "Rab", "Rafa", "Ramon", "Rudolph", "Rhys", "Richard", "Roger", "Romeo", "Salvador", "Saul", "Scott", "Sebastian", "Silvano", "Sylvester", "Tam", "Tom", "Theo", "Toby", "Towney", "Tyler", "Urban", "Val", "Van", "Umberto", "Vern", "Victor", "Vidovik", "Vince", "Wake", "Waldon", "Wallis", "Wallace", "Whitman", "Wolfgang", "Wood", "Xavier", "Xenos", "Yale", "Yank", "York", "Zack", "Zerk", "Zolly", "Guillermo", "Ivan", "Rick", "Morty", "Dipper", "Lee"];

var fname= ["Alicia","Alida","Alidia","Alie","Alika","Alikee","Alina","Aline","Andria","Andriana", "Blair","Blaire","Blaise","Blancha", "Camila", "Camille", "Candace", "Carly",  "Dita", "Edwina", "Elena", "Eleanor", "Elanore", "Ellen", "Faith",  "Fiona",  "Gwen", "Greatal", "Grazia", "Guillema", "Haley", "Hana", "Hannah", "Harmonia", "Hilde", "Hope", "Ilena", "Inez", "Isabelle", "Ivette", "Jade", "Janeczka", "Johanna", "Juliet", "Kara", "Karen", "Kate", "Koral", "Lani", "Lara", "Lisa", "Laura", "Lucy", "Lina", "Mabel", "Madelin", "Maggy", "Marcelle", "Mara", "Marge", "Marie", "May", "Megan", "Molly", "Nariko", "Natalie", "Nicole", "Nikki", "Nayomi", "Ola", "Orelle", "Paige", "Pamela", "Patrycia", "Paulina", "Quinn", "Queenie", "Rachel", "Raven", "Ray", "Regina", "Robyn", "Rosaline", "Rose", "Sally", "Scarlet", "Shannon", "Sofie", "Stacy", "Susan", "Sylvia", "Tamiko", "Thea", "Tracy", "Ula", "Ursula", "Valencia", "Vikki", "Vicki", "Wanda", "Winnah", "Xylina", "Yvette", "Yoko", "Yoshiko", "Zabrina", "Zena", "Zuzana", "Clementine"];

var sname = ["Adamo", "Adamowicz", "Akai", "Oxton", "Hoxton", "Chains", "Dallas", "Alston", "Ashdown", "Attard", "Bae", "Kowal", "Kowalski", "Bahl", "Bailloux", "Barnhardt", "Baxter", "Aiko", "Bruce", "Brunato", "Bullard", "Hard", "Cadwell", "Calvin", "Capozzi", "Castro", "Chai", "Clancy", "Clark", "Coleman", "Comazzi", "Comp", "Conklin", "Cracknell", "Craddock", "Cruz", "Dale", "DeMarco", "Decleir", "DelVecchio", "Degraauw", "Flores", "Portero", "Denmark", "Dibler", "Dinkel", "Dominguez", "Dow", "Duvarci", "Duxbury", "Edey", "Edmison", "Einhart", "English", "Esgate", "Fastone", "Fallis", "Farmer", "Ferro", "Ficco", "France", "Fredriksen", "Gagne", "Gahir", "Gavin", "Gibbs", "Fawkes", "Shimada", "Glaszczak", "Goin", "Granic", "Grenlock", "Groulx", "Haack", "Hadi", "Hadzimerovic", "Ivanovich", "Hamilton", "Honda", "Instal", "Iocca", "Ioui", "Jalalizadeth", "Jak", "Janiszewski", "Jemczyk", "Jennings", "Justus", "Kamminga", "Kapsa", "Karia", "Kilby", "Koa", "Koch", "Krawiec", "Lloyd", "Labonte", "Lao", "LeBlanc", "Ledoux", "Leth", "Lohoar", "MacCormack", "McGregor", "Maclean", "Malott", "Polo", "Marco", "McDunn", "MacGuinness", "Miller", "Nair", "Naoum", "Neil", "Neto", "Nock", "Orser", "Owen", "Pai", "Paone", "Petrovic", "Pien", "Pittman", "Kaplan", "Mercer", "Goodman", "Ponthieux", "Poorman", "Quek", "Quinz", "Qureshi", "Raines", "Raman", "Rasmus", "Richer", "Rix", "Ross", "Sanchez", "Sayer", "Serre", "Shen", "Sleeth", "Steinhart", "Takata", "Talbott", "Teed", "Thorpe", "Torok", "Tranter", "Unitt", "Urbick", "Valois", "Vandenberg", "Vanderhoeven", "Veloz", "Winston", "Winchester", "Wai", "Wayling", "Wiley", "Wozniak", "Xu", "Yano", "Yao", "York", "Yzerman", "Zee", "Zvonar", "Zywiel"];

var team = ["Overwatch", "Talon", "Helix Security", "Vishkar", "Unknown", "None", "Lumerico", "Los Muertos", "Volskaya Industries", "Null Sector"];

var job = ["Security Guard", "Vigilante", "Scientist", "Field Medic", "Biologist", "Doctor", "Psychiatrist", "Chef", "Cook", "Hacker", "Spy", "Secret Agent", "Mercenary", "Merchant", "Gunsmith", "Architect"];



function generate(){

	

	function r(ab){
		var b = ab[Math.floor(Math.random() * ab.length)];
		return b
	}

	var age = Math.floor(Math.random() * (100 - 18)) + 18 
	
	var mf = Math.floor(Math.random() * 2)

	
if(mf == 0){
	document.getElementById("rname").innerHTML = r(mname) + " " + r(sname)
	
}else{
	document.getElementById("rname").innerHTML = r(fname) + " " + r(sname)
	
}
	
	//var rintro = intro[Math.floor(Math.random() * intro.length)];
	//var rgm = gamemodes[Math.floor(Math.random() * gamemodes.length)];
	//var ruptxt = uptxt[Math.floor(Math.random() * uptxt.length)];
	//var rmapcont = rmapcont[Math.floor(Math.random() * mapcont.length)];
	
    //document.getElementById("leak").innerHTML = '<p class="theleak"> ' + r(intro) + ' </p> <p class="theleak"> ' + r(uptxt) + " " + r(gamemodes) + " map" + r(mapcont) + " " + r(mapexp) + r(loc) + ". " + r(mfea1) + " " + r(conn) + " " + r(mfea2) + '. </p> <p class="theleak">' + r(hein) + r(heint) + r(hen1) + r(hen2) + ". It is going to be " + r(role) + " hero. Some of its abilities are kind of similar to " + r(allHeroes) + ". " + r(ab1) + r(nab1) + r(nab2) + r(abex) + r(averb) + r(anoun) + r(conti) + r(role1) + '. </p> <p class="theleak">' + "We've also got a few " + r(addcont) + " coming soon, featuring " + r(allHeroes) + " and " + r(allHeroes) + '. </p> <p class="theleak">' + r(closer) + "</p>"
document.getElementById("hname").innerHTML = "<u>" + r(hen1) + r(hen2) + "</u>"
document.getElementById("ab1").innerHTML = r(nab1) + "-" + r(nab2) + "<br>" + r(averb) + " " + r(anoun)
document.getElementById("ab2").innerHTML = r(nab1) + "-" + r(nab2) + "<br>" + r(averb) + " " + r(anoun) 
document.getElementById("ult").innerHTML = r(nab1) + "-" + r(nab2) + "<br>" + r(averb) + " " + r(ultnoun)
document.getElementById("base").innerHTML = r(loc)	
document.getElementById("team").innerHTML = r(team)	
document.getElementById("job").innerHTML = r(job)
document.getElementById("role").innerHTML = r(role)	
document.getElementById("age").innerHTML = age	
document.getElementById("weapon").innerHTML = r(prewep) + " " + r(weapon)
}
