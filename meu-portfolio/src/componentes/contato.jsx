import "../estilo/contato.css"

export default function Contato(props) {
    return(
        <div  name="contato" className="containerContato">
            <a href="/" name="contato">.</a>
            <h2>Contato</h2>
            <div>
                <label className="contatoItem">E-mail:</label>
                <span className="contatoItem">romulodev08@gmail.com</span>
            </div>
            <div>
                <label className="contatoItem">telefone:</label>
                <span className="contatoItem">(85)9 9289 1479</span>
                <span className="contatoItem">(85)9 9261 7961</span>
            </div>
        </div>
    )
}