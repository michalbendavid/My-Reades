import ShelfCurrentlyReading from "./ShelfCurrentlyReading";
import ShelfRead from "./ShelfRead";
import ShelfWantToRead from "./ShelfWantToRead";

const ListBooksContant  = ({ currentlyReading }) => {
    return (
       <div className="list-books-content">
            <ShelfCurrentlyReading currentlyReading={currentlyReading}/>
            <ShelfWantToRead/>
            <ShelfRead/>
        </div>
     
     );
}
 
export default ListBooksContant ;