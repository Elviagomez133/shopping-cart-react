import Book1 from '../../images/photo-1614544048536-0d28caf77f41.jpg';
import Book2 from '../../images/photo-1610558495616-9ce40f904dde.jpg';
import Book3 from '../../images/sincerely-media-CXYPfveiuis-unsplash.jpg';
import Book4 from '../../images/thought-catalog-DxAzOKSiPoE-unsplash.jpg';
import { ADD_TO_CART, REMOVE_BOOK, SUB_QUANTITY, ADD_QUANTITY} from '../actions/action-types/cart-actions';

//Reducers specify how the application’s state changes in response to actions sent to the store.
const initState = {
    books: [
        {
            id:1,
            title:'A Court of Mist and Fury',
            author:"Sarah J. Maas", 
            price:9.99,
            img: Book1
        },
        {
            id:2,
            title:'The little book of HYGGE', 
            author:"Meik Wiking", 
            price:14.99,
            img:Book2
        },
        {
            id:3,
            title:'Milk and Honey', 
            author:"Rupi Kaur", 
            price:18.99,
            img:Book3
        },
        {
            id:4,
            title:'Your soul is a River', 
            author:"Nikita Gill", 
            price:6.99,
            img:Book4
        },
    ],
    addedBooks: [],
    total: 0
}

const cartReducer = (state = initState,action) => {
    //Inside Home Component
    if(action.type === ADD_TO_CART) {
        let addedBook = state.books.find(book => book.id === action.id)
        //check if the action id exists in the addedBooks
        let existed_book = state.addedBooks.find(book => action.id === book.id)
        if(existed_book) {
            addedBook.quantity += 1
            return{
                ...state,
                total: state.total + addedBook.price
            }
        } else {
            addedBook.quantity = 1;
            //Calculating the total
            let newTotal = state.total + addedBook.price
            return {
                ...state,
                addedBooks: [...state.addedBooks, addedBook],
                total: newTotal
            }
        }
    }
    if(action.type === REMOVE_BOOK) {
        let bookToRemove = state.addedBooks.find(book => action.id === book.id)
        let new_books = state.addedBooks.filter(book => action.id !== book.id)

        //calculating the total
        let newTotal = state.total - (bookToRemove.price * bookToRemove.quantity)
        console.log(bookToRemove)
        return {
            ...state,
            addedBooks: new_books,
            total: newTotal
        }
    }

    //inside the cart component
    if(action.type === ADD_QUANTITY) {
        let addedBook = state.books.find(book => book.id === action.id)
        addedBook.quantity += 1
        let newTotal = state.total + addedBook.price
        return {
            ...state,
            total: newTotal
        }
    }
    if(action.type === SUB_QUANTITY) {
        let addedBook = state.books.find(book => book.id === action.id)
        if(addedBook.quantity === 1) {
            let new_books = state.addedBooks.filter(book => book.id !== action.id)
            let newTotal = state.total - addedBook.price
            return {
                ...state,
                addedBooks: new_books,
                total: newTotal
            }
        } 
        else {
            addedBook.quantity -= 1
            let newTotal = state.total - addedBook.price
            return {
                ...state,
                total: newTotal
            }
        }
    }
    return state    
}

export default cartReducer;