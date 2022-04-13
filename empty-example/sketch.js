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

  let da = PI / map(amp.getLevel()/2, 0,0.7, 60, 100); //stating variable of 'da' to equal PI (circle) / mapping incraments to make the 'noise' (different parts of each wing move). The addition of the 'getamp' calling the prior statement of 'amp' into the code causing the 'noise' to move with the volume of the mp3 sound file.
  let dx = 0.05; //this variable and decimal effects the harsh/sharpness of the noise incraments - the 0.05 making the shape move smoothly and in waves. Changing it to 0.5 makes the shape harsh and pointed.

  let xoff = 1; //this variable effects the spread of the shape and how it relates to the yoff (y axis) variable, increasing this variable makes the shape reach further out to the sides.
  beginShape(); //makes the shape start animating
  for (let a = 0; a <=TWO_PI; a += da) { 
    let n = noise(xoff, yoff); //variable stating that the 'noise' 
    let r = sin(2 * a)* map(n, 0, 0.5, 120, 300);
    let x = r* cos(a);
    let y = r* sin(a);
    if (a < PI) { //if the angle of the shape is smaller than a full circle - effected by the amplitude of the mp3
      xoff += dx; //then the x axis variable will cause the shape to follow the correct/ previously stated and increase the size of the movement accordingly
    } else {
      xoff -= dx; //otherwise, if the angle is bigger than PI then the xoff variable will be equal to or less than the stated noise, making the movement waves of the shape decrease in size 
    }
  vertex(x,y); //starting point of the shape, causes it to be connected as one rather than using point() which makes all incraments separate and without fill.
  }
  endShape(); //stops the shape 
  yoff += 0.03; //effects how much the overall shape moves
  

  
}