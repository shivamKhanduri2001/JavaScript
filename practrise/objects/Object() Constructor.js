const num = 42;
const numObj = Object(num);

console.log(num);
console.log(numObj);
console.log(typeof(numObj));

const newObj = new Object(undefined);
console.log(newObj);
