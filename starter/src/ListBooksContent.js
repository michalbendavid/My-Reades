import Shelf from "./BookShelf";
// import ShelfCurrentlyReading from "./BookShelf";
// import ShelfRead from "./ShelfRead";
// import ShelfWantToRead from "./ShelfWantToRead";


const ListBooksContant  = ({ currentlyReading , wantToRead, read, onChange }) => {
    return (
       <div className="list-books-content">
            {/* <ShelfCurrentlyReading currentlyReading={currentlyReading}/>
            <ShelfWantToRead/>
            <ShelfRead/> */}
            <Shelf title ="Currently Reading" books = {currentlyReading} onChange = {onChange} />
            <Shelf title ="Read" books ={read} onChange = {onChange} />
            <Shelf title ="Want to read" books = {wantToRead} onChange = {onChange} />            
        </div>
     
     );
}
 
export default ListBooksContant ;