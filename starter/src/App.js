import "./App.css";
import { useState, useEffect } from "react";
import ListBooksTitle from "./ListBooksTitle";
import ListBooksContant from "./ListBooksContent";
import { getAll } from "./BooksAPI";
import Shelf from "./BookShelf";
import {update} from "./BooksAPI";


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

 async function onChange (book, shelf) { 
        await update(book, shelf)
        setBooks(books.filter( b => b.id !== book.id ).concat( {...book, shelf} ) )
        console.log ("option changed")
        console.log(shelf); 
       }

  const currentlyReading = books.filter((book) => book.shelf === 'currentlyReading');
  const wantToRead = books.filter((book) => book.shelf === 'wantToRead');
  const read = books.filter((book) => book.shelf === 'read');

  console.log('currentlyReading', currentlyReading);
  console.log('want to read', wantToRead);
  console.log('read', read);

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
            <ListBooksContant currentlyReading={currentlyReading} wantToRead={wantToRead} read={read} onChange = {onChange} />
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
