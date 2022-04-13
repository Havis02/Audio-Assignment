let yoff = 0
var song; //variable stating the song
let amp; //variable stating the use of amplitude

function preload(){ //function loads the song before the image - runs smoother
  song = loadSound("joy.mp3"); //telling the code the sound file to run
}

function setup() {
  createCanvas(windowWidth,windowHeight); //makes the canvas fit the size of the window
  song.play(); //commands the mp3 file to play upon setup
  amp = new p5.Amplitude(0.996);//adds in the file and recognision of the code using P5.js amplitude - in the brackets states the smoothness of the amplitude reactions
}

function draw() { //calls the animation/ reactions to occur
  background(255); // creates a white background
  translate(width/2, height/2); // places the final shape in the center of the window
  stroke(191,213,232); //sets the stroke colour to be a light blue
  fill(255); //white fill to match background
  strokeWeight(6); //sets the thickness of the stroke around the butterfly wing shapes
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