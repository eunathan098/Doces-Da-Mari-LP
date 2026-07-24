// Importação do CSS
import '../Section/Section.css'

// Importação do CSS para Dispositivos MOBILE
import "../../components/Section/SectionResponsive.css"

// Importação de Imagens
import BoloIMG from "../../assets/Bolo-confeitaria.jpg"
import Bolo from "../../assets/bolo.png"
import Bolinho from "../../assets/bolinho.png"
import Caixaentrega from "../../assets/caixa-de-entrega.png"
import IconeFlutuanteDoWhatsApp from "../../assets/whatsapp.png"
import MariConfeiteira from "../../assets/confeiteira-mari.png"

// Importação de Componente
import Carousel from '../Carousel/Carousel'
// import Footer from '../Footer/Footer'

// Importação de UsEffect e Scrool 
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function Section(){

// Efeito de Scrrol da página
useEffect(() => {
  ScrollReveal().reveal(".reveal", {
    origin: "bottom",
    distance: "60px",
    duration: 1000,
    interval: 200,
    easing: "ease-in-out",
    reset: true,
  });
}, []);

    return(
        <>
        {/* Icone Flutuante do WhatsApp */}

            <a href="https://wa.me/5511910544421">
                <img src={IconeFlutuanteDoWhatsApp} alt="WhatsApp" id='whatsapp-flutuante'/>
            </a>
            
            <section id="inicio">
                <div className="container-section-1 reveal">
                    <div className="container-section-txt">
                        <div className="text-1">
                            <p> ARTESANAL & DELICIOSO </p>
                        </div>

                        <div className="text-2">
                            <p> Adoçando a vida,
                            <span className='txt-blue'> um pedaço </span>  Por vez. </p>
                        </div>

                        <div className="text-3">
                            <p> Descubra sabores únicos feitos a mão com os
                                ingredientes mais delicados. <br></br>O equilibrio perfeito
                                entre o clássico e o  <span className='txt-blue'> moderno. </span>
                            </p>
                        </div>

                        <div className="container-section-btn-cta">

                            <a href="#cardapio" id='btn-ver-cardapio'>
                                Ver Cardápio
                            </a>

                            <a href="https://wa.me/5511910544421" target="_blank"
                                rel="noopener noreferrer" className="btn" id='btn-falar-no-whatsapp'>
                                    Fale no WhatsApp
                            </a>
                        </div>   
                    </div>
                        <div className="container-section-img">
                            <img src={BoloIMG} alt="" height={600} id='img-header'/>
                        </div>
                    </div>

            </section>

            {/* Sessão de Detalhes */}

            <div className="container-1-details">
        {/* esses itens abaixo devem aparecer com o efeito de scrrol */}
                    <div className="content-1 reveal">
                        
                        <div className="content-img">
                            <img src={Bolo} alt="" height={40}/> 
                        </div>

                        <div className="content-title">
                            <p> Feito com Amor </p>
                        </div>

                        <div className="content-subtitle">
                            <p> Cada doce é preparado manualmente, 
                            garantindo aquele sabor de afeto em cada mordida.</p>
                            
                        </div>
                    </div>

                    <div className="content-2 reveal">
                        <div className="content-img">
                            <img src={Bolinho} alt="" height={40}/>
                        </div>

                        <div className="content-title">
                            <p> Ingredientes Frescos </p>
                        </div>

                        <div className="content-subtitle">
                            <p> Selecionamos frutas da estação e chocolates nobres
                                para uma experiência premium.</p>   
                        </div>
                    </div>

                    <div className="content-3 reveal">
                        <div className="content-img">
                            <img src={Caixaentrega} alt="" height={40} />
                        </div>

                        <div className="content-title">
                            <p> Embalagens Presenteáveis </p>
                        </div>

                        <div className="content-subtitle">
                            <p> Nossas caixas são pensadas para encantar antes mesmo de provar o doce.

                            </p>
                            
                        </div>
                    </div>
                </div>
            <section id="cardapio">
                <div className="container-cardapio-1">
                    <div className="container-text">

                        <div className="container-cardapio-title reveal">
                            <p> Nosso Cardápio </p>
                        </div>

                        <div className="container-cardapio-subtitle reveal">
                            <p> Explore nossa seleção de doces favoritos,
                                perfeitos para festas ou para aquele momento só seu. </p>
                        </div>

                        {/* Carrossel  de imaens ilustrativas  */}
                        <Carousel></Carousel>
                    </div>
                </div>

            </section>

            <section id="sobre">
                <div className="container-sobre">
                    <p> Acompanhe pelas Redes Sociais </p>
                    <div className="container-sobre-redes-sociais">
                        <img src={MariConfeiteira} alt="" className='confeiteira'/>
                        <a href="https://www.instagram.com/dev_nathancruz/" id='instagram'>
                            Seguir 
                        </a>
                    </div>

                </div>
            </section>

            <section id="contato">
                ...
            </section>
            

        </>
    )
}

export default Section;