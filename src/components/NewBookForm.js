import React, { useState } from 'react'

export default function NewBookForm({addBook}) {

    const [title, setTitle] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addBook(title)
        setTitle('')
    }

  return (
    <form onSubmit={handleSubmit}>
        <label>Book Name:</label>
        <input 
            type="text"
            value={title} 
            required 
            onChange={(e) => setTitle(e.target.value)} />
        <input 
            type="submit" 
            value="add book" />
    </form>
  )
}
