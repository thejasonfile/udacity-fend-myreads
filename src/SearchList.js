import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchList extends Component {
  state = {
    books: [],
    input: ''
  }

  onInputChange = input => {
    this.setState({ input: input.trim() })
    this.searchBooks(input)
  }

  searchBooks = input => {
    if (input)
    BooksAPI.search(input).then(books => {
      if (!books || books.error) {
        this.setState({ books: [] })
      } else {
        this.setState({ books })
      }
    })
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className="close-search"
            >Close
          </Link>
          <div className="search-books-input-wrapper">
            {
             /*
              * NOTES: The search from BooksAPI is limited to a particular set of
              * search terms. You can find these search terms here:
              * https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              * However, remember that the BooksAPI.search method DOES search by
              * title or author. So, don't worry if you don't find a specific
              * author or title. Every search is limited by search terms.
              */
          }
            <input
              onChange={e => this.onInputChange(e.target.value)}
              value={this.state.input}
              type="text"
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map((book, index) => (
              <li key={index}>
                <Book
                  backgroundImage={book.imageLinks ? book.imageLinks.thumbnail : ""}
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  shelf={book.shelf}
                  changeShelf={this.props.changeShelf}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchList
