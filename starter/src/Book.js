import React from 'react';
import BookShelfChanger from "./BookShelfChanger";

const Book = ({ book , onChange }) => {
    function changeShelf (event) {
        onChange(book, event.target.value) 
      }
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
                style={{
                  width: 128,
                  height: 192,
                  backgroundImage: `url(${book.imageLinks.thumbnail})`
                 }}
           ></div><BookShelfChanger book={book} onChange = {changeShelf}/></div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
       </div>
      </li>
    )
};


export default Book ;
