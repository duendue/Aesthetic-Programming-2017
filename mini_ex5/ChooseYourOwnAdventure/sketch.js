var ch = 0; //variablen ch bruges til at definere det overordnede "chapter" for eventyret
var x = 0; //x tilknyttes ch variablen når der trykkes "1"
var y = 0; //y tilknyttes ch variablen når der trykkes "2"
var z = 0; //z tilknyttes ch variablen når der trykkes "3"

function preload()
{
  setupTxt = loadStrings('assets/setup.txt');
  
  caveTxt = loadStrings('assets/cave.txt');
  caveTxtC = loadStrings('assets/caveC.txt');
  
  riverTxt = loadStrings('assets/river.txt');
  riverTxtC = loadStrings('assets/riverC.txt');
  
  treeTxt = loadStrings('assets/tree.txt');
  riverTxtC = loadStrings('assets/treeC.txt');
}

function setup() 
{
  createCanvas(windowWidth, windowHeight);
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
    cavePG = caveA;
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
    cavePG = caveC;
  }
}

function directory()//Casesne i directoryfunktionen beskriver de forskellige kapitler i historien. Her kan der tilføjes flere kapitler efterhånden som der udvides
{
  switch(ch)
  {
    case 0:
      for(i = 0; i < setupTxt.length; i++)
      {
        text(setupTxt[i], width/12, height/5 + (i * 15));
      }
      x = 1;
      y = 2;
      break;
    case 1:
      RiverPath();
      break;
    case 2:
      CavePath();
      break;
    case 3:
      TreePath();
      break;
    case 4:
      break;
    case 5:
      break;

  } 
}
