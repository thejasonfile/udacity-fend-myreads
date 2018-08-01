import React from 'react'
import Book from './Book'

const Bookshelf = props => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {props.books.map((book, index) => (
          <li key={index}>
            <Book
              backgroundImage={book.imageLinks.thumbnail}
              id={book.id}
              title={book.title}
              author={book.authors[0]}
              shelf={book.shelf}
              changeShelf={props.changeShelf}
            />
          </li>
        ))}
      </ol>
    </div>
  </div>
)

export default Bookshelf
