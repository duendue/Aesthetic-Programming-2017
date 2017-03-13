var caveTxt;
var caveTxtC;
var cavePG = 0;
var caveA = 0;
var caveB = 0;
var caveC = 0;
var rabbit = false;

function CavePath() {
i = cavePG;
x = 2;
y = 2;
z = 2;

CaveText()

  switch(cavePG) {
    case 0://Start
      caveA = 1; //press 1
      caveB = 3; //press 2
      caveC = 2; //press 3
      break;
    case 1://KillRabbit
      rabbit = true;
      caveA = 3;
      caveB = 1;
      caveC = 1;
      break;
    case 2://leave path
      cavePG = 0;
      caveA = 0;
      caveB = 0;
      caveC = 0;
      ch = 1;
      break;
    case 3://CaveEnounter
      caveA = 4;
      caveB = 3;
      caveC = 3;
      break;
    case 4: //bear
      caveA = 5;
      caveB = 9;
      caveC = 4;
      break;
    case 5: //Bear wakes up
      if(rabbit) {
        text("3: Maybe give the rabbit for the two of them to share?", width/12, height/3 + 40);
        caveC = 8;
      }
      caveA = 6;
      caveB = 7;
      break;
    case 6: // Diplomacy used: Bear forgives you, and lets you exit cave
      caveA = 9;
      caveB = 6;
      caveC = 6;
      break;
    case 7: // You die
      caveA = 10;
      caveB = 7;
      caveC = 7;
      break;
    case 8: //You give rabbit, bear is happy
      caveA = 9;
      caveB = 8;
      caveC = 8;
      break;
    case 9: //Get out of cave alive - exit cave
      caveA = 11;
      caveB = 9;
      caveC = 9;
      break;
    case 10: //RESTART
      ch = 0;
      caveA = 0;
      caveB = 0;
      caveC = 0;
      break;
    case 11: //Continue story
      ch = 3;
      caveA = 0;
      caveB = 0;
      caveC = 0;
      break;
  }
}

function CaveText() //Denne funktion bruges til at generere tekstsegmenterne.
{
  var caveTxtLB = splitTokens(caveTxt[i], "//") //Her definerers der at "//" i .txt dokumenterne repræsenterer linjeskift
  var caveTxtCLB = splitTokens(caveTxtC[i], "//")
  
  for (sentence = 0; sentence < caveTxtLB.length; sentence++) //Dette er til statementsne
  {
    text(caveTxtLB[sentence], width/12, height/10 + (sentence*20)); //Ved hvert "//" flyttes placeringen for teksten sig lidt længere ned på kanvaset
  }
  
  for (sentence = 0; sentence < caveTxtCLB.length; sentence++) //Dette er til spørgsmålne
  {
    text(caveTxtCLB[sentence], width/12, height/3 + (sentence*20));    
  } 
}
