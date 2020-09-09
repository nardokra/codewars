// officer can report only to somebody who is one rank higher. Count the number of officer who can report.
// [1, 0, 2, 3, 0, 2, 3] outcome is 5, only the officers with rank 3 can't report to anybody

function checkIfCanReport(arr){
  let count = 0;
  for(let i = 0 ; i < arr.length; i++){
    if(arr.includes(arr[i]+1) === true){
      count++;
    }
  }
  return count;
}

let case1 = [1, 0, 2, 3, 0, 2, 3];
let case2 = [1, 0, 2, 3, 0, 2, 3, 3, 0, 1, 3, 3, 3];

checkIfCanReport(case1);
checkIfCanReport(case2);