import "../estilo/projetos.css"

import Projeto1jpeg from "../imagens/projeto1.jpeg"
import Projeto2jpeg from "../imagens/projeto2.jpeg"
import Projeto3jpeg from "../imagens/projeto3.jpeg"
import Projeto4jpeg from "../imagens/projeto4.jpeg"

export default function Projetos(props) {
    return (
        <div className="projetosContainer">
            <a href="/" name="projetos"></a>
            <span>Clique no nome do projeto para ver os detalhes.</span>
            <span>Clique nas imagens para acessar os projetos.</span>
            <div className="projeto">
                <details>
                    <summary>
                        Modelo de site
                    </summary>
                    <section>
                        <p>
                            modelo de site criado como exercício em um curso de HTML5 e CSS3 (cursoemvideo.com).
                        </p>
                    </section>
                </details>
                <div className="thumb">
                    <a href="https://romulodev08.github.io/exerc-cursoemvideo/" target="_blank" rel='noopener noreferrer'>
                        <img src={Projeto1jpeg} alt="" />
                    </a>
                </div>
            </div>
            <div className="projeto">
                <details>
                    <summary>
                        Divisão justa de custos
                    </summary>
                    <section>
                        <p>
                            projeto criado para calcular a divisão de uma despesa de maneira justa baseando-se no salário de cada pessoa que irá pagá-la.
                        </p>
                    </section>
                </details>
                <div className="thumb">
                    <a href="https://romulodev08.github.io/divisao-justa-de-custos/" target="_blank" rel='noopener noreferrer'>
                        <img src={Projeto2jpeg} alt="" />
                    </a>
                </div>

            </div>
            <div className="projeto">
                <details>
                    <summary>
                        Cálculo de juro e montante
                    </summary>
                    <section>
                        <p>
                            Está sem vontade de calcular aquele juro de um produto que quer comprar?! este projeto foi criado para calcular juros e o montante, basta escrever o valor do produto, taxa e o tempo que o app irá calcular para você.
                        </p>
                    </section>
                </details>
                <div className="thumb">
                    <a href="https://romulodev08.github.io/Calculo-de-juro-montante/" target="_blank" rel='noopener noreferrer'>
                        <img src={Projeto3jpeg} alt="" />
                    </a>
                </div>

            </div>
            <div className="projeto">
                <details>
                    <summary>
                        Landing-page
                    </summary>
                    <section>
                        <p>
                            Um exemplo de página web feita com Reactjs.
                        </p>
                    </section>
                </details>
                <div className="thumb">
                    <a href="https://landing-page1-sigma.vercel.app/" target="_blank" rel='noopener noreferrer'>
                        <img src={Projeto4jpeg} alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}