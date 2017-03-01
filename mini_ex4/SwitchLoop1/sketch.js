  var img;
  var test = -35
  var col1 = '#dcede0'
  var col2 = '#abb2ad'
  var fing = false
  var fingx;
  var fingmov = -15
  var wid;
  var hei;
  var test2;
  
function preload()
{
  img = loadImage('assets/finger.png')
}

function setup() 
{
  createCanvas(windowWidth, windowHeight);  
  
  fingx = width
  wid = width/2
  hei = height/2
}

function draw() 
{
  background(250);
  
  button();
  finger();  
  knap();
}

function mousePressed() 
{
  if (!test2)
  {
    if (mouseX > wid - 87 && mouseX < wid && mouseY > hei - 50 && mouseY < hei + 150)
    {
    test2 = true
    }  
  }
  
  if(test2)
  {
    if (mouseX > wid - 18 && mouseX < wid + 112 && mouseY > hei - 50 && mouseY < hei + 150)
    {
    test2 = false
    }
  }
}

function button()
{
  push();
  translate(width/2, height/2)
  
  stroke(col2); 
  strokeWeight(2)
  fill(col1)
  rectMode(CENTER)
  rect(0, 0, 170, 100, 50)
  
  
  noStroke()
  fill(col1)
  rectMode(CENTER)
  rect(0, 0, 74, 98)
  
  
  fill(255);
  ellipse(test, 0, 95, 95)
  pop();
}

function finger()
{
  if (fing)
  {
    image(img, fingx, height/2 - 25)
    
    fingx = fingx + fingmov
    
    if (fingx < wid + 35)
    {
      test2 = false
    }
  }
}

function knap()
{
  if (test2)
  {
    test = 35
    col1 = '#45cc62'
    col2 = '#45cc62'
    fing = true
    fingmov = -15
  }
  
  if (!test2)
  {
    test = -35
    col1 = '#dcede0'
    col2 = '#abb2ad'
    fingmov = 2
  } 
}

