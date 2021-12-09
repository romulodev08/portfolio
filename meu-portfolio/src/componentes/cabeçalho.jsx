import { Component } from "react";
import { Link } from "react-router-dom"

export default class Cabeçalho extends Component {
    render() {
        return(
            <header>
                <div id="logo"></div>
                <nav>
                    <Link className="link" to="/" >Início</Link>
                    <Link className="link" to="projetos" >Projetos</Link>
                    <Link className="link" to="contato" >Contato</Link>
                </nav>
            </header>
        )
    }
}