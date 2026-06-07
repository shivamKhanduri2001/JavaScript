const originalArray = [1, 2, 3];
const copyArray = [].concat(originalArray);

console.log(copyArray); // [1, 2, 3]
console.log(copyArray === originalArray);
