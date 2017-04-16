//Variables for sound amplitude Data
var noteIceBeat; //Første Stemme Melodi
var noteIceBass; //Bass Stemme
var noteFireBeat; //Anden Stemme Melodi
var noteFireBeat2;
var noteFireChords; //Akorder
var Chord1, Chord2, Chord3

//Main Melody Oscillator
function Melody1(){
  oscIceBeat = new p5.Oscillator(); //Første Stemme Melodi
  oscIceBeat.setType('sine');
  oscIceBeat.amp(0);
  oscIceBeat.start();
}
 
//Second Melody Oscillators
function Melody2() { 
  oscFireBeat = new p5.Oscillator(); //Anden Stemme Melodi
  oscFireBeat.setType('sine');
  oscFireBeat.amp(0.07);
  oscFireBeat.start();
  
  oscFireBeat2 = new p5.Oscillator(); //Anden Stemme Melodi 2
  oscFireBeat2.setType('sine');
  oscFireBeat2.amp(0.07);
  oscFireBeat2.start();
}
 
//Bass Oscillator
function Bass(){ 
  oscIceBass = new p5.Oscillator(); //Bass Stemme
  oscIceBass.setType('sawtooth');
  oscIceBass.amp(0.06);
  oscIceBass.start();
}
  
//Chords Oscillators
function Chords() {
  oscChord1 = new p5.Oscillator();
  oscChord1.setType('square');
  oscChord1.amp(0.02);
  oscChord1.start();
  
  oscChord2 = new p5.Oscillator();
  oscChord2.setType('square');
  oscChord2.amp(0.02);
  oscChord2.start();
  
  oscChord3 = new p5.Oscillator();
  oscChord3.setType('square');
  oscChord3.amp(0.02);
  oscChord3.start();
}