var lines, markov, data1, data2, x = 160, y = 240;

function preload() {
  data1 = loadStrings('assets/clinton.txt');
  data2 = loadStrings('assets/trump.txt');
}

function setup() {

  createCanvas(500, 500);
  textFont('times', 20);
  textAlign(LEFT);

  lines = ["click to (re)generate speech!"];

  markov = new RiMarkov(4);

  markov.loadText(data1.join(' '));
  markov.loadText(data2.join(' '));

  drawText();
}

function drawText() {
  text(lines.join(' '), x, y, 400, 400);
}

function mouseClicked() {
  background(200, 200, 250)
  x = y = 50;
  lines = markov.generateSentences(10);
  drawText();
}
