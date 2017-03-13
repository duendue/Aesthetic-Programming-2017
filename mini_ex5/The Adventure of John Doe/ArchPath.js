var archTxt;
var archTxtC;
var archPG = 0;
var archA = 0;
var archB = 0;
var archC = 0;
var axe = false;

function ArchPath()
{
  i = archPG;
  x = 3;
  y = 3;
  z = 3;
  
  ArchText()

  switch(archPG)
  {
    case 0: //Clearing 1
      archA = 1;
      archB = 2;
      archC = 0;
      break;
    case 1: //Leaves axe
      archA = 3;
      archB = 1;
      archC = 1;
      break;
    case 2: //Takes axe
      archA = 3;
      archB = 2;
      archC = 2;
      axe = true;
      break;
    case 3: //Archway
      if(axe) {
        archC = 6;
        text("3: Chop down the archway in an act of crime", width/12, height/3 + 180)
      }
      archA = 4;
      archB = 5;
      break;
    case 4: //Go through arch
      archA = 7;
      archB = 4;
      archC = 4;
      break;
    case 5: //Dodge around arch
      archA = 7;
      archB = 5;
      archC = 5;
      break;
    case 6: //Chop arch down
      archA = 7;
      archB = 6;
      archC = 6;
      break;
    case 7: //Ancient tree
      archA = 10;
      archB = 8;
      if (axe)
      {
        archC = 9;
        text("3: Chop down the stupid, ancient tree!", width/12, height/3 + 180);
      }
      break;
    case 8: //Gather berries
      archA = 13;
      archB = 8;
      archC = 8;
      break;
    case 9: //Chop tree
      archA = 13;
      archB = 9;
      archC = 9;
      break;
    case 10: //Investigate tree
      archA = 12;
      archB = 11;
      archC = 10;
      break;
    case 11: //Red berry
      archA = 13;
      archB = 11;
      archC = 11;
      break;
    case 12: //Blue Berry
      archA = 13;
      archB = 12;
      archC = 12;
      break;
    case 13: //restart
      archA = 0;
      archB = 0;
      archC = 0;
      ch = 0;
      break;
  }
}

function ArchText() //Denne funktion bruges til at generere tekstsegmenterne.
{
  var archTxtLB = splitTokens(archTxt[i], "//") //Her definerers der at "//" i .txt dokumenterne repræsenterer linjeskift
  var archTxtCLB = splitTokens(archTxtC[i], "//")
  
  for (sentence = 0; sentence < archTxtLB.length; sentence++) //Dette er til statementsne
  {
    text(archTxtLB[sentence], width/12, height/10 + (sentence*20)); //Ved hvert "//" flyttes placeringen for teksten sig lidt længere ned på kanvaset
  }
  
  for (sentence = 0; sentence < archTxtCLB.length; sentence++) //Dette er til spørgsmålne
  {
    text(archTxtCLB[sentence], width/12, height/2 + (sentence*20));    
  } 
}