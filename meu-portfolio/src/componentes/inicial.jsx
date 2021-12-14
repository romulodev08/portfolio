import { Component } from "react"
export default class Inicial extends Component {
    constructor(props) {
        super(props)
        this.state = {
            saudação: "Olá"
        }
    }
    
    render() {
        return(
            <section>
                <p>{  this.state.saudação }, meu nome é</p>
                <h2>Rômulo Martins</h2>
                <p>sou desenvolvedor web Front End</p>
            </section>
        )
    }
}