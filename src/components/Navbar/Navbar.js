import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget.js'
import { Link, NavLink } from 'react-router-dom'
import logo from './assets/logo.svg'



const Navbar = () => {


    return (
        <nav className='Navbar'>
            <div className='leftDiv'>
            <Link to={`/`}> <img src= {logo} className="logo"></img></Link>
            </div>
            <div className='rightDiv'>
                <div className='CartAndMenuContainer'>
                    
                    <Link to='/cart'><CartWidget/></Link>
                    <div className='listContainer'>
                        <label className='hamburger_label' htmlFor="hamburger_checkbox"></label>
                        <input type='checkbox' name="" id="hamburger_checkbox"></input>
                        <ul className="MenuBottonList">
                            <li className='MenuLi'> <NavLink to={`/category/fiambres`} className={({isActive}) => isActive ?  "active_navbar_link" : "navbar_link"} >Fiambres </NavLink> </li>
                            <li className='MenuLi'> <NavLink to={`/category/cereales`} className={({isActive}) => isActive ?  "active_navbar_link" : "navbar_link"}>Cereales</NavLink></li>
                            <li className='MenuLi'> <NavLink to={`/category/legumbres`} className={({isActive}) => isActive ?  "active_navbar_link" : "navbar_link"}>Legumbres</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar 