const employee = {
  name: "Shivam",
  salary: 50000,
  company: {
    name: "Google",
    location: "Bangalore"
  }
};
/*Do these:
Print salary
Print company location
Change salary to 70000
Add new property:experience: "2 years"
Print full object
*/
console.log(employee.salary);
console.log(employee.company.location);
employee.salary = 70000;
employee.experience = "2 years";
console.log(employee);
