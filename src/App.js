import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import SearchList from './SearchList'
import BooksList from './BooksList'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }

  // Calls the BooksAPI when the component is mounted to the page.
  componentDidMount() {
    BooksAPI.getAll().then(books => {
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
      <div className="app">
        <Route path="/" exact render={() => (
          <BooksList
            title="MyReads"
            books={this.state.books}
            changeShelf={this.changeShelf}
            filterBooks={this.filterBooks}
          />
        )}/>
        <Route path="/search" render={() => (
          <SearchList
            changeShelf={this.changeShelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
