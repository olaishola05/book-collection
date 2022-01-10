/* eslint-disable import/no-cycle */
import Storage from './storage.js';
import renderBooks from './renderBooks.js';

const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');

export default class Books {
  constructor(title = null, author = null, id = null) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  setBooks(book, id) {
    this.books = Storage.getData('books');
    book = new Books(bookTitle.value, bookAuthor.value, id);
    this.books.unshift(book);
    Storage.storeData(this.books);
  }

  static removeBook(bookId) {
    this.books = Storage.getData('books');
    this.books = this.books.filter((book) => book.id !== bookId);
    Storage.storeData(this.books);
    renderBooks();
  }
}
