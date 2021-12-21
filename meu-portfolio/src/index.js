import React from 'react';
import ReactDOM from 'react-dom';
//import Rotas from "./rotas.jsx"
import "./estilo/geral.css"
import Cabeçalho from "./componentes/cabeçalho.jsx"
import Inicial from "./componentes/inicial.jsx"
import Contato from "./componentes/contato.jsx"
import Projetos from "./componentes/projetos.jsx"

ReactDOM.render(
  <React.StrictMode>
    <Cabeçalho />
    <Inicial />
    <Projetos />
    <Contato />
  </React.StrictMode>,
  document.getElementById('root')
);
