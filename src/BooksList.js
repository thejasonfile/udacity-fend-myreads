import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

class BooksList extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>{this.props.title}</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf title="Currently Reading"/>
            <Bookshelf title="Want To Read"/>
            <Bookshelf title="Read"/>
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
