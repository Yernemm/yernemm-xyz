let grid = [];
const gridW = 50;
const gridH = 50;
const delay = 0.05;

const screenH = 800;
const screenW = 800;
const topMargin = 50;


const tileW = screenW / gridW;
const tileH = screenH / gridH;

let delayCounter = delay;

let button;

function setup() {
  createCanvas(screenW, screenH + topMargin);
  
  reset();
  
  
  button = createButton('Reset');
  button.position(screenW/2, 20);
  button.mousePressed(reset);
  
}

function draw() {
   delayCounter += deltaTime / 1000;
   if(delayCounter >= delay){
     console.log('tick');
     
    for(y=0;y<gridH;y++){
       for(x=0;x<gridW;x++){
         grid[y][x].calcNextState();
       }
    }
     
     for(y=0;y<gridH;y++){
       for(x=0;x<gridW;x++){
         
         fill(grid[y][x].alive ? 0 : 255);
         rect(x*tileW,y*tileH + topMargin,tileW,tileH);
         grid[y][x].tick();
       }
    }
    

    
     delayCounter = 0;
   }

 
}

class Tile {
  
  constructor(x, y){
     this.alive = false;
     this.nextState = this.alive;
     this.x = x;
     this.y = y;
  }
  
  setNeighbours(){
    let y = this.y;
    let x = this.x;
    let neighSet = 
    [
      [y-1,x-1],
      [y-1,x],
      [y-1,x+1],
      [y,x-1],
      [y,x+1],
      [y+1,x-1],
      [y+1,x],
      [y+1,x+1]
    ];
    this.neighbours = [];
    for(let a of neighSet){
      if(a[0] >= 0 && a[0] < gridH && a[1] >= 0 && a[1] < gridW){
        this.neighbours.push(grid[a[0]][a[1]]);
        
      }
    }

  }
  
  calcNextState(){
    let adj = 0;
    for(let n of this.neighbours){
      adj += n.alive ? 1 : 0;
    }
    if(this.alive && (adj < 2 || adj > 3)){
      this.nextState = false;
    } else if(!this.alive && adj === 3){
      this.nextState = true; 
    }else{
      this.nextState = this.alive; 
    }
  }
  
  tick(){
    this.alive = this.nextState; 
  }
  
}


function reset() {
  
  for(y=0;y<gridH;y++){
    grid[y] = [];
     for(x=0;x<gridW;x++){
         grid[y][x] = new Tile(x, y);
     }
  }
  
  
  
  for(y=0;y<gridH;y++){
     for(x=0;x<gridW;x++){
         grid[y][x].setNeighbours();
     }
  }
  
  let numOfAlives = getRandomInt(10, gridW*gridH);
  
  for(let i=0; i<numOfAlives;i++){
    let a = getRandomInt(0, gridH-1);
    let b = getRandomInt(0, gridW-1);
    grid[ a ][ b ].alive = true;
  }
  

  
  
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
