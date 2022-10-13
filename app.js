const form = document.querySelector('form')
const booksTable = document.querySelector('#books')

const getTitle = document.getElementById('title')
const getAuthor = document.getElementById('author')
const getISBN = document.getElementById('isbn')
const submitBtn = document.getElementById('submit')


submitBtn.addEventListener('click', addBook)

function addBook(){
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
}