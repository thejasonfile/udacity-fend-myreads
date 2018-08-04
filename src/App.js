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
   * Calls the BooksAPI update() method to change the shelf of the book
   * This code was received from a Udacity review
   */
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat(book)
      }))
    })
  }

  render() {
    return (
      <div className="app">
        <Route path="/" exact render={() => (
          <BooksList
            title="MyReads"
            books={this.state.books}
            changeShelf={this.changeShelf}
          />
        )}/>
        <Route path="/search" render={() => (
          <SearchList
            books={this.state.books}
            changeShelf={this.changeShelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
