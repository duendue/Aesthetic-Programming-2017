function CavePath() {
x = 2
y = 2
z = 2

  switch(cavePG) {
        
    case 0:
      text("u see a rabbit", width/2, height/2);
      text("1: Kill the rabbit", width/2, height/2 + 50);
      text("2: Shout out 'cute rabbit!' and continue along the path", width/2, height/2 + 100);
      text("3: Leave path", width/2, height/2 + 150);
      caveA = 1; //press 1
      caveB = 3; //press 2
      caveC = 2; //press 3
      break;
       
    case 1:
      text("You pick up a rod from the ground, silently sneaking upon the innoscent creature thats eating dandelions, unknowingly it will be its last supper. A hearthreaking screech echoes throigh the air as you hit the rabbit over the neck with the brutal force of the rod", width/2, height/2);
      text("1: Go to cave", width/2, height/2 + 50);
            
      rabbit = true
      caveA = 3
      break;
        
    case 2://leave path
      RiverPath()
      caveA = 0;
      caveB = 0;
      caveC = 0;
      break;
            
    case 3://
      text("As you stroll down the path, you encounter a huge cave entrance. It's blackness stares into your eyes, reminding you of the abyss ahead of you...", width/2, height/2);
      text("1: Enter the cave", width/2, height/2 + 50);
          
      caveA = 4
      break;
        
    case 4: //bear
      text("as you enter the dark cave the scent of fresh forest air is replaced by a foul odor emancipating from the dank and moss-covered cavewalls. After walking deeper into the cave, you see a bear lying on the moss-covered ground. It appears to be sleeping...", width/2, height/2);
      text("1: Attempt to sneak past sleeping bear", width/2, height/2 + 50);
      text("2: Attempt to run past the sleeping bear", width/2, height/2 + 100);
            
      caveA = 9;
      caveB = 5;
      break;
            
    case 5: //Bear wakes up
      text("as you attempt to run past the bear, it wakes up. In a mad roar it blocks the exit of the cave", width/2, height/2);
      text("1: Use diplomacy", width/2, height/2 + 50);
      text("2: Attempt to flee", width/2, height/2 + 100);
            
      if(rabbit) {
        text("3:Give rabbit", width/2, height/2 + 150);
        caveC = 8
      }
            
      caveA = 6;
      caveB = 7;
      break;
       
      case 6: // Diplomacy used: Bear forgives you, and lets you exit case
        text("You use bear-diplomacy skills taught at the academy. The bear stares at you in remorse; the regret is clear. In an apologetic attitude it walks away from the cave exit, width/2, height/2", width/2, height/2)
        text("1: exit cave", width/2, height/2 + 50);
            
        caveA = 9;
        break;
            
      case 7: // You die
        text("You DIE", width/2, height/2);
        text("1: Try again from the beginning", width/2, height/2 + 50);
            
        caveA = 10;
        break;
        
      case 8: //You give rabbit, bear is happy
        text("The bear looks at you with joy in his eyes. Happily it accepts the rabbit", width/2, height/2);
        text("1: Exit the cave", width/2, height/2+50);
            
        caveA = 9;
        break;
            
      case 9: //Get out of cave alive - exit cave
        text("exits cave safely", width/2, height/2);
        text("1: continue", width/2, height/2+50)
        
        caveA = 11
        break;
            
      case 10: //RESTART
        ch = 0;
        caveA = 0;
        caveB = 0;
        caveC = 0;
        break;
            
      case 11: //Continue story
          ch = 3
          break;
    }
}