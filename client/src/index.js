import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/store';  // Import the store from redux
import { Provider } from 'react-redux';  // Import the Provider from react-redux

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( // Wrap the entire application with the Provider component and pass the store as a prop
  <Provider
    store={store}
  >
    <App />
  </Provider>
);