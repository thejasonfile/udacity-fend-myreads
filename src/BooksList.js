import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

class BooksList extends Component {
  state = {
    books: [
     {
       backgroundImage: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
       title: "To Kill a Mockingbird",
       author: "Harper Lee",
       shelf: "Currently Reading"
     },
     {
       backgroundImage: "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api",
       title: "Ender's Game",
       author: "Orson Scott Card",
       shelf: "Want To Read"
     }
    ]
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
            <Bookshelf title="Currently Reading" books={this.filterBooks('Currently Reading')} />
            <Bookshelf title="Want To Read" books={this.filterBooks('Want To Read')} />
            <Bookshelf title="Read" books={this.filterBooks('Read')} />
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
