
function BookShelfChanger({book, onChange }) {
    return (
        <div className="book-shelf-changer">
            <select value= {book.shelf} onChange = {onChange}> 
                <option disabled> Move to... </option>
                <option value="currentlyReading">Currently Reading </option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    );
}
 
export default BookShelfChanger;