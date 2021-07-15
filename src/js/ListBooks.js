import React from 'react'
import '../css/App.css'
import GridItem from './shelf-ing/GridItem'
import uuid from 'react-uuid';
class ListBooks extends React.Component {

    render() {
        let shelves = [
            { type: 'currentlyReading', title: 'Currently Reading' },
            { type: 'read', title: 'Read' },
            { type: 'wantToRead', title: 'Want to Read' }

        ];

        const { books, shelfChange } = this.props;
        return (
            <div>
                { shelves.map((shelf) => {
                    const filteredBooks = books.filter(book => book.shelf === shelf.type)
                    return (
                        <div className="bookshelf"key={uuid()} >
                            <h2 className="bookshelf-title">{shelf.title}</h2>
                            <div className="bookshelf-books" key={uuid()}>
                                <ol className="books-grid" key={uuid()}>
                                    <GridItem
                                        books={filteredBooks}
                                        shelfChange={shelfChange}
                                        key={uuid()}
                                    />
                                </ol>
                            </div>
                        </div>
                    )
                })}
            </div>
        )

    }   
    
    }




export default ListBooks;
