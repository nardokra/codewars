// Name: Multiples of 3 or 5

function solution(number){
  let actual = 0;
  for (let i = 0; i < number; i++){
    if(i % 5 == 0 || i % 3 == 0){
      actual += i;
    }
  }
  return actual;
}