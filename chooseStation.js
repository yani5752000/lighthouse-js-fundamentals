const chooseStations = function(stations){
  let answers = [];

  for(a of stations){
    if(a[1] >= 20 && (a[2] === "school" || a[2] === "community centre")){
       answers.push(a[0]);
    }
  }

  return answers;
}



const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

let x = chooseStations(stations);
console.log(x);