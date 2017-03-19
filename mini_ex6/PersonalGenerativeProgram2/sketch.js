var snakes = [];
var r;
var slider1;
var twist;
var button;

function setup() 
{
  colorMode(HSB);
  createCanvas(windowWidth, windowHeight);
  background(0);
  for (var i = 0; i < 5; i++)
  {
    snakes[i] = new dot();
  }
  slider1 = createSlider(0, 5, 2, 1);
  slider1.position(20, 20);
}

function draw() 
{
  noStroke();
  fill(255, 0, 255);
  textSize(20);
  text("Change the Generation", 20, 70);
  
  backdrop();
  twist = slider1.value();
  
  for (i = 0; i < snakes.length; i++)
  {
    snakes[i].show();
    snakes[i].movement();
    snakes[i].directions();
    snakes[i].edges();
  }
}

function dot(r)
{
  this.x = width/2;
  this.y = height/2;
  this.movementX = random(-5 && 5);
  this.movementY = random(-5 && 5);
  this.h = random(255);
  this.color1 = random(255);
  this.color2 = random(255);
  this.color3 = random(255);
  this.size = random(20, 50);
  
  this.show = function()
  {
    this.h += 1;
    
    if(this.h > 500)
    {
      this.h = 0;
    }
    
    noStroke();
    fill(this.h, 200, 200);
    strokeWeight(4);
    ellipse(this.x, this.y, this.size, this.size);
  }
  
  this.movement = function()
  {
    this.x += this.movementX;
    this.y += this.movementY;
  }
  
  this.directions = function()
  {
    if(frameCount % 6 > twist)
    {
      r = floor(random(4));
    }
    
    switch(r)
    {
      case 0:
        this.movementX = 5;
        break;
      case 1:
        this.movementX = -5;
        break;
      case 2:
        this.movementY = 5;
        break;
      case 3:
        this.movementY = -5;
        break;
    }
  }
  
  this.edges = function()
  {
    if (this.x > width) 
    {
      this.x = 0;
    }
    if (this.x < 0) 
    {
      this.x = width;
    }
    if (this.y > height) 
    {
      this.y = 0;
    }
    if (this.y < 0) 
    {
      this.y = height;
    }
  }
}

function backdrop()
{
  push();
  colorMode(RGB);
  if(frameCount % 6 > 4)
  {
    fill(0, 5);
    rect(0, 0, width, height);
  }
  pop();
}