import Shelf from "./BookShelf";

const ListBooksContant  = ({ currentlyReading , wantToRead, read, onChange }) => {
    return (
        <div>
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div> 
            <div className="list-books-content">
                <Shelf title ="Currently Reading" books = {currentlyReading} onChange = {onChange} />
                <Shelf title ="Read" books ={read} onChange = {onChange} />
                <Shelf title ="Want to read" books = {wantToRead} onChange = {onChange} />            
            </div>
       </div>
     );
}
 
export default ListBooksContant ;