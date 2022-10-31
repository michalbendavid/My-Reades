import "./App.css";
import { useState, useEffect } from "react";
import ListBooksTitle from "./ListBooksTitle";
import ListBooksContant from "./ListBooksContent";
import { getAll } from "./BooksAPI";
// import BooksList from "./Book";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect (() => {
    getAll().then((books) => {
      // books
      setBooks(books);
      // console.log('books', books);
    })
  }, []); 

  console.log(books);

  const currentlyReading = books.filter((book) => book.shelf === 'currentlyReading');

  console.log('currentlyReading', currentlyReading)
  
  // [A, B,] => [C, D] :: Map
  // [1,2,3] => [2,3,4]
  // { title: 'Michal' } => <h3>{title}</h3>

  // return (

  //   <section>
  //     Planing to read
  //     <ul>
  //       {planningToRead.map((book) => <Book book={book}/>)}
  //     </ul>
  //     book1, book2, book3
  //   </section>
  //   <section>
  //     currently reading
  //     book4, book6, book7
  //   </section>
  // );

  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ) : (
          <div className="list-books">
            <ListBooksTitle/>
            <ListBooksContant currentlyReading={currentlyReading}/>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
      {/* <BooksList books={books}/> */}
    </div>
  );
}

export default App;
