// Name:  Encrypt this!

var encryptThis = function (text) {
  var textToArray = text.split(" ");
  var newArray = [];
  if (textToArray.length === 1 && textToArray[0].length === 1) {
      newArray.push(textToArray[0].charCodeAt(0));
  } else {
      for (let i = 0; i < textToArray.length ; i++) {
          if (textToArray[i].length === 1) {
              let newValue = textToArray[i].charCodeAt(0)
              newArray.push(newValue);
          } else if (textToArray[i].length === 2) {
              let newValue = `${textToArray[i][0].charCodeAt(0)}${textToArray[i][1]}`;
              newArray.push(newValue);
          } else {
              let newValue = `${textToArray[i][0].charCodeAt(0)}${textToArray[i].slice(textToArray[i].length-1,textToArray[i].length)}${textToArray[i].slice(2,textToArray[i].length-1)}${textToArray[i][1]}`;
              newArray.push(newValue);
          }
      }
  }
  return newArray.join(" ");
}