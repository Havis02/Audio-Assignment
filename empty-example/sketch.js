let yoff = 0

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(255);
  translate(width/2, height/2);
  stroke(0);
  fill(191,213,232);
  strokeWeight(2);

  let da = PI / 100;
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