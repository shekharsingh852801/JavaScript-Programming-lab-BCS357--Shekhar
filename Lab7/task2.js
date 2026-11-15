// Name: Shekhar Singh
// Roll Number / Student ID: BCS2025357
// Section: D
// Lab 7 - Task 2: ES6 Book class with summary method

class Book {
  constructor(title, pages) {
    this.title = title;
    this.pages = pages;
  }
  summary() {
    return this.title + " has " + this.pages + " pages";
  }
}

let book = new Book("Algorithms", 320);
console.log(book.summary());
