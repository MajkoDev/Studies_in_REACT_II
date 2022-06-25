import {createContext, useState} from 'react'

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { id: 1, title: "Don Quixote" },
    { id: 2, title: "Moby Dick" },
    { id: 3, title: "War and Peace" },
    { id: 4, title: "Brothers Karamazov" },
    { id: 5, title: "In Search of Lost Time" },
    { id: 6, title: "Ulysses" }
    ])
    return ( 
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;