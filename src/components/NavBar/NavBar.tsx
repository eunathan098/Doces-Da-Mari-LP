// Importação do CSS
import '../NavBar/NavBar.css'

// Importação do CSS para dispositivos Mobile
import '../Section/SectionResponsive.css'

// Importação de Imagens
import WhatsAppIMG from "../../assets/whatsapp.png"
import IconeMenuMobile from "../../assets/menu.png"
import FecharMenuMobile from "../../assets/fechar.png"

function NavBar(){

    function abrirMenuMobile(){
        const containerMenuMobile = document.getElementById("container-menu") as HTMLInputElement ;
        containerMenuMobile.style.display = "flex"

    }

    function fecharMenuMobile(){
        const containerMenu= document.getElementById("container-menu") as HTMLInputElement ;
        containerMenu.style.display = "none"
    }
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

                {/* Icone de Menu */}
                <img src={IconeMenuMobile} alt="" id='menu-mobile' onClick={abrirMenuMobile}/>

            </div>

            <div id="container-menu">
                <div className="container-fechar-menu">
                    <img src={FecharMenuMobile} alt="" id='icon-fechar-menu' height={40}
                    onClick={fecharMenuMobile}/>
                </div>
                    <ul>
                        <li> <a href="#inicio"> Inicio </a></li>
                        <li> <a href="#cardapio"> Cardápio </a></li>
                        <li> <a href="#sobre"> Sobre </a></li>
                        <li> <a href="#contato"> Contato </a></li>
                    </ul>
                </div>

        </>
    )
}

export default NavBar;