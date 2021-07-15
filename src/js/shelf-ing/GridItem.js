import React from 'react'
import Updater from './Updater';
import noCover from '../../icons/no-cover-image.png'
import uuid from 'react-uuid';

const GridItem = props => {


    const { books, shelfChange } = props;
    
    return (
        books.map((book) => {
            const bookCover =
            book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail
              : noCover;
        
            return (

                <li key={uuid()}>
                    <div  key={uuid()} className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookCover})` }}></div>
                            < Updater 
                                book={book}
                                books={books}
                                shelfChange={shelfChange}
                                key={uuid()}
                                />
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                    </div>
                </li>
            )


        })



    )


}

export default GridItem ;