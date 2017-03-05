  var img;
  var img2;
  var sound;
  var knap_plads = -35;
  var col1 = '#dcede0';
  var col2 = '#abb2ad';
  var fing;
  var fingx;
  var fingmov = -15;
  var wid;
  var hei;
  var aktivering;
  var sourceCode = [];
  var r = 250
  
function preload()
{
  img = loadImage('assets/finger.png');
  img2 = loadImage('assets/finger2.png');
  sourceCode[0] = loadImage('assets/SourceCode0.png');
  sourceCode[1] = loadImage('assets/SourceCode1.png');
  sourceCode[2] = loadImage('assets/SourceCode2.png');
  sourceCode[3] = loadImage('assets/SourceCode3.png');
  sound = loadSound('assets/click.mp3');
}

function setup() 
{
  createCanvas(1200, 800);  
  fingx = width;
  wid = width/2;
  hei = height/2;
}

function draw() 
{
  knap();
  button();
  finger();  
  textHeader();
}

function mousePressed() 
{
  if (mouseX > wid - 87 && mouseX < wid + 25 && mouseY > hei - 50 && mouseY < hei + 150)
  {
    aktivering = true
    sound.play();
  }  
  if (mouseX > wid + 18 && mouseX < wid + 112 && mouseY > hei - 50 && mouseY < hei + 150)
  {
     aktivering = false
     sound.play();
  }
}

function button()
{
  push();
  translate(width/2, height/2);
  stroke(col2); 
  strokeWeight(2);
  fill(col1);
  rectMode(CENTER);
  rect(0, 0, 170, 100, 50);
  noStroke();
  fill(col1);
  rectMode(CENTER);
  rect(0, 0, 74, 98);
  fill(255);
  ellipse(knap_plads, 0, 95, 95);
  pop();
}

function finger()
{
  if(fing)
  {
    image(img, fingx, height/2 - 25);
    image(img2, fingx-width, height/2 - 50)
    fingx += fingmov;
    if (fingx < wid + 35)
    {
      aktivering = false
      sound.play();
    }
  }
  if(fingx > width+50)
  {
    fingx = width+50;
    aktivering = true;
    sound.play();
  }
}

function knap()
{
  if (aktivering)
  {
    knap_plads = 35;
    col1 = '#45cc62';
    col2 = '#45cc62';
    fing = true;
    fingmov = -15;
    backImages();
  }
  if (!aktivering)
  {
    knap_plads = -35;
    col1 = '#dcede0';
    col2 = '#abb2ad';
    fingmov = 15;
    background(250);
  } 
}

function backImages()
{
  if(frameCount % 5 == 0)
  {
    r = floor(random(0, sourceCode.length));    
    background(sourceCode[r]);
  }
}

function textHeader()
{
  textSize(40)
  textAlign(CENTER)
  textStyle(BOLD)
  text("Press for Source Code", width/2, height/1.20)
}
