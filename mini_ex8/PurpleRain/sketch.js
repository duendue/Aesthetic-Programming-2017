var rain = [];
var amount = 0;
var slider;

function setup() 
{
  createCanvas(800, 600);  
  for (var i = 0; i < 1; i++)
  {
    rain[i] = new spawn();
  }
  
  slider = createSlider(0, 10, 0)
  background(220);
}

function draw() 
{
  fill(220);
  rect(0, 0, width, height);

  for (var i = 0; i < rain.length; i++)
  {
    rain[i].move();
    rain[i].display();   
  }
  
  amount = slider.value();
  amountRain(amount);
}

function spawn()
{
  this.x = random(width);
  this.y = random(-10, 0);
  this.s = random(3, 5);
  this.z = random(1, 2);
  this.z2 = random(20);
  
  this.move = function()
  {
    this.y = this.y + this.s;   
    //this.x = this.x + this.s;
  };
  
  this.display = function()
  {
    noStroke();
    fill(0, 0, 255, 75);
    rect(this.x, this.y, this.z, this.z2);  
  };
}


function amountRain(amount)
{

  switch(amount)
   {
      case 0:
        break;
      case 1:
        for (i = 0; i < 2; i++)
        {
          rain.push(new spawn());  
        }
        break;
      case 2:
        for (i = 0; i < 3; i++)
        {
          rain.push(new spawn());  
        }
        break;
      case 3:
        for (i = 0; i < 4; i++)
        {
          rain.push(new spawn());  
        }
        break;
      case 4:
        for (i = 0; i < 5; i++)
        {
          rain.push(new spawn());  
        }
        break;
      case 5:
        for (i = 0; i < 6; i++)
        {
          rain.push(new spawn());  
        }
        break;
      case 6:
        for (i = 0; i < 7; i++)
        {
          rain.push(new spawn());  
        }
        break;
      case 7:
        for (i = 0; i < 8; i++)
        {
          rain.push(new spawn());  
        }
        break;
      case 8:
        for (i = 0; i < 9; i++)
        {
          rain.push(new spawn());  
        }
        break;
      case 9:
        for (i = 0; i < 10; i++)
        {
          rain.push(new spawn());  
        }
        break;
      case 10:
        for (i = 0; i < 11; i++)
        {
          rain.push(new spawn());  
        }
        break;
   }
   if (amount > 10)
    {
      amount = 10
    }
}
