import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchList extends Component {
  state = {
    input: '',
    results: []
  }

  onInputChange = input => {
    this.setState({ input })
    this.searchBooks(input)
  }

  searchBooks = query => {
    BooksAPI.search(query,30).then((books) => {
      if(query.length === 0) {
        this.setState({ results: [] })
      }
      if(!!books){
        if(books.length>0){
          const results = books.map((book) => {
            const existingBook = this.props.books.find((b) => b.id === book.id)
            book.shelf = !!existingBook ? existingBook.shelf : 'none'
            return book
          });
          this.setState({ results })
        }
        else {
          this.setState({ results: [] })
        }
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
            {this.state.results.map((book, index) => (
              <li key={index}>
                <Book
                  book={book}
                  backgroundImage={book.imageLinks ? book.imageLinks.thumbnail : ""}
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
