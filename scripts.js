const myLibrary = [];

function Book(author, title, pages, read, id) {
    if (!new.target){
        throw Error("You must use the 'new' operator");
    }

    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.id = id;
}