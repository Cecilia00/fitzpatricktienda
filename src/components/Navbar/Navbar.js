import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget.js'

const Navbar = () => {
    return (
        <nav>
            <div>
                <h1>Nombre Proyecto</h1>
            </div>
            <div>
                <button>Boton 1</button>
                <button>Boton 2</button>
                <button>Boton 3</button>
            </div>
        
            <div>
                <CartWidget />
            </div>

        </nav>
    )
}

export default Navbar 