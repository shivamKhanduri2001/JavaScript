const student = {
  name: "Shivam",
  marks: 90,

  showMarks() {
    console.log(this.name + " scored " + this.marks);
  }
};

student.showMarks();

student.marks = 95;

student.showMarks();
