import React from 'react';

const BooksList = ({ books }) => {
    return (
        <ul>
            {books.map((book) => <Book book={book}/>)}
        </ul>
    )
};

export default BooksList;
