import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import SearchList from './SearchList'
import BooksList from './BooksList'

class BooksApp extends Component {
  render() {
    return (
      <div className="app">
        <Route path="/" exact render={() => (
          <BooksList title="MyReads"/>
        )}/>
        <Route path="/search" render={() => (
          <SearchList />
        )}/>
      </div>
    )
  }
}

export default BooksApp
