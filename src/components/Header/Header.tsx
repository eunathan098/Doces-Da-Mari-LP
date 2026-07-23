// Importação do CSS
import '../Header/Header.css'
// Importação de Componentes
import NavBar from '../NavBar/NavBar';

function Header(){
    return(
        <>
            <header>
                <NavBar></NavBar>
            </header>
        </>
    )
}
export default Header;