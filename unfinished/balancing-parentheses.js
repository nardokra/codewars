function isBalanced(string, caps) {
  var splittedCaps = caps.split("");
  var countIncludes = 0;
  var stringIncludes = 0;
  var capsOriginalLength = caps.length;
  var capsUnqiue = caps.split('').filter(function(item, i, ar){ return ar.indexOf(item) === i; }).join('');
  console.log(capsUnqiue);

  for(var i = 0; i < splittedCaps.length ; i++){
    // console.log("in caps", splittedCaps[i])
    if(string.includes(splittedCaps[i])){
      // countIncludes++;
      // console.log(countIncludes);
    }
  }

  // console.log(countIncludes === caps.length);
  // return countIncludes === caps.length;
}

isBalanced("(Sensei says yes!)", "()") //true
isBalanced("(Sensei says no!", "()") //false

isBalanced("(Sensei [says] yes!)", "()[]") //true
isBalanced("(Sensei [says) no!]", "()[]") //false

isBalanced("Sensei says -yes-!", "--")//true
isBalanced("Sensei -says no!", "--") //false