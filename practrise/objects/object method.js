const person = {
    name: "Shivam",
    age: 25,
    sayHello: function greet(){
        return "Hello " + this.name;
    }
};
console.log(person.sayHello());
