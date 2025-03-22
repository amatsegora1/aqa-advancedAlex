
import Book from './Book.js';

class EBook extends Book {
    #fileFormat;

    constructor(bookname, author, year, fileFormat) {

        super(bookname, author, year);
        this.fileFormat = fileFormat;
    }

    get fileFormat() {
        return this.#fileFormat;
    }

    set fileFormat(format) {
        if (format !== 'PDF' && format !== 'doc') {
            console.error(`Error: Invalid Book Format`);
            this.#fileFormat = "The value is incorrect";
            return;
        }
        this.#fileFormat = format;
    }

    printEBookInfo() {
        console.log(`Book: ${this.bookname}, Book author: ${this.author}, Book Year ${this.year}, File: ${this.fileFormat}`);
    }

    static bookFormating(book, fileFormat) {
        return new EBook(book.bookname, book.author, book.year, fileFormat);
    }
}

export default EBook;