import React from 'react'

export default function Etapes() {
  return (

<div>
<ul>
  <li>Installer Redux Toolkit :</li>
  <ul>
    <li>Exécute la commande suivante dans le terminal :</li>
    <pre><code>npm install @reduxjs/toolkit react-redux</code></pre>
  </ul>

  <li>Créer un dossier `store` :</li>
  <ul>
    <li>Dans le répertoire de ton projet, crée un nouveau dossier appelé `store`.</li>
  </ul>

  <li>Créer le fichier `store.js` :</li>
  <ul>
    <li>Dans le dossier `store`, crée un fichier nommé `index.js`.</li>
    <li>Dans ce fichier, utilise la fonction `configureStore` de Redux Toolkit pour créer le store en spécifiant les reducers nécessaires.</li>
  </ul>

  <li>Définir l'InitialState et les Actions :</li>
  <ul>
    <li>Dans le même dossier (`store`), crée un fichier nommé `nomReducer.js` (ou tout autre nom que tu préfères).</li>
    <li>Dans ce fichier, définis un `initialState` et utilise la fonction `createAction` pour créer des constantes représentant chaque action.</li>
  </ul>

  <li>Implémenter le Reducer :</li>
  <ul>
    <li>Toujours dans `nomReducer.js`, utilise la fonction `createReducer` pour construire le reducer en gérant différentes actions.</li>
  </ul>

  <li>Englober l'Application avec le Provider :</li>
  <ul>
    <li>Dans le fichier principal de ton application (par exemple, `index.js` ou `App.js`), importe le `Provider` de React Redux et ton store.</li>
    <li>Enveloppe l'application avec le `Provider` et passe le store en tant que prop.</li>
  </ul>

  <li>Initialiser les Reducers dans le fichier `store.js` :</li>
  <ul>
    <li>Dans `store.js`, importe les reducers créés (par exemple, `nomReducer`) et ajoute-les à la configuration du store.</li>
  </ul>

  <li>Utiliser Redux dans les Composants :</li>
  <ul>
    <li>Dans les composants où tu veux utiliser Redux, importe `useDispatch` et `useSelector` depuis `react-redux`.</li>
    <li>Initialise le dispatcher avec `const dispatch = useDispatch();`.</li>
    <li>Définis des actions avec par exemple un ecouteur d'evenement dans lequel on utilise dispatch(monAction())`.</li>
    <li>Utilise `useSelector` pour obtenir des valeurs du state avec `const value = useSelector((state) = state.maValeur);`.</li>
  </ul>
</ul>

</div>

  )
}
