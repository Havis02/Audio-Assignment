let yoff = 0
var song; //variable stating the song
let amp; //variable stating the use of amplitude
var volhistory = [];
//let amp2;


function preload(){ //function loads the song before the image - runs smoother
  song = loadSound("joy.mp3"); //telling the code the sound file to run
}

function setup() {
  createCanvas(windowWidth,windowHeight); //makes the canvas fit the size of the window
  background(200,230,280); // made the background blue
  song.play(); //commands the mp3 file to play upon setup
  amp = new p5.Amplitude(0.5);//adds in the file and recognision of the code using P5.js amplitude - in the brackets states the smoothness of the amplitude reactions
  //amp2 = new p5.Amplitude();
  //fft = new p5.FFT();
}

function draw() { //calls the animation/ reactions to occur

  var vol = amp.getLevel();
  volhistory.push(vol);
  stroke(0, 200, 0);
  strokeWeight(4);
  noFill(); 
  beginShape();
  for (var i = 0; i < volhistory.length; i++) {
    var y = map(volhistory[i], 0, 3, height , 0);
    vertex(i, y);
  }
  endShape();

  if (volhistory.length > width) {
    volhistory.splice(0.1);
    
  }
  
  switch(key) {
    case "1":
      drawshape_butterfly();
      break;

    default:
     // background(200,230,280);
     noStroke();
     fill(200,230,280);
     rect(0,0,width, height - 125);
      var vol = amp.getLevel();
      volhistory.push(vol);
      stroke(0, 200, 0);
      strokeWeight(4);
      noFill(); 
      beginShape();
      for (var i = 0; i < volhistory.length; i++) {
        var y = map(volhistory[i], 0, 3, height , 0);
        vertex(i, y);
      }
      endShape();
      break;
  }  

}

function drawshape_butterfly(){
  translate(width/2, height/2); // places the final shape in the center of the window
  //stroke(191,213,232); //sets the stroke colour to be a light blue
  fill(255); //white fill to match background
  strokeWeight(6); //sets the thickness of the stroke around the butterfly wing shapes
  //console.log(amp.getLevel());
  for (var i = 0; i < 2; i++) { // for loop to determine the colours and the changing of the colours throughout the duration of the shapes movement.
    //the variable of i controls the saturation of the rgb colours as well as which colours are being made dominant for us to see. It also appears to control how bright they appear while changing, the higher the number for i to be less than the brighter the colours are.

    var r = map(sin(frameCount / 15), -1, 1, 350, 160) //variable r is mapping 'red' according to the shapes frame count, the bigger the divided frameCount the slower the colours change, the other numbers determine the saturation of the red colour scale
    var g = map(i, 0, 10, 90, 160) //this g variable changes the green scale colour through mapping similar to the r variable - effecting brightness and saturation
    var b = map(cos(frameCount), -1, 1, 220, 120) //variable b is mapping the 'blue' according to the shapes frame count, the bigger the divided frameCount the slower the colours change, the other numbers determine the saturation of the blue colour scale

    stroke(r,g,b) //calls the new r , g , b variables into the stroke so that the outline of the moving shape can adopt these colours.
  }

  let da = PI / map(amp.getLevel()/2, 0,0.7, 60, 100); //stating variable of 'da' to equal PI (circle) / mapping incraments to make the 'noise' (different parts of each wing move). The addition of the 'getamp' calling the prior statement of 'amp' into the code causing the 'noise' to move with the volume of the mp3 sound file.
  let dx = 0.05; //this variable and decimal effects the harsh/sharpness of the noise incraments - the 0.05 making the shape move smoothly and in waves. Changing it to 0.5 makes the shape harsh and pointed.

  let xoff = 1; //this variable effects the spread of the shape and how it relates to the yoff (y axis) variable, increasing this variable makes the shape reach further out to the sides.
  beginShape(); //makes the shape start animating
  for (let a = 0; a <=TWO_PI; a += da) { 
    let n = noise(xoff, yoff); //variable stating that the 'noise' 
    let c= sin(2 * a)* map(n, 0, 0.5, 120, 300);
    let x = c* cos(a);
    let y = c* sin(a);
    if (a < PI) { //if the angle of the shape is smaller than a full circle - effected by the amplitude of the mp3
      xoff += dx; //then the x axis variable will cause the shape to follow the correct/ previously stated and increase the size of the movement accordingly
    } else {
      xoff -= dx; //otherwise, if the angle is bigger than PI then the xoff variable will be equal to or less than the stated noise, making the movement waves of the shape decrease in size 
    }
  vertex(x,y); //starting point of the shape, causes it to be connected as one rather than using point() which makes all incraments separate and without fill.
  }
  endShape(); //stops the shape 
  yoff += 0.03;
}

