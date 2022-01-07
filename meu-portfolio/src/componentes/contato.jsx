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
                <label className="contatoItem">LinkedIn:</label>
                <span className="contatoItem"><a href="https://www.linkedin.com/in/r%C3%B4mulo-martins-40b962210/" rel="noopener noreferrer" target="_blank">/romulo-martins</a></span>
            </div>
            <div>
                <label className="contatoItem">Telefone:</label>
                <span className="contatoItem">(85)9 9289 1479</span>
                <span className="contatoItem">/ (85)9 9261 7961</span>
            </div>
        </div>
    )
}