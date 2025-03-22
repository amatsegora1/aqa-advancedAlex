class Book {
    #bookname;
    #author;
    #year;

    constructor(bookname, author, year) {

        this.bookname = bookname;
        this.author = author;
        this.year = year;
    }
    get bookname() {
        return this.#bookname;
    }

    set bookname(name) {
        if (typeof name !== "string") {
            console.error(`Error: The Book Name value should be string`);
            this.#bookname = "The value is incorrect";
            return;
        }
        this.#bookname = name;
    }

    get author() {
        return this.#author;
    }

    set author(authorName) {
        if (typeof authorName !== "string") {
            console.error(`Error: The Author Name value should be string`);
            this.#author = "The value is incorrect";
            return;
        }
        this.#author = authorName;
    }

    get year() {
        return this.#year;
    }

    set year(bookYear) {
        if (typeof bookYear !== "number") {
            console.error(`Error: The Book Year value should be number`);
            this.#year = 0;
            return;
        }
        this.#year = bookYear;
    }

    printBookInfo() {
        console.log(`Book: ${this.bookname}, Book author: ${this.author}, Book Year: ${this.year}`);
    }

    static theOldestBook(books) {
        return books.sort((a, b) => a.year - b.year)[0];
    }
}

export default Book;

