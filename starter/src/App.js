import "./App.css";
import { useState, useEffect } from "react";
import ListBooksTitle from "./ListBooksTitle";
import ListBooksContant from "./ListBooksContent";
import {update, getAll, search} from "./BooksAPI";
import Book from "./Book";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
    
  useEffect (() => {
    getAll().then((books) => {
      setBooks(books);
    })
  }, []); 
    
  async function searchBooks (query){
    await search(query, 20).then((results) => {
      if (!results || results.error){
        setSearchResults([])
        return };
      setSearchResults(results);
      });}
  
 async function onChange (book, shelf) { 
        await update(book, shelf)
        setBooks(books.filter(b => b.id !== book.id).concat({...book, shelf}))}

  const currentlyReading = books.filter((book) => book.shelf === 'currentlyReading');
  const wantToRead = books.filter((book) => book.shelf === 'wantToRead');
  const read = books.filter((book) => book.shelf === 'read');

  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <button
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}>
              Close
            </button>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                onChange={(event) => searchBooks(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
               {searchResults && searchResults.map((book) => <Book book={book} key={book.id} onChange = {onChange} />)}
            </ol>
          </div>
        </div>
      ) : (
          <div className="list-books">
            <ListBooksTitle/>
            <ListBooksContant currentlyReading={currentlyReading} wantToRead={wantToRead} read={read} onChange = {onChange} />
          <div className="open-search">
            <button  onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</button>
          </div>
        </div>
      )}
     </div>
  );
}

export default App;
