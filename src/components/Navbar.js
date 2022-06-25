import { useContext } from "react";
import { BookContext } from "../context/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className='navbar'>
      <h1>Summer Reading List</h1>
      <p>Currently you have {books.length} books on your list.</p>
    </div>
  );
};

export default Navbar;