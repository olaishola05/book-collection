import Books from './bookClass.js';
import renderBooks from './renderBooks.js';
import { showMsg, errMsg } from './message.js';

const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const form = document.querySelector('form');

const removeOnClicked = (button, book) => {
  book = new Books(bookTitle.value, bookAuthor.value);
  this.title = button.parentElement.children[0].children[0].innerHTML;
  book.removeBook(this.title);
};

const addBook = (book) => {
  if (bookTitle.value !== '' && bookAuthor.value !== '') {
    const id = Math.random().toString(36).slice(2);
    book = new Books(bookTitle.value, bookAuthor.value, id);
    book.setBooks(book, id);
    renderBooks();
    showMsg();
    form.reset();
  } else {
    errMsg();
  }
};

export { addBook, removeOnClicked };
