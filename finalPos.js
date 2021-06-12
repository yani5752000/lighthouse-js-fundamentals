const finalPosition = function (moves) {
  let start = [0, 0];
  for(let a of moves){
    switch (a) {
      case "north":
        start[1]++;
        break;
      case "south":
        start[1]--;
        break;
      case "east":
        start[0]++;
        break;
      case "west":
        start[0]--;
        break;
      default:
        break;
    }
  }

  return start;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));
