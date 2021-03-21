import { ADD_QUANTITY, ADD_TO_CART, REMOVE_BOOK, SUB_QUANTITY } from './action-types/cart-actions'

//add cart action
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}

//remove item action
export const removeBook = (id) => {
    return {
        type: REMOVE_BOOK,
        id
    }
}

//subtract quantity action
export const subtractQuantity = (id) => {
    return {
        type: SUB_QUANTITY,
        id
    }
}

//add quantity action
export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        id
    }
}

