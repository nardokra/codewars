// Name: Unique string characters

function solve(a, b) {
  let stringNotEqual = "";
  for (let i = 0; i < a.length; i++) {
      if (b.includes(a[i]) === false) {
          stringNotEqual += a[i];
      }
  }
  for (let j = 0; j < b.length; j++) {
      if (a.includes(b[j]) === false) {
          stringNotEqual += b[j];
      }
  }
  return stringNotEqual;
}