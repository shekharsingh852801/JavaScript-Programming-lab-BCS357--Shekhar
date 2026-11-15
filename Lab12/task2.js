// Name: Shekhar Singh
// Roll Number / Student ID: BCS2025357
// Section: D
// Lab 12 - Task 2: Callback function formatMarks

function formatMarks(marks, callback) {
  return callback(marks);
}

console.log(formatMarks(76, (m) => "Marks: " + m + "/100"));
