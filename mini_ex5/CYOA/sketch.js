var ch = 0;
var riverPG = 0;
var cavePG = 0;

var x = 0;
var y = 0;
var z = 0;

var riverA = 0;
var riverB = 0;
var riverC = 0;

var caveA = 0
var caveB = 0
var caveC = 0

var rabbit = false;

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER)
}

function draw() 
{
  background(255);
  directory();
}

function keyPressed()
{
  if(key == 1)
  {
    ch = x;
    riverPG = riverA;
    cavePG = caveA
  }
  
  if(key == 2)
  {
    ch = y;
    riverPG = riverB;
    cavePG = caveB;
  }
  
  if(key == 3)
  {
    ch = z;
    riverPG = riverC;
    cavePG = caveC
  }
}

function directory()
{
  switch(ch)
  {
    case 0:
      text("John Doe is from a little village in the outskirts of The Great Forest. He has been sent into the woods to gather berries for the village chief.", width/2, height/2);
      text("He has wandered further into the woods than ever before and suddenly the path in front of you branches into two directions. Which way do you choose?", width/2, height/2+20);
      text("1. Go Right?", width/2, height/2+50);
      text("2. Go Left?", width/2, height/2+100);
      x = 1;
      y = 2;
      break;
    case 1:
      RiverPath();
      break;
    case 2:
      CavePath()
      break;
    case 3:
      text("You did it!", width/2, height/2);
      break;
    case 4:
      break;
    case 5:
      break;
    case 6:
      break;
    case 7:
      break;
    case 8:
      break;
    case 9:
      break;
    case 10:
      break;
    case 11:
      break;
  } 
}