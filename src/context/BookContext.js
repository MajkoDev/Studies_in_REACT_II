import { createContext, useState } from "react";
import uuid from "uuid/v1";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  
  const [books, setBooks] = useState([
    { id: 1, title: "Pale Fire", author: "Vladimir Nabokov" },
    { id: 2, title: "Old Man and Sea", author: "Ernest Hemingway" },
    { id: 3, title: "Animal Farm", author: "George Orwell " },
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }]);
  };
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
