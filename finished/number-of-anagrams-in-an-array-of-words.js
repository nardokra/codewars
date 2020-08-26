// Name: Number of anagrams in an array of words

function anagramCounter(wordsArray){
  let isAnagram = 0;
  for (let i = 0; i < wordsArray.length; i++){
      for (let j = 0; j < wordsArray.length ; j++){
          if (wordsArray[i].length === wordsArray[j].length && wordsArray[i] !== wordsArray[j]){
              let timesLetterIsIncluded = 0;
              for (let x = 0; x < wordsArray[i].length; x++){
                  if (wordsArray[j].includes(wordsArray[i][x]) == true){
                      timesLetterIsIncluded += 1;
                  }
              }
              if (timesLetterIsIncluded == wordsArray[i].length){
                  isAnagram  += 1;
              }
          }
      }
  }
  return isAnagram/2;
}