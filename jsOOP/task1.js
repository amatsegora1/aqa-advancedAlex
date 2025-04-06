import Book from './Book.js';
import EBook from './EBook.js';
import chalk from 'chalk';

//Several Books creation (task 1)
console.log(chalk.red.bold('Print book info:'));
const firstBook = new Book('1984', 'George Orwell', 1949);
const secondBook = new Book('To Kill a Mockingbird', 'Harper Lee', 1960);
//Print info about books (task 1)
firstBook.printBookInfo();
secondBook.printBookInfo();

//Several EBooks creation (task 2)
console.log(chalk.blue.bold('Print EBook info:'));
const firstEBook = new EBook('1984', 'George Orwell', 1949, 'PDF');
const secondEBook = new EBook('To Kill a Mockingbird', 'Harper Lee', 1960, 'doc');
//Print info about EBooks (task 2)
firstEBook.printEBookInfo();
secondEBook.printEBookInfo();

//Books array (task 4)
const books = [
    new Book('Moby-Dick', 'Herman Melville', 1851),
    new Book('Pride and Prejudice', 'Jane Austen', 1813),
    new Book('War and Peace', 'Leo Tolstoy', 1869)
    ]
//The Oldest book define (task 4)
console.log(chalk.green.bold('The oldest book from Books array:'));
let oldestBook = Book.theOldestBook(books);
oldestBook.printBookInfo();

//Book to Ebook (task 5)
console.log(chalk.yellow.bold('Book to EBook transformation'));
const regularBook = new Book('1984', 'George Orwell', 1949);
let bookToEBook = EBook.bookFormating(regularBook, 'PDF');
bookToEBook.printEBookInfo();