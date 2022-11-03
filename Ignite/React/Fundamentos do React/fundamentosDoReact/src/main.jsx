import React from 'react'
//Integração do Core do React com a DOM (Árvore de elementos do HTML manipulável por JavaScript)
import ReactDOM from 'react-dom/client'
import App from './App'

//Responsável por identificar o elemento raíz da página index.html que receberá todo o HTML, CSS e JavaScript que utilizarmos em nosso projeto. Ou seja, a interface existe apenas dentro do JavaScript, o que facilita o controle, manupulação e desenvolvimento. 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
