// Name: Sum of pairs

function sum_pairs(array, sum){
  if (array.length < 2){
    return undefined
  }
  let set = new Set()
  for (let i = 0; i < array.length; i++){
    let numberNeeded = sum-array[i];
    if (set.has(numberNeeded)){
      return [numberNeeded,array[i]];
    }
    set.add(array[i]);
  }
  return undefined;
}