import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import './ItemDetail.css'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ id, nombre, descripcion, precio, stock, unidadDeMedida, imagen }) => {
    const { addItem } = useContext(CartContext)
    const [quantityToAdd, setQuantityToAdd] = useState(0)

    console.log(imagen)
    const handleOnAdd = (count) => {
        setQuantityToAdd(count)

        const productToAdd = {
            id, nombre, precio, count, imagen
        }

        addItem(productToAdd)
    }

    return (
        <div className=''>
            <div className='detailContainer'>
                <div>
                    <img className='ItemImage' src={imagen}></img>
                </div>
                <div>
                    <h2 className='ItemName'>{nombre}</h2>
                    <h5 className='ItemDescription'>{descripcion}</h5>
                    <h4 className='ItemPrice'>${precio} por {unidadDeMedida}</h4>

                    <div>
                        {quantityToAdd === 0 ? (
                            <ItemCount onAdd={handleOnAdd} stock={stock} />
                        ) : (
                            <Link className='EndSaleButton' to='/cart'>Finalizar compra</Link>
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ItemDetail