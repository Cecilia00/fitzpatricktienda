import './CartItem.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const CartItem = ({ id, nombre, count, precio }) => {
    const { removeItem, totalQuantity } = useContext(CartContext)


    const handleRemove = (id) => {
        removeItem(id)
    }
    // if (totalQuantity = 0) {
    //     return (
    //         <div>
    //             <h3>Tu carrito está vacío</h3>
    //             <Link  to='/'>Agregar productos</Link>
    //         </div>
    //     )
    // }
    return (
        <div>
                <h3>
                    {nombre}
                </h3>
                <p>
                    Cantidad: {count}
                </p>
                <p>
                    Precio x Unidad: ${precio}
                </p>
                <p>
                    Subtotal: ${precio * count}
                </p>
                <button onClick={() => handleRemove(id)}>X</button>
        </div>
    )
}

export default CartItem