import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Cart extends Component {

    render() {
        let addedBooks = this.props.books.length ?
        (
            this.props.books.map(book => {
                return (
                    <li className="collection-book avatar" key={book.id}>
                        <div className="book-img">
                            <img src={book.img} alt={book.img} className="/"/>
                        </div>
                        <div className="book-author">
                            <span className="title">{book.title}</span>
                            <p>{book.author}</p>
                            <p><b>Price: {book.price}$</b></p>
                            <p>
                                <b>Quantity: {book.quantity}</b>
                            </p>
                            <div className="add-remove">
                                <Link to="/cart"><i className="material-icons">arrow_drop_up</i></Link>
                                <Link to="/cart"><i className="material-icons">arrow_drop_down</i></Link>
                            </div>
                            <button className="waves-effect waves-light btn pink remove">Remove</button>
                        </div>
                    </li>
                )
            })
        ):
            (
                <p>Nothing.</p>
            )
            return(
                <div className="container">
                    <h5>You have purchased:</h5>
                    <div className="cart">  
                        <ul className="collection">
                            {addedBooks}
                        </ul>
                    </div>
                </div>
            )
        }
}

const mapStateToProps = (state) => {
    return {
        books: state.addedBooks
    }
}

export default connect(mapStateToProps)(Cart)
