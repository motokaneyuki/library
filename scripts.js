const container = document.querySelector('.container');
const submit = document.querySelector('.submitButton');
const dialog = document.querySelector('dialog');
const form = document.querySelector('form');

const sampleBook1 = new Book('James Arthur', 'To Be A Swan', 120, 'Read', crypto.randomUUID());
const sampleBook2 = new Book('Peter Artemis', 'I Want To Dance', 300, 'Reading', crypto.randomUUID());

const myLibrary = [sampleBook1, sampleBook2];

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

function addBookToLibrary(author, title, pages, read) {
    const id = crypto.randomUUID();
    const book = new Book(author, title, pages, read, id);
    myLibrary.push(book);
    clearBooks();
    dialog.close();
    form.reset();
    displayBooks();
}

function displayBooks() {
    for(let i = 0; i < myLibrary.length; i++){
        const card = document.createElement('div');
        card.classList.add('card');
        container.appendChild(card);

        const title = document.createElement('div');
        title.innerText = myLibrary[i].title.toUpperCase();
        title.classList.add('title');
        card.appendChild(title);

        const author = document.createElement('div');
        author.innerText = 'by ' + myLibrary[i].author;
        author.classList.add('author');
        card.appendChild(author);

        const pages = document.createElement('div');
        pages.innerText = 'Pages: ' + myLibrary[i].pages;
        pages.classList.add('pages');
        card.appendChild(pages);

        const read = document.createElement('div');
        read.innerText = 'Status: ' + myLibrary[i].read;
        read.classList.add('read');
        card.appendChild(read);
    }
}

function clearBooks(){
    container.replaceChildren();
}

submit.addEventListener('click', (e) => {
    console.log("submit!!")
    e.preventDefault();
    const author = document.querySelector('#author').value;
    const title = document.querySelector('#title').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').value;
    if (title == ''){
        return alert('Please input a title.');
    }
    addBookToLibrary(author, title, pages, read);
});

displayBooks();
