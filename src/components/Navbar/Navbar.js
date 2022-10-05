import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget.js'
import { Link } from 'react-router-dom'

const Navbar = () => {


    return (
        <nav class="Navbar">
            <div class="leftDiv">
                <h1 class="NavTitle"> <Link to={`/`}>Distriber</Link></h1>
            </div>
            <div class="rightDiv">
                <div class="CartAndMenuContainer">
                    <CartWidget />
                    <div>
                        <label class="hamburger_label" for="hamburger_checkbox">&#9776;</label>
                        <input type="checkbox" name="" id="hamburger_checkbox"></input>
                        <ul class="MenuBottonList">
                            <li> <Link to={`/category/fiambres`} class="navbar_button">Fiambres</Link></li>
                            <li> <Link to={`/category/cereales`}>Cereales</Link></li>
                            <li> <Link to={`/category/legumbres`}>Legumbres</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar 