import React from 'react'

const Book = props => (
  <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${props.backgroundImage}")` }}></div>
      <div className="book-shelf-changer">
        {
          /* 'defaultValue' attribute found at
          * https://reactjs.org/docs/forms.html#the-select-tag
          */
        }
        <select
          onChange={e => props.changeShelf(props.bookObject, e.target.value)}
          defaultValue={props.shelf}
        >
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <div className="book-title">{props.title}</div>
    <div className="book-authors">{props.author}</div>
  </div>
)

export default Book;
