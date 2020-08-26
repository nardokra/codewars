// name: Stop gninnipS My sdroW!

function spinWords(string){

  let newArrayWithWords = string.split(" ");
  let newString = "";
  let theLoopWord;
  for (let i = 0; i < newArrayWithWords.length; i++){
      theLoopWord = newArrayWithWords[i];
      if (newArrayWithWords[i].length < 5) {
          newString += newArrayWithWords[i] + " ";
      } 
      else if (newArrayWithWords[i].length >= 5){
          let newReversedWord = "";
          for (let y = theLoopWord.length - 1; y >= 0; y--) {
              newReversedWord += newArrayWithWords[i][y];
          }
          newString += newReversedWord + " ";
      }
  }
  return newString.slice(0, newString.length - 1);

}