let yoff = 0
var song;
let amp;

function preload(){
  song = loadSound("joy.mp3");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  song.play();
  amp = new p5.Amplitude(0.996);
}

function draw() {
  background(255);
  translate(width/2, height/2);
  stroke(191,213,232);
  fill(255);
  strokeWeight(6);
  //console.log(amp.getLevel());

  let da = PI / map(amp.getLevel()/2, 0,0.7, 60, 100);
  let dx = 0.05;

  let xoff = 0;
  beginShape();
  for (let a = 0; a <=TWO_PI; a += da) {
    let n = noise(xoff, yoff);
    let r = sin(2 * a)* map(n, 0, 0.5, 120, 300);
    let x = r* cos(a);
    let y = r* sin(a);
    if (a < PI) {
      xoff += dx;
    } else {
      xoff -= dx;
    }
  vertex(x,y);
  }
  endShape();
  yoff += 0.01;
  

  
}