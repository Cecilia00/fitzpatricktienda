import './CartWidget.css'
import bag from './assets/bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const CartWidget = () => {

    const {getTotalQuantity} = useContext (CartContext)
    const totalQuantity = getTotalQuantity()

    console.log (totalQuantity)


    return (
        <div className='DivCartWidget'>
            <img id="BagImg" src = {bag} alt="imagen bolsa de compra" />
            {totalQuantity}
        </div>
    )

}

export default CartWidget