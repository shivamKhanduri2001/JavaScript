const students = [
  {
    name: "Shivam",
    marks: 80
  },
  {
    name: "Rahul",
    marks: 65
  },
  {
    name: "Aman",
    marks: 90
  }
];
/*
Print all student names
Print all marks
Print:
Shivam scored 80
Change Rahul marks to 70
Add:
passed: true to every student
*/
for ( const student of students){
  console.log(student.name);
}
for( const student of students){
  console.log(student.marks);
}
console.log(students[0].name + " scored " + students[0].marks);

students[1].marks = 70;

for ( const student of students){
  student.passed = true;
}
