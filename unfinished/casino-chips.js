// Name: Casino chips

function solve(arr){
  let white = arr[0];
  let green = arr[1];
  let black = arr[2];
  let end = false;
  let count = 0;

  while(end == false){
    debugger
    if (white >= green && white >= black && green >= black){
      white -= 1;
      green -= 1;
    } else if (green >= white && green >= black && white >= black){
      green -= 1;
      white -= 1;
    } else if (black >= white && black >= green && white >= green){
      black -= 1;
      white -= 1;
    } else if (white >= black && white >= green && black >= green){
      white -= 1;
      black -= 1;
    } else if (green >= black && green >= white && black >= white){
      green -= 1;
      black -= 1;
    } else{
      green -= 1;
      black -= 1;
    }
    count ++
    if(white < 1 && black < 1 || white < 1 && green < 1 || green < 1 && black < 1){
      end = true;
    }
  }
  return count;
}


solve([1,1,1]); // 1
solve([1,2,1]); // 2
solve([4,1,1]); // 2
solve([8,2,8]); // 9
solve([8,1,4]); // 5
solve([7,4,10]); // 10
solve([12,12,12]); // 18
solve([1,23,2]); // 3