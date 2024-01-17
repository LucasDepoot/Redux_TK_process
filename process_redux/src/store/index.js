// Importe la fonction configureStore depuis @reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit';

// Importe ton reducer "nom"
import monReducer from './monReducer';
 // Assure-toi d'avoir un fichier nomReducer.js avec ton reducer.

// Utilise configureStore pour créer le store
const store = configureStore({
  reducer: {
    nom: monReducer,
    // Ajoute d'autres reducers si nécessaire
  },
});

// Exporte le store pour qu'il soit accessible depuis le reste de l'application
export default store;
