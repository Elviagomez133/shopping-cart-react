import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    handleClick = (id) => {
        this.props.addToCart(id);
    }

    render() {
        let booksList = this.props.books.map(book => {
            return(
                <div className="card" key={book.id}>
                    <div className="card-image">
                        <img src={book.img} alt={book.title}/>
                        <span className="card-title">{book.title}</span>
                        <span to="/" className="btn-add">add-icon</span>
                    </div>
                    <div className="card-content">
                        <p>{book.author}</p>
                        <p><b>Price: {book.price}$</b></p>
                    </div>
                </div>
            )
        })
        return (
            <div className="container">
                <h3>Our Books of the Month</h3>
                <div>
                    {booksList}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books
    }
}

// const mapStateToProps = (dispatch) => {
//     return {
//         addToCart: (id) => { dispatch(addToCart(id))}
//     }
// }


//Connect the Page who is going to display, with
//the things the page need to display
//the mapState takes the state in the reducer
//an pass it as props in the file in order to manipulate it.
export default connect(mapStateToProps)(Home);