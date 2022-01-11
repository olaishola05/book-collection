const renderBooks = () => {
  const bookContainer = document.querySelector('#book-container');
  const books = JSON.parse(localStorage.getItem('books'));
  let render = '';
  for (let book = 0; book < books.length; book += 1) {
    render += `<div class="books">
        <div class="book-item">
          <div class="book">
            <span> <q>${books[book].title}</q></span> by
            <span><b>${books[book].author}</b></span>
          </div>
          <button type="button" class="book-btns" id="${books[book].id}">Remove</button>
        </div>
        
         </div>`;
  }

  bookContainer.innerHTML = render;
};

export default renderBooks;
