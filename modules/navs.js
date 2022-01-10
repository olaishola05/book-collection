const formContainer = document.querySelector('.form-container');
const bookContainer = document.querySelector('.main-books');
const contactContainer = document.querySelector('.contact-container');

const bookLists = document.querySelector('.books');
const addNewBook = document.querySelector('.create');
const contact = document.querySelector('.contact');

function displayBooks() {
  bookContainer.style.display = 'block';
  formContainer.style.display = 'none';
  contactContainer.style.display = 'none';
  bookLists.classList.toggle('blue');
  addNewBook.classList.remove('blue');
  contact.classList.remove('blue');
}

const showAddBook = () => {
  formContainer.style.display = 'block';
  bookContainer.style.display = 'none';
  contactContainer.style.display = 'none';
  bookLists.classList.remove('blue');
  contact.classList.remove('blue');
  addNewBook.classList.toggle('blue');
};

const showContact = () => {
  contactContainer.style.display = 'block';
  formContainer.style.display = 'none';
  bookContainer.style.display = 'none';
  contact.classList.toggle('blue');
  bookLists.classList.remove('blue');
  addNewBook.classList.remove('blue');
};

export { displayBooks, showAddBook, showContact };
