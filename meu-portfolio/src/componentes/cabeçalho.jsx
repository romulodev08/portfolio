import "../estilo/cabeçalho.css"
import { Link } from "react-router-dom"
import { Component } from "react";
export default class Cabeçalho extends Component {
    fecharMenu() {
        document.getElementById('inputBotaomenu').checked = false
    }
    render() {
        return (
            <header>
                <h1>Port<span>fólio</span></h1>
                <div className="menu">
                    <label htmlFor="inputBotaomenu" id="botaolabel">
                        <div className="trace"></div>
                        <div className="trace"></div>
                        <div className="trace"></div>
                    </label>
                    <input type="checkbox" name="inputBotaomenu" id="inputBotaomenu" />
                    <nav id="navegação" htmlFor="inputBotaomenu">
                        <Link className="link" onClick={() => this.fecharMenu()} to="/" >Início</Link>
                        <Link className="link" onClick={() => this.fecharMenu()} to="projetos" >Projetos</Link>
                        <Link className="link" onClick={() => this.fecharMenu()} to="contato" >Contato</Link>
                    </nav>
                </div>
            </header>
        )
    }

}