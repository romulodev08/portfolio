import { Component } from "react"
import FotoDePerfil from "../imagens/foto-do-currículo.jpeg"
import Curriculo from "../documentos/currículoFrontEndJrRom-5.pdf"
export default class Inicial extends Component {
    constructor(props) {
        super(props)
        this.state = {
            saudação: "Olá"
        }
    }
    
    render() {
        return(
            <div>
                <section>
                    <p>{ this.state.saudação }, meu nome é</p>
                    <h2>Rômulo Martins</h2>
                    <p>sou desenvolvedor web Front End</p>
                </section>
                <section>
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