function RiverPath()
{
  y = 1;
  switch(riverPG)
  {
    case 0: //Wild Deer
      text("You continue down the path for a while. A wild deer jumps casually away in front of you. What would you like to do?", width/2, height/2);
      text("1: Follow the path further into the forest.", width/2, height/2 + 50);
      text("2: Stroll away from the path and go into the woods.", width/2, height/2 + 100);
      riverA = 1;
      riverB = 2;
      break;
    case 1: //Encounter River
      text("You come across a small creek... No wait, let's say it's a large roaring river. It's atleast 50 meters wide. What would you like to do?", width/2, height/2);
      text("1: Attempt to swim across the river.", width/2, height/2 + 50);
      text("2: Walk along the river and look for a way to get over.", width/2, height/2 + 100);
      riverA = 3;
      riverB = 4;
      break;
    case 2: //StrollFromPath
      CavePath();
      riverA = 0;
      riverB = 0;
      riverC = 0;
      break;
    case 3: //SwimAcross
      text("As you get further and further into the waters, you start to feel a strong current from the stream of water. Are you sure you want to continiue over?", width/2, height/2);
      text("1: Turn arround and swim back.", width/2, height/2 + 50);
      text("2: Continioue over the river.", width/2, height/2 + 100);
      riverA = 5;
      riverB = 6;
      break;
    case 4: //ReachBridge
      text("You reach a bridge. Would you like to walk over or keep going down the river?", width/2, height/2);
      text("1: Cross the bridge.", width/2, height/2 + 50);
      text("2: Walk down the river.", width/2, height/2 + 100);
      riverA = 7;
      riverB = 8;
      break;
    case 5: //ReturnFromRiver
      text("As you climb ashore, dripping with ice cold water, you question your poor life decisions", width/2, height/2);
      text("1: Walk along the river and look for a way to get over.", width/2, height/2 + 50);
      riverA = 4;
      break;
    case 6: //Drowning
      text("As you are nearing the other edge of the river, a sudden rush of water pulls you downwards to the bottom of the water. Exhausted as you are, the energy starts to leave your body, and the darkness starts to engolf you. You drown.", width/2, height/2);
      text("1: Try again from the beginning.", width/2, height/2 + 50);
      riverA = 9;
      break;
    case 7: //Cross Bridge
      text("You cross the bridge and reach the other end of the river. You follow the path into the forest", width/2, height/2);
      text("1: Continiue", width/2, height/2 + 50);
      riverA = 10;
      break;
    case 8: //Walk downwards the river
      text("You spend the rest of your day walking down the river, without reaching any point which allows for crossing. You realize you haven't gathered any berries for the village chief, and you start crying over you dead parrots.", width/2, height/2);
      text("1: Try again from the beginning.", width/2, height/2 + 50);
      riverA = 9;
      break;
    case 9: //Restart
      ch = 0;
      riverA = 0;
      riverB = 0;
      riverC = 0;
      break;
    case 10: //StoryContinues
      ch = 3;
      break;
  }
}