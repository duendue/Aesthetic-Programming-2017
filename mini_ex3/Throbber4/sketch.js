//Variabler
var r = 40;
var s = 0;
var g = 1;
var song;
var time1;
var time2;
var cake;

function preload()
{
  //Preloads
  song = loadSound('assets/Portal.mp3');
  cake = loadImage('images/portal_cake.png')
}

function setup() 
{
  
  createCanvas(1200, 600);  
  background(0);
  
  frameRate(20);
  
  song.play();
  song.setVolume(1);
  
  time1 = minute();
}

function draw() 
{
  //Blur
  fill(0, 75);
  rect(0, 0, width, height);
  
  words();
  cutoff();
  TriangleRotations()
  cutoff();
  displaycake();
}

//Tekst
function words()
{
  fill(0, 130, 196);
  textSize(100);
  textFont("Verdana");
  textStyle(ITALIC);
  text("APERTURE", width/2-250, height/2+20);
  textSize(45);
  textStyle(NORMAL);
  text("LABORATORIES", width/2-200, height/2+75);
    
}

//Rund Kant
function cutoff()
{
  stroke(0);
  strokeWeight(30);
  noFill();
  ellipseMode(CENTER);
  ellipse(200, 300, 235, 235);
}

//Trekant og Rotation
function TriangleRotations()
{
  r = r + 40
  
  if (r >= 360)
  {
    r = 0
  }
  
  push();
  translate(width/2-400, height/2);
  rotate(radians(r))

  noStroke();
  fill(0, 130, 196);
  triangle(0, 60, 60, 100, 120, 50);
  pop();
}

//EasterEgg
function displaycake()
{
  time2 = minute();
  
  if(time1 < time2-2)
  {
    image(cake, width/2, height/2)
  }
}