var riverTxt;
var riverTxtC;
var riverPG = 0;
var riverA = 0;
var riverB = 0;

function RiverPath()
{
  i = riverPG;
  x = 1;
  y = 1;
  z = 1;
  
  RiverText()

  switch(riverPG)
  {
    case 0: //Wild Deer
      riverA = 1;
      riverB = 2;
      break;
    case 1: //Encounter River
      riverA = 3;
      riverB = 4;
      break;
    case 2: //StrollFromPath
      riverPG = 0;
      ch = 2;
      break;
    case 3: //SwimAcross
      riverA = 5;
      riverB = 6;
      break;
    case 4: //ReachBridge
      riverA = 7;
      riverB = 8;
      break;
    case 5: //ReturnFromRiver
      riverA = 4;
      break;
    case 6: //Drowning - END
      riverA = 9;
      break;
    case 7: //Cross Bridge
      riverA = 10;
      break;
    case 8: //Walk downwards the river - END
      riverA = 9;
      break;
    case 9: //Restart
      ch = 0;
      riverA = 0;
      riverB = 0;
      break;
    case 10: //StoryContinues
      ch = 3;
      riverA = 0;
      riverB = 0;
      break;
  }
}

function RiverText() //Denne funktion bruges til at generere tekstsegmenterne.
{
  var riverTxtLB = splitTokens(riverTxt[i], "//") //Her definerers der at "//" i .txt dokumenterne repræsenterer linjeskift
  var riverTxtCLB = splitTokens(riverTxtC[i], "//")
  
  for (sentence = 0; sentence < riverTxtLB.length; sentence++) //Dette er til statementsne
  {
    text(riverTxtLB[sentence], width/12, height/10 + (sentence*20)); //Ved hvert "//" flyttes placeringen for teksten sig lidt længere ned på kanvaset
  }
  
  for (sentence = 0; sentence < riverTxtCLB.length; sentence++) //Dette er til spørgsmålne
  {
    text(riverTxtCLB[sentence], width/12, height/3 + (sentence*20));    
  } 
}