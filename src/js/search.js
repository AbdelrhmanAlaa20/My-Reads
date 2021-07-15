import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import SingularBook from './SingularBook';
import uuid from 'react-uuid';


class Find extends Component {

    state = {
        query: '',
        booksGot: [],
        notFound: false

    };

    // Grabs books from the API and update state{} . 
    grab = (e) => {
        const val = e.target.value;
        const { books, shelfChange } = this.props;
        
        this.setState(() => ({ query: val }));
        val ? (
            BooksAPI.search(val.toLowerCase().trim()).then(searchBooks => {
               searchBooks.map (searchBook => {
                   books.map ( (book) => {
                    book.title === searchBook.title 
                    ? ( 
                        searchBook.shelf = book.shelf 
                        )
                    : (searchBook.shelf = 'none') ;
                   })
               this.setState({booksGot: searchBooks, notFound: false})

               })
            }).catch(e=> console.log(e))
        ) : (this.setState({ booksGot: [], notFound: true }))


    }

    render() {
        const { booksGot, notFound } = this.state;
        const { books, shelfChange } = this.props;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Type to search"
                            onChange={this.grab}

                        />
                    </div>
                </div>
                <div className="search-books-results">
                    {booksGot ? (
                        <div>
                            <ol className="books-grid">
                                {booksGot.map((book) => (
                                    <SingularBook
                                        book={book}
                                        books={booksGot}
                                        shelfChange={shelfChange}
                                        key={uuid()}
                                    />

                                ))
                                }
                            </ol>
                        </div>

                    ) : (<div><h3> We found nothing that match what you typed</h3></div>)}
                </div>
                {notFound && (
                    <h3>
                        We found nothing that match what you typed
                    </h3>
                )}
            </div>

        )


    };


};


export default Find;
