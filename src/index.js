import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = 0

const reducer = (state=initialState, action) => {
 
    if(action.type === 'PLUS'){
      return state +1
    }

    if(action.type === 'MINUS'){
      return state -1
    }
 
  return state
}
const store = createStore(reducer)




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);


reportWebVitals();
