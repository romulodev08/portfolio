import { Component } from "react"

import "../estilo/inicial.css"

import FotoDePerfilA from "../imagens/foto-sem-fundo.png"
import FotoDePerfil from "../imagens/foto-do-currículo.jpeg"
import Curriculo from "../documentos/currículoFrontEndJrRom-5.pdf"

export default class Inicial extends Component {
    constructor(props) {
        super(props)
        this.state = {
            saudação: "..."
        }
    }

    componentDidMount() {
        const saudar = ["Bom dia", "Boa tarde", "Boa noite"]
        setInterval(() => {
            const hora = new Date().getHours()
            if (hora >= 6 && hora < 12) {
                this.setState({ saudação: saudar[0] })
            } else if (hora >= 12 && hora < 18) {
                this.setState({ saudação: saudar[1] })
            } else if (hora >= 18 || hora < 6) {
                this.setState({ saudação: saudar[2] })
            }
        }, 1000);
    };
    render() {
        return (
            <div>
                <section className="apresentação">
                    <div className="saudação">
                        <p className="saudaçãoItem">{this.state.saudação}, meu nome é</p>
                        <h2 className="saudaçãoItem">Rômulo Martins</h2>
                        <p className="saudaçãoItem">sou desenvolvedor web Front End Jr e seja bem vindo(a) ao meu portfólio.</p>
                    </div>
                    <div className="containerImg">
                        <img src={FotoDePerfilA} alt="" />
                    </div>
                </section>
                <section className="containerSsobre">
                    <h2>Sobre</h2>
                    <div className="sobre">
                        <h3>Quem sou eu?</h3>
                        <p>Meu nome é Rômulo Martins, estudo desenvolvimento web Front End desde 2020 e busco uma primeira vaga atuando na área para aprimorar minhas habilidades e contribuir para uma melhor evolução tecnológica de sua empresa.</p>
                        <a href={Curriculo} rel='noopener noreferrer' target="_blank">Veja meu currículo</a>
                    </div>
                    <div className="containerFotoDePerfil">
                        <img src={FotoDePerfil} alt="" />
                    </div>
                </section>
            </div>
        )
    }
}