// Name: Descending Order

function descendingOrder(n){
  let toArray = String(n).split('');
  toArray = toArray.sort().reverse();
  let newNumberString = "";
  for (i = 0; i < toArray.length; i++){
      newNumberString += toArray[i];
  }
  return Number(newNumberString);
}