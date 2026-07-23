import { useState, useEffect, useRef } from "react";
import "./Carousel.css";
import "../../components/Section/SectionResponsive.css";

import BoloChocolate from "../../assets/bolo-de-chocolate.jpg";
import BoloComUvas from "../../assets/bolo-com-uvas.jpg";
import BoloDeConfeitaria from "../../assets/Bolo-confeitaria.jpg";
import BoloBranco from "../../assets/Bolobranco.jpg";

const produtos = [
  { id: 1, nome: "Bolo de Chocolate", preco: "R$ 57,90", imagem: BoloChocolate },
  { id: 2, nome: "Bolo com Uvas", preco: "R$ 32,00", imagem: BoloComUvas },
  { id: 3, nome: "Bolo de Chocolate", preco: "R$ 15,00", imagem: BoloDeConfeitaria },
  { id: 4, nome: "Bolo Branco", preco: "R$ 39,99", imagem: BoloBranco },
  { id: 5, nome: "Bolo com Uvas", preco: "R$ 32,00", imagem: BoloComUvas },
  { id: 6, nome: "Bolo de Chocolate", preco: "R$ 57,90", imagem: BoloDeConfeitaria },
  { id: 7, nome: "Bolo de Chocolate", preco: "R$ 57,90", imagem: BoloChocolate },
  { id: 8, nome: "Bolo com Uvas", preco: "R$ 32,00", imagem: BoloComUvas },
  { id: 9, nome: "Bolo de Chocolate", preco: "R$ 15,00", imagem: BoloDeConfeitaria },
  { id: 10, nome: "Bolo Branco", preco: "R$ 39,99", imagem: BoloBranco },
  { id: 11, nome: "Bolo com Uvas", preco: "R$ 32,00", imagem: BoloComUvas },
  { id: 12, nome: "Bolo de Chocolate", preco: "R$ 57,90", imagem: BoloChocolate },
];

function Carousel() {
  const [indice, setIndice] = useState(0);
  const [cardsVisiveis, setCardsVisiveis] = useState(4);
  const [larguraCard, setLarguraCard] = useState(0);

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const atualizar = () => {
      if (window.innerWidth <= 468) {
        setCardsVisiveis(1);
      } else if (window.innerWidth <= 768) {
        setCardsVisiveis(2);
      } else {
        setCardsVisiveis(4);
      }

      setTimeout(() => {
        if (cardRef.current) {
          const estilo = window.getComputedStyle(cardRef.current);
          const margin =
            parseFloat(estilo.marginLeft) +
            parseFloat(estilo.marginRight);

          setLarguraCard(cardRef.current.offsetWidth + margin + 20);
        }
      }, 50);
    };

    atualizar();

    window.addEventListener("resize", atualizar);

    return () => window.removeEventListener("resize", atualizar);
  }, []);

  const proximo = () => {
    if (indice < produtos.length - cardsVisiveis) {
      setIndice((prev) => prev + 1);
    }
  };

  const anterior = () => {
    if (indice > 0) {
      setIndice((prev) => prev - 1);
    }
  };

  return (
    <div className="carousel-container">

      <button className="btn-carousel left" onClick={anterior}>
        ❮
      </button>

      <div className="carousel-window">

        <div
          className="carousel"
          style={{
            transform: `translateX(-${indice * larguraCard}px)`
          }}
        >
          {produtos.map((produto, index) => (
            <div
              className="card"
              key={produto.id}
              ref={index === 0 ? cardRef : null}
            >
              <img src={produto.imagem} alt={produto.nome} />

              <h3>{produto.nome}</h3>

              <p>{produto.preco}</p>

              <button>Comprar</button>
            </div>
          ))}
        </div>

      </div>

      <button className="btn-carousel right" onClick={proximo}>
        ❯
      </button>

    </div>
  );
}

export default Carousel;