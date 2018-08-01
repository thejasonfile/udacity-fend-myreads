import React from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

const BooksList = props => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>{props.title}</h1>
    </div>
    <div className="list-books-content">
      <div>
        <Bookshelf
          title="Currently Reading"
          books={props.filterBooks('currentlyReading')}
          changeShelf={props.changeShelf}
        />
        <Bookshelf
          title="Want To Read"
          books={props.filterBooks('wantToRead')}
          changeShelf={props.changeShelf}
        />
        <Bookshelf
          title="Read"
          books={props.filterBooks('read')}
          changeShelf={props.changeShelf}
        />
      </div>
    </div>
    <div className="open-search">
      <Link
        to="/search"
        >Add a book
      </Link>
    </div>
  </div>
)

export default BooksList
