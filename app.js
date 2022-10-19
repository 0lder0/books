const getTitle = document.getElementById('title')
const getAuthor = document.getElementById('author')
const getISBN = document.getElementById('isbn')
const submitBtn = document.getElementById('submit')
const table = document.getElementById('table')


submitBtn.addEventListener('click', addBook)
table.addEventListener('click', deleteBook)
document.addEventListener('DOMContentLoaded', getBook)


function addBook(e){
    let x=document.getElementById('table').insertRow(-1);
    let titleRow = x.insertCell(0);
    let authorRow = x.insertCell(1);
    let isbnRow = x.insertCell(2)
    let deleteBtn = x.insertCell(3)
    titleRow.innerHTML = getTitle.value;
    authorRow.innerHTML = getAuthor.value;
    isbnRow.innerHTML = getISBN.value;
    const a = document.createElement('a')
    a.appendChild(document.createTextNode('X'))
    a.className = 'blue-text text-darken-2'
    a.setAttribute('href', '#')
    deleteBtn.appendChild(a)

    addBookLS([getTitle.value, getAuthor.value, getISBN.value])
    getTitle.value = ''
    getAuthor.value = ''
    getISBN.value = ''
    e.preventDefault()
}

function deleteBook(e) {
    let selectedBook
    let title = e.target.parentElement.parentElement.children[0].innerText
    let author = e.target.parentElement.parentElement.children[1].innerText
    let isbn = e.target.parentElement.parentElement.children[2].innerText
    let selectedBookLS = [title, author, isbn]
    if (e.target.textContent === 'X') {
        if (confirm('Are you sure to delete this task?')) {
            selectedBook = e.target.parentElement.parentElement.rowIndex
            table.deleteRow(selectedBook)
            deleteBookLS(selectedBookLS)
        }
    }
}

function addBookLS(book) {
    let books
    if(localStorage.getItem('books') === null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
}

function deleteBookLS(book){
    let books
    if(localStorage.getItem('books') === null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }
    books.forEach((bookLS, bookIndex) => {
        const lsbook = JSON.stringify(bookLS)
        const bookK = JSON.stringify(book)
        if(lsbook === bookK){
            books.splice(bookIndex, 1)
        }
    })
    localStorage.setItem('books', JSON.stringify(books))
}

function getBook (){
    let books
    if(localStorage.getItem('books') === null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }
    books.forEach((book) => {
        console.log(book[0])
        let x=document.getElementById('table').insertRow(-1);
        let titleRow = x.insertCell(0);
        let authorRow = x.insertCell(1);
        let isbnRow = x.insertCell(2)
        let deleteBtn = x.insertCell(3)
        titleRow.innerHTML = book[0];
        authorRow.innerHTML = book[1];
        isbnRow.innerHTML = book[2];
        const a = document.createElement('a')
        a.appendChild(document.createTextNode('X'))
        a.className = 'blue-text text-darken-2'
        a.setAttribute('href', '#')
        deleteBtn.appendChild(a)
    })
}