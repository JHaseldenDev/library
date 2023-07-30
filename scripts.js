let myLibrary = [];

function Book(title, author, numPages, hasBeenRead) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.hasBeenRead = hasBeenRead;
}

function addBookToLibrary(title, author, numPages, hasBeenRead) {
  const newBook = new Book(title, author, numPages, hasBeenRead);
  myLibrary.push(newBook);
}

addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 324, true);
addBookToLibrary('1984', 'George Orwell', 328, false);

function displayBooks() {
    const libraryDiv = document.getElementById('library'); //assuming you have a div with id 'library'
    libraryDiv.innerHTML = ''; // clear the div
    
    myLibrary.forEach((book, index) => {
      const bookDiv = document.createElement('div');
      bookDiv.textContent = `${book.title} by ${book.author}, ${book.numPages} pages, read: ${book.hasBeenRead}`;
      
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => {
          removeBookFromLibrary(index);
      });
  
      const toggleReadButton = document.createElement('button');
      toggleReadButton.textContent = 'Toggle Read Status';
      toggleReadButton.addEventListener('click', () => {
          toggleReadStatus(index);
      });
  
      bookDiv.append(removeButton);
      bookDiv.append(toggleReadButton);
      libraryDiv.append(bookDiv);
    });
  }

  function removeBookFromLibrary(index) {
    myLibrary.splice(index, 1);
    displayBooks(); // refresh the display
  }

  function toggleReadStatus(index) {
    myLibrary[index].hasBeenRead = !myLibrary[index].hasBeenRead;
    displayBooks(); // refresh the display
  }
  
  document.getElementById('newBookForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const numPages = document.getElementById('numPages').value;
    const hasBeenRead = document.getElementById('hasBeenRead').checked;
  
    addBookToLibrary(title, author, numPages, hasBeenRead);
    displayBooks(); // refresh the display
  
    // Clear the form
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('numPages').value = '';
    document.getElementById('hasBeenRead').checked = false;
  });
  
  document.getElementById('newBook').addEventListener('click', function() {
    document.getElementById('newBookForm').classList.remove('hidden');
});
