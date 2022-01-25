import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import App from './App';
import { createStore, combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer';
import filterReducer from './reducers/filterReducer';
import {Provider} from 'react-redux'


let store = createStore(combineReducers({

    cart: cartReducer,
    filters:filterReducer
  
  }))


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    
  ,
  document.getElementById('root')
);
reportWebVitals();
