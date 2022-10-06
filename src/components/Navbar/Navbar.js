import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget.js'
import { Link } from 'react-router-dom'
import logo from './assets/logo.svg'

const Navbar = () => {


    return (
        <nav class="Navbar">
            <div class="leftDiv">
            <Link to={`/`}> <img src= {logo} className="logo"></img></Link>
            </div>
            <div class="rightDiv">
                <div class="CartAndMenuContainer">
                    <CartWidget />
                    <div className='listContainer'>
                        <label class="hamburger_label" for="hamburger_checkbox">&#9776;</label>
                        <input type="checkbox" name="" id="hamburger_checkbox"></input>
                        <ul class="MenuBottonList">
                            <li> <Link to={`/category/fiambres`} className="navbar_link">Fiambres</Link></li>
                            <li> <Link to={`/category/cereales`} className="navbar_link">Cereales</Link></li>
                            <li> <Link to={`/category/legumbres`} className="navbar_link">Legumbres</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar 