// Name: Shekhar Singh
// Roll Number / Student ID: BCS2025357
// Section: D
// Lab 11 - Task 1: Block scope vs outer scope

let level = "outer";

{
  let level = "inner";
  console.log(level);
}

console.log(level);
