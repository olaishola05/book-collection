export default class Storage {
  static storeData(books) {
    localStorage.setItem('books', JSON.stringify(books));
  }

  static getData() {
    return JSON.parse(localStorage.getItem('books'));
  }
}
