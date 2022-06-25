import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function BookList() {

  const [books, setBooks] = useState([
    { id: 1, title: "Don Quixote" },
    { id: 2, title: "Moby Dick" },
    { id: 3, title: "War and Peace" },
    { id: 4, title: "Brothers Karamazov" },
    { id: 5, title: "In Search of Lost Time" },
    { id: 6, title: "Ulysses" },
  ]);

  const addBook = () => {
    setBooks([...books, {id: uuidv4(), title: 'Pale Fire'}])
  }

  return (
    <div className='book-list'>
      <ul>
        {books.map((book) => {
          return <li key={book.id}>{book.title}</li>;
        })}
      </ul>
      <button onClick={addBook}>Add a book</button>
    </div>
  );
}
