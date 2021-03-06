var img = [];

var sliders = [];

var vScale = 25;

var cols = 25;
var rows = 25;

var boxes = [];

var i = 0;

var input;

var happy;
var sad;
var angry;
var crazy;
var scared;

var angle = 0
var vTest = 0

function preload()
{
  //Here is where the images and icons are loaded
  img[0] = loadImage("assets/background.png");
  img[1] = loadImage("assets/face1.png");
  img[2] = loadImage("assets/face2.png");
  img[4] = loadImage("assets/face4.png");
  img[5] = loadImage("assets/face5.png");
  img[8] = loadImage("assets/face8.png");
  img[9] = loadImage("assets/apple.jpeg");
  
  //Strings of different emotions 
  happy = loadStrings("assets/happy.txt");
  sad = loadStrings("assets/sad.txt");
  angry = loadStrings("assets/angry.txt");
  crazy = loadStrings("assets/crazy.txt");
  scared = loadStrings("assets/scared.txt");
}

function setup() {
  noCanvas();
  pixelDensity(1);

  //This creates sliders
  for (var t = 0; t < 10; t++)
  {
    sliders[t] = createSlider(0, 255, 127)
    sliders[t].position(550, 25 + (50 * t))
  }

  //This creates the textbox
  input = createInput("How do you feel?");
  input.position(200, 525)
  
  //This creates the checkboxes
  for (var y = 0; y < rows; y++) {
    for (var x = 0; x < cols; x++) {
      var box = createCheckbox();
      box.style('display', 'inline');
      box.parent('mirror');
      boxes.push(box);
    }
    var linebreak = createSpan('<br/>');
    linebreak.parent('mirror');
  }  
}

function draw() {
  background(51);

  sliderMove();
  masks();
  overlay();
}

//This function controls the movement of the sliders through the variabels angle and vTest. These variables changes depending on the emotion.
function sliderMove()
{
  var offset = 0
  for (var t = 0; t < sliders.length; t++)
  {
    var slid = map(sin(angle+offset), -1, 1, 0, 255)
    sliders[t].value(slid)
    offset += vTest;
  }  
}

//This function splits the textbox input into an array, which then gets compared to the stringarrays of the different .txt files of emotions
function masks(){

  var words = input.value();
  var sentences = split(words, " ")

  //Happy  
  var foundHappy = false;
  for (var i1 = 0; i1 < sentences.length && !foundHappy; i1++){  
    for (var j1 = 0; j1 < happy.length && !foundHappy; j1++) {
      if (happy[j1] == sentences[i1]) {
        foundHappy = true;
        i = 8;
        angle += 0.05 
        vTest = 0.25
      }
    }
  }
  
  //Angry
  var foundAngry = false;
  for (var i2 = 0; i2 < sentences.length && !foundAngry; i2++){
    for (var j2 = 0; j2 < angry.length && !foundAngry; j2++){
      if (angry[j2] == sentences[i2]){
        foundAngry = true;
        i = 5;
        angle += 0.5
        vTest = 0.8
      }
    }
  }
  
  //Crazy
  var foundCrazy = false;
  for (var i3 = 0; i3 < sentences.length && !foundCrazy; i3++){
    for (var j3 = 0; j3 < crazy.length && !foundCrazy; j3++){
      if (crazy[j3] == sentences[i3]){
        foundCrazy = true;
        i = 4;
        angle += 0.02
        vTest = random(0.1, 0.55)
      }
    }
  }
  
  //Sad
  var foundSad = false;
  for (var i4 = 0; i4 < sentences.length && !foundSad; i4++){
    for (var j4 = 0; j4 < sad.length && !foundSad; j4++){
      if (sad[j4] == sentences[i4]){
        foundSad = true;
        i = 1;
        angle += 0.009
        vTest = 0.95
      }
    }
  }
  
  //Scared
  var foundScared = false;
  for (var i5 = 0; i5 < sentences.length && !foundScared; i5++){
    for (var j5 = 0; j5 < scared.length && !foundScared; j5++){
      if (scared[j5] == sentences[i5]){
        foundScared = true;
        i = 2;
        angle += 0.3
        vTest = 0.01
      }
    }
  }
  
  //Apple :)
  var foundApple = false
  for (var i6 = 0; i6 < sentences.length && !foundApple; i6++){
    if ("apple" == sentences[i6]){
    foundApple = true;
    i = 9;
    angle += 0.05 
    vTest = 0.25
    }
  } 
}

//The overlay function works as a "filter". It converts the loaded images into checkbox image by loading the pixel data. If the pixel is brighter than a given value,
//then a checkbox will be set to "checked"
function overlay()
{
  img[i].resize(vScale, vScale);
  img[i].loadPixels();
  loadPixels();

  for (var y = 0; y < img[i].height; y++) {
    for (var x = 0; x < img[i].width; x++) {
      
      var index = (x + y * img[i].width)*4
      var r = img[i].pixels[index+0];
      var g = img[i].pixels[index+1];
      var b = img[i].pixels[index+2];
      
      var bright = (r+g+b)/3;
      
      var threshold = 35;
      
      var checkIndex = x + y * cols;
      
      if (bright < threshold)
      {
        boxes[checkIndex].checked(false);
      } else {
        boxes[checkIndex].checked(true);
      }

      noStroke();
      rectMode(CENTER);
      rect(x*vScale, y*vScale, vScale, vScale);
    }
  } 
}