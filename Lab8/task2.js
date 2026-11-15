// Name: Shekhar Singh
// Roll Number / Student ID: BCS2025357
// Section: D
// Lab 8 - Task 2: Class Locker with checkPin method

class Locker {
  constructor() {
    this.pin = 1234;
  }
  checkPin(num) {
    return num === this.pin;
  }
}

let locker = new Locker();
console.log(locker.checkPin(1111));
console.log(locker.checkPin(1234));
