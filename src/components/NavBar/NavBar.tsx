// Importação do CSS
import '../NavBar/NavBar.css'

// Importação do CSS para dispositivos Mobile
import '../Section/SectionResponsive.css'

// Importação de Imagens
import WhatsAppIMG from "../../assets/whatsapp.png"

function NavBar(){
    return(
        <>
            <div className="header-navbar">

                <div className="header-logotipo-navbar">
                    <p className='header-logo-primary'> Doces da </p> 
                    <p className='header-logo-secundary'> Mari</p>
                </div>

                <div className="header-list-navbar">
                    <ul className='navigation-header'>
                        <li><a href="#inicio"> Início </a></li>
                        <li><a href="#cardapio"> Cardápio </a></li>
                        <li><a href="#sobre"> Sobre </a></li>
                        <li><a href="#contato"> Contato </a></li>
                    </ul>       
                </div>
                {/* Icône do WhatsApp */}
                <img src={WhatsAppIMG} alt="" height={40} id='icon-whatsapp'/>

            </div>


        </>
    )
}

export default NavBar;