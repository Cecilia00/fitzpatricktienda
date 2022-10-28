import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {

    const {cart, clear, totalQuantity, total} = useContext(CartContext)
    if(totalQuantity == 0) {
        return (
            <h2>No hay items en el carrito</h2>
        )
    }

    return (     
        <div>
            <h2>Tu compra</h2>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${total}</h3>
            <button onClick={() => clear()} className="Button">Vaciar carrito</button>
            <Link to='/checkout' className='Option'>Terminar compra</Link>
        </div>
    )
}


export default Cart