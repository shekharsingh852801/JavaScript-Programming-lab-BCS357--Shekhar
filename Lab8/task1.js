// Name: Shekhar Singh
// Roll Number / Student ID: BCS2025357
// Section: D
// Lab 8 - Task 1: Class inheritance Teacher extends Person

class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return "Hi, I am " + this.name;
  }
}

class Teacher extends Person {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }
}

let anita = new Teacher("Anita", "Maths");
console.log(anita.greet());
