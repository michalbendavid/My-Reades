import "./App.css";
import { useState, useEffect } from "react";
import ListBooksTitle from "./ListBooksTitle";
import ListBooksContant from "./ListBooksContent";
import { getAll } from "./BooksAPI";
import BooksList from "./BooksList";

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
            <ListBooksContant/>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
      <BooksList books={books}/>
    </div>
  );
}

export default App;
