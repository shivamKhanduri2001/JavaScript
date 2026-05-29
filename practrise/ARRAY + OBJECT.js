const users = [
  {
    name: "Shivam",
    age: 21
  },
  {
    name: "Rahul",
    age: 25
  }
];

/*
Do these:
Print Rahul
Print Shivam's age
Change Rahul's age to 30
Add:
city: "Delhi" to Shivam
Print full array
*/

const users = [
  {
    name: "Shivam",
    age: 21
  },
  {
    name: "Rahul",
    age: 25
  }
];

console.log(users[1].name);

console.log(users[0].age);

users[1].age = 30;

users[0].city = "Delhi";

console.log(users);
