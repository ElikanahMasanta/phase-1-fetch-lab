function fetchBooks() {
  document.addEventListener('DOMContentLoaded', function() {
    fetchBooks();
  });
  
  
  function fetchBooks(){
    // To pass the tests, don't forget to return your fetch!
    fetch('https://anapioficeandfire.com/api/books')
  
    return (fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(data => renderBooks(data))
  
  
    .then(json => {
      return renderBooks(json)
    })
  )
  
  }
  
  
  function renderBooks(books) {
    console.log('this is beign executed');
    console.log(`${books}`)
  
  
  function renderBooks(books) {
    const main = document.querySelector('main');
    books.forEach(book => {
      const h2 = document.createElement('h2');
      h2.innerText = book.name;
      h2.innerHTML = book.name;
      main.appendChild(h2);
  
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    fetchBooks();
  
  })