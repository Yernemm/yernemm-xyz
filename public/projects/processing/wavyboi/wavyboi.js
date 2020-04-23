let i = 0;
let c = ['#2359ef', '#ae27ff', '#26a948'];
const baseSize = 80;
const wobbleAmp = 60;
const wobbleSpeed = 0.16;

function setup() {
  createCanvas(720, 640);
}

function draw() {
  fill(c[i%(c.length)]);
  ellipse(mouseX, mouseY, baseSize + (wobbleAmp * Math.sin(i * wobbleSpeed)), baseSize - (wobbleAmp * Math.sin(i * wobbleSpeed)));
  i++;
}
