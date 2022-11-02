import Book from "./Book";
// import BookShelfChanger from "./BookShelfChanger";

// const shelfsTitle = ["Currently Reading", "Read", "Want to read"];

const Shelf = ({ books , title, onChange }) => {   
    return (
    // books.filter((book) => book.shelf === "currentlyReading") 
    <div>
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books" >
                <ol className="books-grid" >
                  {books && books.map((book) => <Book book={book} key={book.id} onChange = {onChange} />)}
                   
                </ol>
            </div>
        </div>
    </div>
     );
}
 
export default Shelf;