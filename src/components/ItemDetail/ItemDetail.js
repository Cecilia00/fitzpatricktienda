import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import './ItemDetail.css'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext} from '../../context/CartContext'

const ItemDetail = ({ id, nombre, descripcion, precio, stock, unidadDeMedida }) => {
    const {addItem} = useContext(CartContext)
    const [quantityToAdd, setQuantityToAdd] = useState(0)


    const handleOnAdd = (count) => {
        setQuantityToAdd(count)

        const productToAdd = {
            id, nombre, precio, count
        }

        addItem(productToAdd)
    }

    return (<div className=''>
        <div className='detailContainer'>
            <h2>{nombre}</h2>
            <h5 className='ItemDetailDescription'>{descripcion}</h5>
            <h4 className='precioText'>${precio} por {unidadDeMedida}</h4>
        </div>
        <div>
            {quantityToAdd === 0 ? (
                <ItemCount onAdd={handleOnAdd} stock={stock} />
            ) : (
                <Link to='/cart'>Finalizar compra</Link>
            )}
        </div>
    </div>
    )
}

export default ItemDetail