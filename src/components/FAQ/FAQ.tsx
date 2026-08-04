// Importação do CSS
import "./FAQ.css";

// Importação do useState
import { useState } from "react";

function FAQ() {
    const [perguntaAberta, setPerguntaAberta] = useState<number | null>(null);

    const togglePergunta = (id: number) => {
        setPerguntaAberta(perguntaAberta === id ? null : id);
    };

    const perguntas = [
        {
            id: 1,
            pergunta: "Como funciona o pagamento?",
            resposta: "Aceitamos PIX, cartão de crédito, débito e dinheiro."
        },
        {
            id: 2,
            pergunta: "Vocês fazem entregas?",
            resposta: "Sim! Realizamos entregas mediante taxa de entrega."
        },
        {
            id: 3,
            pergunta: "Quanto tempo antes devo fazer o pedido?",
            resposta: "Recomendamos fazer sua encomenda com pelo menos 3 dias de antecedência."
        },
        {
            id: 4,
            pergunta: "Posso personalizar meu bolo?",
            resposta: "Sim! Fazemos bolos totalmente personalizados para qualquer ocasião."
        }
    ];

    return (
        <section id="faq">

            <div className="container-faq">

                <div className="faq-title">
                    <h2>Perguntas Frequentes</h2>
                    <p>Tire suas dúvidas antes de fazer seu pedido.</p>
                </div>

                <div className="faq-content">

                    {perguntas.map((item) => (

                        <div
                            className="faq-item"
                            key={item.id}
                        >

                            <button
                                className="faq-pergunta"
                                onClick={() => togglePergunta(item.id)}
                            >

                                <h3>{item.pergunta}</h3>

                                <span
                                    className={`icone ${
                                        perguntaAberta === item.id ? "ativo" : ""
                                    }`}
                                >
                                    ▼
                                </span>

                            </button>

                            <div
                                className={`faq-resposta ${
                                    perguntaAberta === item.id ? "aberta" : ""
                                }`}
                            >
                                <p>{item.resposta}</p>
                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default FAQ;