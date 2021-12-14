import { Component } from "react";
import "../estilo/cabeçalho.css"
import { Link } from "react-router-dom"
export default class Cabeçalho extends Component {
    render() {
        return (
            <header>
                <h1>Título</h1>
                <div className="menu">
                    <label for="inputBotaomenu" id="botaolabel">
                        <div className="trace"></div>
                        <div className="trace"></div>
                        <div className="trace"></div>
                    </label>
                    <input type="checkbox" name="inputBotaomenu" id="inputBotaomenu" />
                    <nav id="navegação">
                        <Link className="link" to="/" >Início</Link>
                        <Link className="link" to="projetos" >Projetos</Link>
                        <Link className="link" to="contato" >Contato</Link>
                    </nav>
                </div>
            </header>
        )
    }
}