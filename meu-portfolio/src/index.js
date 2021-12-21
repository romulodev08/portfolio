import React from 'react';
import ReactDOM from 'react-dom';
//import Rotas from "./rotas.jsx"
import "./estilo/geral.css"
import Cabeçalho from "./componentes/cabeçalho.jsx"
import Inicial from "./componentes/inicial.jsx"
import Projetos from "./componentes/projetos.jsx"
import Contato from "./componentes/contato.jsx"
import Rodapé from "./componentes/rodapé.jsx"

ReactDOM.render(
  <React.StrictMode>
    <Cabeçalho />
    <Inicial />
    <Projetos />
    <Contato />
    <Rodapé />
  </React.StrictMode>,
  document.getElementById('root')
);
