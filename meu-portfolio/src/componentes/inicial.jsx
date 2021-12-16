import { Component } from "react"

import "../estilo/inicial.css"

import FotoDePerfil from "../imagens/foto-do-currículo.jpeg"
import Curriculo from "../documentos/currículoFrontEndJrRom-5.pdf"
export default class Inicial extends Component {
    constructor(props) {
        super(props)
        this.state = {
            saudação: "Olá"
        }
    }
    componentDidMount() {
        const saudar = ["Bom dia", "Boa tarde", "Boa noite"]
        setInterval(() => {
            const hora = new Date().getHours()
            if(hora >= 6 && hora < 12) {
                this.setState({saudação: saudar[0]})
            } else if(hora >= 12 && hora < 18) {
                this.setState({saudação: saudar[1]})
            } else if(hora >= 18 || hora < 6) {
                this.setState({saudação: saudar[2]})
            }
        }, 1000);
    };

    render() {
        return (
            <div>
                <section className="saudação">
                    <p>{this.state.saudação}, meu nome é</p>
                    <h2>Rômulo Martins</h2>
                    <p>sou desenvolvedor web Front End</p>
                </section>
                <section className="sobre">
                    <h2>Sobre</h2>
                    <div>
                        <img src={FotoDePerfil} alt="" />
                    </div>
                    <div className="sobre">
                        <h3>Quem sou eu?</h3>
                        <p>Meu nome é Rômulo Martins, estudo desenvolvimento web Front End desde 2020 e busco uma primeira vaga atuando na área para aprimorar minhas habilidades e contribuir para uma melhor evolução tecnológica de sua empresa.</p>
                        <a href={Curriculo} rel="noopener" target="_blank">Veja meu currículo</a>
                    </div>
                </section>
            </div>
        )
    }
}