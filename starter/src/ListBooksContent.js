import Shelf from "./BookShelf";

const ListBooksContant  = ({ currentlyReading , wantToRead, read, onChange }) => {
    return (
       <div className="list-books-content">
            <Shelf title ="Currently Reading" books = {currentlyReading} onChange = {onChange} />
            <Shelf title ="Read" books ={read} onChange = {onChange} />
            <Shelf title ="Want to read" books = {wantToRead} onChange = {onChange} />            
        </div>
     
     );
}
 
export default ListBooksContant ;