let fruits = ["apples","oranges", "cherry", "grapes", "lemon"];
let indexToRemove = fruits.indexOf("lemon");
if (indexToRemove !== -1){
  fruits.splice(indexToRemove,1);
}

console.log(fruits);
