function solve(arr){
  let newArray = arr;
  
  for ( i = 0 ; i < arr.length ; i++ ){
    let indexValue = arr[i]; 

    const removeItem = (item) => {
      newArray = newArray.filter(i => i !== item);
    }

    removeItem(arr[i]);
    newArray.push(indexValue);
  }
  console.log(newArray);
}

solve([3, 4, 4, 3, 6, 3])