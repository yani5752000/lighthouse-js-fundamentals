const judgeVegetable = function(a, charac){
  let char = 0;
  let best = 0;
  for(let i = 0; i < a.length; i ++){
    if(a[i][charac] > char){
      char = a[i][charac];
      best = i;
    }
  }

  return a[best].submitter;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));