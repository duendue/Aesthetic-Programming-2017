//ITERATION 3: 16 PREDEFINED DATES, MUSIC WITH A SOMEWHAT FORM AND STRUCTURE, SOME USER INPUT AND VISUALS

//This is where different segments of the API is called
var apiIce = 'https://api.openweathermap.org/data/2.5/forecast/daily?q=Antarctica&cnt=16';
var apiFire = 'https://api.openweathermap.org/data/2.5/forecast/daily?q=Lut Desert&cnt=16';
var apiKey = '&APPID=2d4ad671106b186d7a7454d254a6ccd7';
var units = '&units=metric';

//Here the segments gets combined to a URL adress.
var urlIce = apiIce + apiKey + units;
var urlFire = apiFire + apiKey + units;

var i = 0;

//Variables for API Data
var IceTemp;
var IceClouds;
var IceWind;
var FireTemp;
var FireTempMin;

//Variables for Checkboxes
var checkboxMelody;
var checkboxMelody2;
var checkboxBass;
var checkboxChords;

//Variables for Visual Boxes
var MelodyBox;
var Melody2Box1;
var Melody2Box2;
var BassBox;
var ChordsBox1;
var ChordsBox2;
var ChordsBox3;

function setup() {
  createCanvas(windowWidth, windowHeight-100);
  noStroke();
  
  //Checkbox Creation
  checkboxMelody = createCheckbox('Principal Melody');
  checkboxMelody2 = createCheckbox('Second Melody');
  checkboxBass = createCheckbox('Bass');
  checkboxChords = createCheckbox('Chords');
  checkboxMelody.checked(false);
  checkboxMelody2.checked(false);
  checkboxBass.checked(false);
  checkboxChords.checked(false);
  
  //Tempo of Sounds
  setInterval(nxtDay, 500);
  setInterval(nxtDay2, 1000);
  setInterval(nxtDay3, 250);
  setInterval(nxtDay4, 2000);
  
  //Oscillators for all the "instruments" (See Notation.js file for more information)
  Melody1();
  Melody2();
  Bass();
  Chords();
}

//The following four functions are 4 different tempos for the sounds. BPM is Beats Pr Minute
 //120 BPM
function nxtDay() {
  /*
  //The JSON files from the URL's are loaded 120 times each minute through this function
  loadJSON(urlIce, gotDataIce, 'jsonp');
  loadJSON(urlFire, gotDataFire, 'jsonp');
  */
  
  //The Main Melody, Second Melody and Bass Sounds are all played here:
  oscIceBeat.freq(noteIceBeat);
  oscFireBeat.freq(noteFireBeat);
  oscFireBeat2.freq(noteFireBeat2);
  oscIceBass.freq(noteIceBass)
  
  //This is the counter that changes the tones, by moving through the weather data from the API
  i = i + 1
  if(i >= 15) {
    i = 0;
  }
}

 //60 BPM
function nxtDay2() { //60 BPM
  //The JSON files from the URL's are loaded 60 times each minute through this function
  loadJSON(urlIce, gotDataIce, 'jsonp');
  loadJSON(urlFire, gotDataFire, 'jsonp');
  
  
  //The functions are commented out here, but can be activated for future experimentation of the music tempo.
  /*
  oscIceBeat.freq(noteIceBeat);
  oscIceBass.freq(noteIceBass);
  oscFireBeat.freq(noteFireBeat);
  oscFireBeat2.freq(noteFireBeat2);
  */
  
  /*
  oscChord1.freq(Chord1);
  oscChord2.freq(Chord2);
  oscChord3.freq(Chord3);
  */
}

  //240 BPM
function nxtDay3() {
  //oscIceBeat.freq(noteIceBeat);
}

  //30 BPM
function nxtDay4() {
  //Here the i variable gets randomized to mix the music form. Also, this is where the Chords are played from
  i = floor(random(15));
  //oscIceBass.freq(noteIceBass)
  oscChord1.freq(Chord1)
  oscChord2.freq(Chord2)
  oscChord3.freq(Chord3)
}

function gotDataFire(dataFire) {
  //Here the Variables deffined earlier gets attached to specific API data
  FireTemp = dataFire.list[i].temp.day;
  FireTempMin = dataFire.list[i].temp.min;
}

function gotDataIce(dataIce) {
  //Here the Variables deffined earlier gets attached to specific API data
  IceTemp = dataIce.list[i].temp.day;
  IceClouds = dataIce.list[i].clouds;
  IceWind = floor(dataIce.list[i].speed);
}

function tune() {
  //This function is the "auto-tuner" It turns the random value from the weather data into a whole note. This is done for all the Oscillator sounds, and all the
  //Weather Data
  
  //NoteIceBeat Første Stemme Melodi
  {
  noteIceBeat = (IceTemp*(-1)*4.5);
  
  if(noteIceBeat < 250) {
    noteIceBeat = 0;
  }
  if(noteIceBeat < 277 & noteIceBeat > 250) { //C4
    noteIceBeat = 261.63;
  }
  if(noteIceBeat > 277 & noteIceBeat < 302) { //D4
    noteIceBeat = 293.66;
  }
  if(noteIceBeat > 302 & noteIceBeat < 330) { //Eb4
    noteIceBeat = 311.13;
  }
  if(noteIceBeat > 330 & noteIceBeat < 370) { //F4
    noteIceBeat = 349.23;
  }
  if(noteIceBeat > 370 & noteIceBeat < 403) { //G4
    noteIceBeat = 392.00;
  }
  if(noteIceBeat > 403 & noteIceBeat < 440) { //Ab4
    noteIceBeat = 415.30;
  }
  if(noteIceBeat > 440 & noteIceBeat < 1000) { //Bb4
    noteIceBeat = 466.16;
  }
  }
  
  //NoteIceBass Bass Stemme
  {
  noteIceBass = IceClouds
  noteIceBassFix = floor(map(noteIceBass, 0, 20, 0, 7))
  
  if(noteIceBassFix == 0) { //G2
    noteIceBass = 98.00;
  }
  if(noteIceBassFix == 1) { //Ab2
    noteIceBass = 103.83;
  }
  if(noteIceBassFix == 2) { //D3
    noteIceBass = 146.83;
  }
  if(noteIceBassFix >= 3) { //Eb3
    noteIceBass = 155.56;
  }
  }

  //noteFireBeat Anden Stemme Melodi
  {  
    noteFireBeat = FireTemp * 12;
    
    if(noteFireBeat > 250 & noteFireBeat < 311) { //D4&Gb3
      noteFireBeat = 293.66;
      noteFireBeat2 = 196.00;
    }
    if(noteFireBeat > 311 & noteFireBeat) { //E4&A3
      noteFireBeat = 329.63;
      noteFireBeat2 = 220.00;
    }
    if(noteFireBeat > 311 & noteFireBeat < 385) { //A4&D4
      noteFireBeat = 440;
      noteFireBeat2 = 293.66;
    }
    if(noteFireBeat > 385 & noteFireBeat > 600) { //B4&E4
      noteFireBeat = 493.88;
      noteFireBeat2 = 329.63;
    }
  }
  
  //noteFireChords Akkorder
  {
    noteFireChords = floor(FireTempMin);
    if(noteFireChords < 6) {
      Chord1 = 0.00;
      Chord2 = 0.00;
      Chord3 = 0.00;
    }
    
    if(noteFireChords == 6) {
      Chord1 = 261.63; //C Minor C
      Chord2 = 311.13; //C Minor Eb
      Chord3 = 392.00; //C Minor G
    }
    if(noteFireChords == 7) {
      Chord1 = 392.00; //G Minor G
      Chord2 = 466.16; //G Minor Bb
      Chord3 = 587.33; //G Minor D2
    }
    if(noteFireChords == 8) {
      Chord1 = 466.16; //Bb Bb
      Chord2 = 587.33; //Bb D2
      Chord3 = 698.46; //Bb F2
    }
    if(noteFireChords == 9) {
      Chord1 = 349.23; //F Minor F
      Chord2 = 415.30; //F Minor Ab
      Chord3 = 523.25; //F Minor C2
    }
    if(noteFireChords == 10) {
      Chord1 = 261.63; //C C
      Chord2 = 329.63; //C E
      Chord3 = 392.00; //C G
    }
    if(noteFireChords > 10) {
      Chord1 = 0.00;
      Chord2 = 0.00;
      Chord3 = 0.00;
    }
  }
}

function conductor() {
  //The conductor function controls the input from the user, and draws the soundboxes as visuals for the program. This is done by changing the amplitude
  //and essentially "turning up the volume" when a checkbox is checked, and make the volume inaudible when the opposite is the case.
  
  if(checkboxMelody.checked()) {
    oscIceBeat.amp(0.15)
    fill(75, 75, 255)
    rect(width/9, 0, 50, MelodyBox)
  }else{
    oscIceBeat.amp(0)
  }

  if (checkboxMelody2.checked()) {
    oscFireBeat.amp(0.06);
    oscFireBeat2.amp(0.06);
    fill(255, 25, 25)
    rect(width/9+100, 0, 50, MelodyBox1)
    fill(255, 175, 25)
    rect(width/9+150, 0, 50, MelodyBox2)
  }else{
    oscFireBeat.amp(0);
    oscFireBeat2.amp(0);
  }
  
  if (checkboxBass.checked()) {
    oscIceBass.amp(0.05);
    fill(75, 25, 25)
    rect(width/9+250, 0, 50, BassBox)
  }else{
    oscIceBass.amp(0);
  }
    
  if (checkboxChords.checked()) {
    oscChord1.amp(0.01);
    oscChord2.amp(0.01);
    oscChord3.amp(0.01);
    fill(100, 255, 100)
    rect(width/9+350, 0, 50, ChordsBox1)
    fill(150, 255, 100)
    rect(width/9+400, 0, 50, ChordsBox2)
    fill(25, 150, 25)
    rect(width/9+450, 0, 50, ChordsBox3)
  }else{
    oscChord1.amp(0.0);
    oscChord2.amp(0.0);
    oscChord3.amp(0.0);
  }
}

function mapping() {
  //The Mapping function is for the visual sound boxes. This is so the soundboxes doesent go beyond the canvas size.
  MelodyBox = map(noteIceBeat, 0, 400, 0, height)
  MelodyBox1 = map(noteFireBeat, 0, 800, 0, height)
  MelodyBox2 = map(noteFireBeat2, 0, 600, 0, height)
  BassBox = map(noteIceBass, 0, 400, 0, height)
  ChordsBox1 = map(Chord1, 0, 900, 0, height)
  ChordsBox2 = map(Chord2, 0, 1100, 0, height)
  ChordsBox3 = map(Chord3, 0, 1200, 0, height)
}

function draw() {
  background(211, 50)
  
  tune();
  conductor();
  mapping();
  
  textSize(100)
  fill(25, 5, 5)
  text("A song of Ice and Fire", width/2+50, 50, width/2+100, 500)
}
