class Book {
    constructor(bookname, author, year) {
        try {
            this.bookname = bookname;
        } catch (error) {
            console.error(error.message);
            this._bookname = 'The value is incorrect';
        }

        try{
            this.author = author;
        } catch (error){
            console.error(error.message);
            this._author = 'The value is incorrect';
        }

        try{
            this.year = year;
        } catch (error){
            console.error(error.message);
            this._year = 'The value is incorrect';
        }    
    }

    get bookname() {
        return this._bookname;
    }

    set bookname(name) {
        if (typeof name != "string") {
            throw new Error(`Error: The Book Name value should be string`)
        }

        this._bookname = name;

    }

    get author() {
        return this._author;
    }

    set author(authorName) {
        if (typeof authorName != "string") {
            throw new Error('Error: The Author Name value should be string')
        }

        this._author = authorName;

    }

    get year() {
        return this._year;
    }

    set year(bookYear) {
        if (typeof bookYear != "number") {
            throw new Error('Error: The Year value should be a number')
        }

        this._year = bookYear;

    }

    printBookInfo() {
        console.log(`Book: ${this.bookname}, Book author: ${this.author}, Book Year: ${this.year}`);
    }

    static theOldestBook (books){
       return books.sort((a, b) => a.year - b.year)[0];
    }
}

export default Book;

