
import Book from './Book.js';

class EBook extends Book {
    constructor(bookname, author, year, fileFormat) {
        super(bookname, author, year);

        try {
            this.fileFormat = fileFormat;
        } catch (error) {
            console.error(error.message);
            this._fileFormat = 'The value is incorrect';
        }

    }

    get fileFormat() {
        return this._fileFormat;
    }
    set fileFormat(format) {
        if (format !== 'PDF' && format !== 'doc') {
            throw new Error(`Error: Invalid Book Format`)
        }
        this._fileFormat = format;
    }

    printEBookInfo() {
        console.log(`Book: ${this.bookname}, Book author: ${this.author}, Book Year ${this.year}, File: ${this.fileFormat}`);
    }

    static bookFormating(book, fileFormat) {
        return new EBook(book.bookname, book.author, book.year, fileFormat);
    }
}

export default EBook;