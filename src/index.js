import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import './app.css';
import cartReducer from './components/reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(cartReducer);

ReactDom.render(
    <Provider store={store}><App /></Provider>,
    document.querySelector('#root')
);