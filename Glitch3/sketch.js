//Variabler
var glitch = 0;
var knap = true;
var osc;
var playing = false;

function setup() 
{
  //Canvas
  createCanvas(800, 600);

  
  //Baggrund
  background(125, 125, 255, 100);
  
  
  //Lyd
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(240);
  osc.amp(0);
  osc.start();
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
    };

  
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


  //BoksGrafik
  fill(230);
  stroke(0)
  rect(boks.x + glitch, boks.y + glitch, boks.z1 + glitch, boks.z2 + glitch, 1);
  fill(boks1.r, boks1.g, boks1.b);
  rect(boks1.x + glitch, boks1.y + glitch, boks1.z1 + glitch, boks1.z2 + glitch, 2);


  //Glitch
  var Glitch =
  {
    x : random(-150, 700),
    y : random(-150, 500),
    z1 : random(900),
    z2 : random(900),
    r : 15,
    g : random(255),
    b : 15,
  }
  
  
  //Tekst
  noStroke()
  fill(0);
  textSize(14)
  text("Congratulations! You are visitor number: 1!", random(228, 230), random(283, 285));
  text("Click here for prize:", random(310, 312), random(310, 312));
  
  
  //GlitchKnap
  if(!knap)
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
      boks.x = random(600)
      boks1.g = 255
      boks1.r = 15
      boks1.g = 15
      glitch = random(75)
      playing = true
  }
  
  
  //LydStart/Stop
  if (playing)
  {
    osc.amp(2, 0.05);
    playing = true
  }
  else
  {
    osc.amp(0)
    playing = false
  }
}

function mousePressed()
{
  //KlikPåKnap
  if (mouseX < 550 && mouseX > 220 && mouseY > 300 && mouseY < 325)
    {
      knap = !knap
      playing = !playing
    }
}
