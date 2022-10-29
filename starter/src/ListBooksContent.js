import ShelfCurrentlyReading from "./ShelfCurrentlyReading";
import ShelfRead from "./ShelfRead";
import ShelfWantToRead from "./ShelfWantToRead";

const ListBooksContant  = () => {
    return (
       <div className="list-books-content">
            <ShelfCurrentlyReading/>
            <ShelfWantToRead/>
            <ShelfRead/>
        </div>
     
     );
}
 
export default ListBooksContant ;