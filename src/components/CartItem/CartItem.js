import './CartItem.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { counter } from '@fortawesome/fontawesome-svg-core'


const CartItem = ({ id, nombre, count, precio }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <div>
            <div >
                <h3>
                    {nombre}
                </h3>
            </div>
            <div>
                <p>
                    Cantidad: {count}
                </p>
                <p>
                    Precio x Unidad: ${precio}
                </p>
            </div>           
            <div>
                 <p>
                     Subtotal: ${precio * count}
                 </p>
                 <button onClick={() => handleRemove(id)}>X</button>
            </div>
        </div>
    )
}

export default CartItem