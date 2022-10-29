import './CartWidget.css'
import bag from './assets/bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const CartWidget = () => {

    const { getTotalQuantity, cart } = useContext(CartContext)
    const totalQuantity = getTotalQuantity()

    

    if (totalQuantity > 0) {
        return (
            
                <div className='DivCartWidget'>
                    <img id="BagImg" src={bag} alt="imagen bolsa de compra" />
                    {totalQuantity}
                </div>
            
        )
    }

}

export default CartWidget