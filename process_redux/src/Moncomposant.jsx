import React from 'react';
//Importe useDispatch et useSelector
import { useDispatch, useSelector } from 'react-redux';
//Importe l'action
import {monAction} from '../store/monreducer'

const MonComposant = () => {
  //  Initialisation du Dispatcher
  const dispatch = useDispatch();

  // Utilisation de `useSelector` pour Obtenir le Nouveau State
  const value = useSelector((state) => state.statedemande);

  // Gestion des Événements et Dispatch
  const handleClick = (e) => {
    // Gere par exemple le preventDefault
    // Dispatch de l'action
    dispatch(lactionDemandee(/* ...paramètres si nécessaire e.currentTarget.value par exemple */));
  };

  return (
    <div>
      {/* Utilisation de la constante `value` */}
      <p>Valeur actuelle : {value}</p>

      {/* Utilisation de la fonction `handleClick` comme gestionnaire d'événements */}
      <button onClick={handleClick}>Cliquez-moi</button>
    </div>
  );
};

export default MonComposant;
