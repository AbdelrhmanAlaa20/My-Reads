import React from 'react'
import uuid from 'react-uuid';


class Updater extends React.Component {

    move = e => {
        this.props.shelfChange(this.props.book, e.target.value)
    }


    render() {
        let currentShelf ;
        const {book, books} = this.props;

        for (let item of books) {
            if (item.id === book.id) {
              currentShelf = item.shelf;
              break;
            }
          }

 
        return (
            <div className="book-shelf-changer" key={uuid()}>
                <select onChange={this.move} defaultValue={currentShelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>


        )
    }




}

export default Updater ;