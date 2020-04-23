let grid = [];
const gridW = 50;
const gridH = 50;
const delay = 0.1;

const screenH = 800;
const screenW = 800;


const tileW = screenW / gridW;
const tileH = screenH / gridH;

let delayCounter = delay;

function setup() {
  createCanvas(screenW, screenH);
  
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
  
  grid[2][2].alive = true;
  grid[2][3].alive = true;
  grid[2][4].alive = true;
  grid[1][4].alive = true;
  grid[0][3].alive = true;
  
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
         rect(x*tileW,y*tileH,tileW,tileH);
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
    console.log([this.x,this.y]);
    console.log(this.neighbours);
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
