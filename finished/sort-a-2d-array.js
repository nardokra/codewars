// Name: Sort a 2D array

function namesSorter(departmentsArray) {
  let arrayWithAllNames = [];

  for (var i = 0; i < departmentsArray.length; i++) {
      departmentsArray[i].forEach(element => {
          arrayWithAllNames.push(element);
      });
  }

  arrayWithAllNames.sort(function (a, b) {
      if (a.length > b.length) {
          return 1;
      } else if (a.length < b.length) {
          return -1;
      } else if (a.length === b.length) {
          if (a > b){
              return 1;
          } else if (a < b){
              return -1;
          }
      }
  });
  
  return arrayWithAllNames;
}