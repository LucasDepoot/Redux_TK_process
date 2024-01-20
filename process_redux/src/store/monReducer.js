// Importe les fonctions nécessaires depuis @reduxjs/toolkit
import { createAction, createReducer } from '@reduxjs/toolkit';

// Étape 1: Définir l'initialState
const initialState = {
  // Définis ici les états initiaux de ton reducer
  // Exemple:
  nom: '',
};

// Étape 2: Créer des constantes pour chaque action
export const setNom = createAction('nomReducer/setNom');
export const setNom2 = createAction('nomReducer/setNom2');

// Étape 3: Créer le reducer avec createReducer
const monReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setNom, (state, action) => {
      // Gère ce que tu veux faire lorsqu'on appelle l'action setNom
      // Ici, met à jour le state.nom avec la valeur de l'action.payload
      state.nom = action.payload;
    })
    .addCase(setNom2,(state)=>{
         // Gère ce que tu veux faire lorsqu'on appelle l'action setNom2
    })
    // Ajoute d'autres cas pour d'autres actions si nécessaire
});

// Exporte le reducer pour l'utiliser dans ton store
export default monReducer;
