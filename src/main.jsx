import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import './i18next'


import { Provider } from "react-redux";
import { store } from './stores/store.js';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <Toaster position="top-center" />
    <App />
  </Provider>
)
