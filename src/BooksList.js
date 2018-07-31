import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import * as BooksAPI from './BooksAPI'

class BooksList extends Component {
  state = {
    books: []
  }

  // Calls the BooksAPI when the component is mounted to the page.
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      console.log(books)
      this.setState({ books })
    })
  }

  /*
   * Function to change the book's shelf passed down to the book component.
   * It calls the get() function to get the book object and then passes this to
   * the update() function. This updates the backend information with the new
   * shelf. Then getAll() is called to refresh the state and force a render
   */
  changeShelf = (bookId, newShelf) => {
    BooksAPI.get(bookId).then(book => {
      BooksAPI.update(book, newShelf).then(books => {
        BooksAPI.getAll().then(books => {
          this.setState({ books })
        })
      })
    })
  }

  /*
   * Filters the books based on their current shelf so they are rendered
   * correctly.
   */
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
