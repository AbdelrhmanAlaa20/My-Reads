import React from 'react'
import * as BooksAPI from '../BooksAPI'
import '../css/App.css'
import Find from './search'
import { Link, Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import uuid from 'react-uuid'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    // get books on load
    BooksAPI.getAll().then(books => this.setState({ books }));

  }

  shelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(res => {
      book.shelf = shelf;
      this.setState(currentState => ({
        books: currentState.books
          .filter(b => b.id !== book.id).concat(book)
      }))
    })



  }

  render() {
    const { books } = this.state;
    // books.map((book)=> {
    // console.log(book.shelf);

    // })

    return (
      <div className="app">
        <Route
          exact path='/search'
          render={() => (
            <Find
              books={books}
              shelfChange={this.shelfChange}
              key={uuid()}
            />
          )} />

        <Route
          exact path='/'
          render={() =>
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <ListBooks
                  books={books}
                  shelfChange={this.shelfChange}
                  key={uuid()}
               />
              </div>
            </div>
          }
        />
        <div className="open-search">
          <button >
            <Link to='/search'>Add a book</Link>
          </button>
        </div>
      </div>
    )
  }
};

export default BooksApp;
