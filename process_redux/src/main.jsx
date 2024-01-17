import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Importe les éléments nécessaires depuis react-redux
import { Provider } from 'react-redux';

// Importe le store que tu as créé précédemment
import store from './store'; // Assure-toi d'ajuster le chemin selon l'emplacement de ton store

// Englobe ton application avec le Provider et passe le store en tant que prop
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
