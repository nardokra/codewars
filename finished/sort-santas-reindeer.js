// name: Sort Santa's Reindeer

let reindeerNames = [
  "Dasher Tonoyan", 
  "Dancer Moore", 
  "Prancer Chua", 
  "Vixen Hall", 
  "Comet Karavani",        
  "Cupid Foroutan", 
  "Donder Jonker", 
  "Blitzen Claus"
];

function sortReindeer(reindeerNames) {
    var splitted = reindeerNames.map(function(anArray){
         splitted = anArray.split(' ');
         return splitted;
    })
       
    splitted = splitted.sort((function (index) {
        return function(a, b){
            return (a[index] === b[index] ? 0 : (a[index] < b[index] ? -1 : 1));
        };
    })(1));

    let combined = splitted.map(function (anArray) {
        return anArray.join(' ');
    })

    return combined;
}

sortReindeer(reindeerNames);