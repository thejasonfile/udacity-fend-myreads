import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import * as BooksAPI from './BooksAPI'

class BooksList extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }

  filterBooks = s => this.state.books.filter(book => book.shelf === s)
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>{this.props.title}</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf
              title="Currently Reading"
              books={this.filterBooks('currentlyReading')} />
            <Bookshelf
              title="Want To Read"
              books={this.filterBooks('wantToRead')} />
            <Bookshelf
              title="Read"
              books={this.filterBooks('read')} />
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
  }
}

export default BooksList
