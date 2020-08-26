// Name: Clocky Mc Clock-Face

var whatTimeIsIt = function(angle) {
  var maxDegrees = 360;
  var maxMinutes = 720;
  var degPerMin = maxMinutes / maxDegrees;
  var actualMinutes = angle * degPerMin;
  
  var minutesToHours = Math.floor(actualMinutes / 60);
  var minutesLeft = Math.floor(actualMinutes % 60);
  
  var hours = "0";
  var minutes = "0";
  
  function transferToHours (parameter){ 
      if (parameter < 10 && parameter > 0){
          return `0${parameter}`;
      } else if (parameter === 0 || parameter === 12){
          return `12`;
      } else {
          return `${parameter}`;
      }
  }
  
  function transferToMin (parameter){ 
      if (parameter < 10){
          return `0${parameter}`;
      } else {
          return `${parameter}`;
      }
  }
  
  hours = transferToHours(minutesToHours);
  minutes = transferToMin(minutesLeft);
  return `${hours}:${minutes}`; 
  
}

whatTimeIsIt(0);