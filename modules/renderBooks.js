export default function renderBooks() {
  const bookContainer = document.querySelector('#book-container');
  const books = JSON.parse(localStorage.getItem('books'));
  let render = '';
  for (let book = 0; book < books.length; book += 1) {
    render += `<div class="books">
        <div class="book-item">
          <div class="book">
            <span>${books[book].title}</span> by
            <span>${books[book].author}</span>
          </div>
          <button type="button" class="book-btns" id="${books[book].id}">Remove</button>
        </div>
        
         </div>`;
  }

  bookContainer.innerHTML = render;
}
