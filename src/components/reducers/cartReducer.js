import Book1 from '../../images/elaine-howlin-eNMMw7ihJ2Y-unsplash.jpg';
import Book2 from '../../images/madalyn-cox-YoKjxdb7XLU-unsplash.jpg';
import Book3 from '../../images/sincerely-media-CXYPfveiuis-unsplash.jpg';
import Book4 from '../../images/thought-catalog-DxAzOKSiPoE-unsplash.jpg';

//Reducers specify how the application’s state changes in response to actions sent to the store.
const initState = {
    books: [
        {
            id:1,
            title:'Pride and Prejudice',
            author:"Jane Austen", 
            price:9.99,
            img: Book1
        },
        {
            id:2,
            title:'Harry Potte and the Order of the Fenix', 
            author:"J.K Rowling", 
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
    addedItems: [],
    total: 0
}

const cartReducer = (state = initState,action) => {
    return state;
}

export default cartReducer;