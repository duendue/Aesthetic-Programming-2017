var inc = 0.01;
var scl = 10;
var cols, rows;
var zoff = 0;
var fr;
var particles = [];
var flowfield;

var time1;
var time2;
var r = 150;
var g = 150;
var b = 250;

var rSlider, gSlider, bSlider;

function setup() 
{
  createCanvas(400, 400);
  colorMode(HSB, 255);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP(' ');
  
  flowfield = new Array(cols * rows);
  
  for (var i = 0; i < 1000; i++)
  {
    particles[i] = new Particle();
  }
  
  background(51);
  
  
  rSlider = createSlider(0.01, 0.5, 0.01, 0.16);
  rSlider.position(20, 20);
}

function draw() 
{
  inc = rSlider.value();
  
  var yoff = 0;
  for (var y = 0; y < rows; y++)
  {
    var xoff = 0;
    for (var x = 0; x < cols; x++)
    {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowfield[index] = v;
      xoff += inc;
      stroke(0, 50);
    }
    yoff += inc;
    
    zoff += 0.0003;
  }
  
  for (var i = 0; i < particles.length; i++)
  {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
    particles[i].timer();
  }
}