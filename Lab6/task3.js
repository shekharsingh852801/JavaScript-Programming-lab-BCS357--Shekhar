// Name: Shekhar Singh
// Roll Number / Student ID: BCS2025357
// Section: D
// Lab 6 - Task 3: Catch invalid JSON with try-catch

let invalidJson = "{name: Rohan}";

try {
  JSON.parse(invalidJson);
} catch (error) {
  console.log("Invalid JSON");
}
