import { useRef } from "react";
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
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direcao: "left" | "right") => {
    if (!carouselRef.current) return;

    const card = carouselRef.current.querySelector(".card") as HTMLDivElement;

    if (!card) return;

    const styles = window.getComputedStyle(carouselRef.current);

    const gap = parseInt(styles.gap || "20");

    const distancia = card.offsetWidth + gap;

    carouselRef.current.scrollBy({
      left: direcao === "right" ? distancia : -distancia,
      behavior: "smooth",
    });
  };

  return (
    <div className="carousel-container">

      <button
        className="btn-carousel left"
        onClick={() => scroll("left")}
      >
        ❮
      </button>

      <div className="carousel-window">

        <div
          className="carousel"
          ref={carouselRef}
        >
          {produtos.map((produto) => (
            <div className="card" key={produto.id}>
              <img src={produto.imagem} alt={produto.nome} />

              <h3>{produto.nome}</h3>

              <p>{produto.preco}</p>

              <button>Comprar</button>
            </div>
          ))}
        </div>

      </div>

      <button
        className="btn-carousel right"
        onClick={() => scroll("right")}
      >
        ❯
      </button>

    </div>
  );
}

export default Carousel;