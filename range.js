const range = function(start, end, step){
  let list = [];
  
  if(start === undefined || end === undefined || step === undefined){
    return list;
  } 
  if(start > end){
    return list;
  }
  if(step <= 0){
    return list;
  }

  

  for(let i = start; i <= end; i++){
    if((i - start) % step === 0){
      list.push(i);
    }
  }

  return list;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
