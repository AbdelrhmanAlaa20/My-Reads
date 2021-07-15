import React from 'react'
import '../css/App.css'
import noCover from '../icons/no-cover-image.png'
import Updater from './shelf-ing/Updater'
import uuid from 'react-uuid';


const SingularBook = props => {
    const { book, books, shelfChange } = props;


    const bookCover =
        book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail
            : noCover;

    return (
        <li key={uuid()}>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover"
                        style={{ width: 128, height: 193, backgroundImage: `url(${bookCover})` }}></div>
                    < Updater
                        book={book}
                        books={books}
                        shelfChange={shelfChange}
                        key={uuid()}
                    />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
            </div>
        </li>

    )




}

export default SingularBook;
