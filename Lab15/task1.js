// Name: Shekhar Singh
// Roll Number / Student ID: BCS2025357
// Section: D
// Lab 15 - Task 1: checkMarks Promise resolving with marks

function checkMarks(marks) {
  return new Promise((resolve, reject) => {
    if (marks >= 0 && marks <= 100) {
      resolve(marks);
    } else {
      reject(new Error("Marks out of range"));
    }
  });
}

checkMarks(80).then((val) => {
  console.log(val);
});
