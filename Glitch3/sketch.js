

function setup() 
{
  //Canvas
  createCanvas(800, 600);

  
  //Baggrund
  background(125, 125, 255, 100);
}


function draw() 
{
  //DialogBoksGrafikVariabler
  var boks = 
    {
      x : random(173, 175),
      y : random(247, 250),
      z1 : 400,
      z2 : 90,
      r : 0,
      g : 100,
      b : 100,
    }
  stroke(0)
  fill(230);
  rect(boks.x, boks.y, boks.z1, boks.z2, 1);
  
  
  //ClickBoksGrafikVariabler
  var boks1 =
  {
    x : random(220, 225),
    y : random(295, 300),
    z1 : 310,
    z2 : 20,
    r : 150,
    g : 150,
    b : random(150, 200),
  }


  //Glitch
  var Glitch =
  {
    x : random(900),
    y : random(700),
    z1 : random(900),
    z2 : random(900),
    r : 15,
    g : random(255),
    b : 15,
  }


  //DialogBoksGrafik
  fill(230);
  rect(boks.x, boks.y, boks.z1, boks.z2, 1);
  fill(boks1.r, boks1.g, boks1.b);
  rect(boks1.x, boks1.y, boks1.z1, boks1.z2, 2);
  
  
  //Tekst
  noStroke()
  fill(0);
  textSize(14)
  text("Congratulations! You are visitor number: 1!", random(228, 230), random(283, 285));
  text("Click here for prize:", random(310, 312), random(310, 312));
  
  
  //KlikPåKnap
if (mouseX < 550 && mouseX > 220 && mouseY > 300 && mouseY < 325)
  {
    if (mouseIsPressed)
    {
      stroke(15, 255, 15)
      fill(Glitch.r, Glitch.g, Glitch.b, random(150, 200))
      rect(Glitch.x, Glitch.y, Glitch.z1, Glitch.z2)
      rect(random(700), random(500), random(100), random(100))
      rect(random(700), random(500), random(100), random(100))
      rect(random(700), random(500), random(100), random(100))
      rect(random(700), random(500), random(100), random(100))
      rect(random(700), random(500), random(100), random(100))
      rect(random(700), random(500), random(100), random(100))
      rect(random(700), random(500), random(100), random(100))
      rect(random(700), random(500), random(100), random(100))
      boks1.g = 255
      boks1.r = 15
      boks1.g = 15
      
    }
  }
}