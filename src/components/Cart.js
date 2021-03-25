import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeBook, addQuantity, subtractQuantity} from './actions/cartActions';
import Recipe from './Recipe';

class Cart extends Component {

    //to remove item
    handleRemove = (id) => {
        this.props.removeBook(id);
    }

    //add item
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }

    //substract from the quantity
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }


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
                                <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddQuantity(book.id)}}>arrow_drop_up</i></Link>
                                <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(book.id)}}>arrow_drop_down</i></Link>
                            </div>
                            <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(book.id)}}>Remove</button>
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
                    <Recipe />
                </div>
            )
        }
}

const mapStateToProps = (state) => {
    return {
        books: state.addedBooks
    }
}

export default connect(mapStateToProps, {removeBook, addQuantity, subtractQuantity})(Cart)
