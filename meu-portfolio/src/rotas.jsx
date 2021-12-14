import Cabeçalho from "./componentes/cabeçalho.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Inicial from "./componentes/inicial.jsx"
import Contato from "./componentes/contato.jsx"
import Projetos from "./componentes/projetos.jsx"

export default function Rotas(props) {
    return(
        <div>
            <Router>
                <Cabeçalho />
                <Routes>
                    <Route path="/" element={<Inicial />} />
                    <Route path="contato" element={<Contato />} />
                    <Route path="projetos" element={<Projetos />} />
                </Routes>
            </Router>
        </div>
    )
}