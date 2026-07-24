// Importação do CSS
import "../../components/Footer/Footer.css"
import "../../components/Section/SectionResponsive.css"

function Footer(){
    return(
        <>
            <section id="footer">

                <div className="container-footer">
                    <p className="footer-title"> Doces da Mari </p>

                    <p className="links">Transformando ingredientes simples 
                        em momentos inesquecíveis. 
                        Feito com amor, para você.
                    </p>
                </div>

                <div className="container-footer">
                    <p className="footer-title"> Links </p>

                    <ul>
                        <li className="links"> Nossa História </li>
                        <li className="links"> Cardápio </li>
                        <li className="links"> Encomendas </li>
                        <li className="links"> Blog  </li>
                    </ul>

                </div>

                <div className="container-footer">
                    <p className="footer-title"> Contato </p>
                    <ul>
                        <li className="links"> imagem :  11 9 67876543 </li>
                        <li className="links"> imagem : email@gmail.com </li>
                        <li className="links"> imagem : São Paulo, SP </li>
                    </ul>
  
                </div>

                <div className="container-footer">
                    <p className="footer-title"> Horários </p>
                    <ul>
                        <li className="links"> Seg - Sex: 09h ás 18h </li>
                        <li className="links"> Sáb: 09h ás 14h </li>
                        <li className="links"> Dom: Fechado </li>
                    </ul>

                </div>
            </section> 
            <section className="autor">
                <p> Desenvolvido Por Nathan Cruz 😉</p>

            </section>
        </>
    )
}
export default Footer;