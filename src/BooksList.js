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
      console.log(books)
      this.setState({ books })
    })
  }

  changeShelf = (bookId, newShelf) => {
    BooksAPI.get(bookId).then(book => {
      BooksAPI.update(book, newShelf).then(books => {
        BooksAPI.getAll().then(books => {
          this.setState({ books })
        })
      })
    })
  }

  filterBooks = shelf => this.state.books.filter(book => book.shelf === shelf)

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
              books={this.filterBooks('currentlyReading')}
              changeShelf={this.changeShelf}
            />
            <Bookshelf
              title="Want To Read"
              books={this.filterBooks('wantToRead')}
              changeShelf={this.changeShelf}
            />
            <Bookshelf
              title="Read"
              books={this.filterBooks('read')}
              changeShelf={this.changeShelf}
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
  }
}

export default BooksList
