import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget.js'

const Navbar = () => {
    return (
        <nav class="Navbar">
            <div class="leftDiv">
                <h1 class="NavTitle"> Distriber</h1>
            </div>
            <div class="rightDiv">
                <div class="CartAndMenuContainer">
                    <CartWidget />
                    <div>
                        <label class="hamburger_label" for="hamburger_checkbox">&#9776;</label>
                        <input type="checkbox" name="" id="hamburger_checkbox"></input>
                        <ul class="MenuBottonList">
                            <li> <botton class="navbar_button">Boton 1</botton></li>
                            <li> <botton>Boton 1</botton></li>
                            <li> <botton>Boton 1</botton></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar 