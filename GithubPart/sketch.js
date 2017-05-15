var counter = 0;

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(255);
  textSize(35);
  text(counter, width/2, height/2);
  counter++;
}