// Name: Shekhar Singh
// Roll Number / Student ID: BCS2025357
// Section: D
// Lab 7 - Task 3: Add result method to Student.prototype

function Student(name, marks) {
  this.name = name;
  this.marks = marks;
}

Student.prototype.result = function() {
  return this.marks >= 40 ? "Pass" : "Fail";
};

let asha = new Student("Asha", 88);
console.log(asha.result());
