import Books from '../modules/bookClass.js';
import renderBooks from '../modules/renderBooks.js';
import { addBook } from '../modules/removeBook.js';
import currentDate from '../modules/date.js';
import { displayBooks, showAddBook, showContact } from '../modules/navs.js';

const formBtn = document.querySelector('.formBtn');

const removeBtnTracker = document.querySelector('#book-container');

if (JSON.parse(localStorage.getItem('books')) === null) {
  localStorage.setItem('books', JSON.stringify([]));
}

window.onload = renderBooks();
formBtn.addEventListener('click', addBook);

// navs on clicks
const bookLists = document.querySelector('.books');
const addNewBook = document.querySelector('.create');
const contact = document.querySelector('.contact');

bookLists.addEventListener('click', displayBooks);
addNewBook.addEventListener('click', showAddBook);
contact.addEventListener('click', showContact);

// date
const websiteDate = document.querySelector('.date');
setInterval(() => {
  websiteDate.innerHTML = `${currentDate()}`;
}, 1000);

removeBtnTracker.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const bookId = event.target.id;
    Books.removeBook(bookId);
  }
});
