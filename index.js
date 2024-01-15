const addBook = document.querySelector('.addBookToLibrary');
const bookForm = document.querySelector('.form-container');
const submit = document.querySelector('submit-button')
const dataContainer = document.querySelector('.data-container')

const myLibrary = [];

function Book (author, name, pages) {
    this.author = author;
    this.name = name;
    this.pages = pages;
}



addBook.addEventListener('click', () => {
    bookForm.style.display = 'flex';
})






bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const author = document.getElementById('author-input').value;
    const name = document.getElementById('name-input').value;
    const pages = document.getElementById('pages-input').value;

    newBook = new Book(author, name, pages);
    myLibrary.push(newBook);
    console.log(newBook);
    console.log(myLibrary)
    bookForm.style.display = 'none';

    
    const createDiv = document.createElement('div');
    createDiv.className = ('newDiv');
    const data = document.createElement('div')
    data.className = 'data'
    data.innerText = `author: ${newBook.author}, name: ${newBook.name}, pages: ${newBook.pages} `
    createDiv.appendChild(data);
    dataContainer.appendChild(createDiv);

    
});




