import "../estilo/projetos.css"

export default function Projetos(props) {
    return(
        <div>
            <div className="projeto">
                <div className="thumb">
                    <a href="https://romulodev08.github.io/exerc-cursoemvideo/">
                        <img src="" alt="" />
                    </a>
                </div>
                <details>
                    <summary>
                        Modelo de site
                    </summary>
                    <section>
                        <p>
                            detalhes do projeto
                        </p>
                    </section>
                </details>
            </div>
            <div className="projeto"></div>
            <div className="projeto"></div>
            <div className="projeto"></div>
        </div>
    )
}