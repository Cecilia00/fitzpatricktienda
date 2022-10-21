import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import './ItemDetail.css'

const ItemDetail = ({ product }) => {
    return (<div className=''>
        <div className='detailContainer'>
            <h2>{product.nombre}</h2>
            <h5 className='ItemDetailDescription'>{product.descripcion}</h5>
            <h4 className='precioText'>${product.precio} por {product.unidadDeMedida}</h4>
            <ItemCount />
        </div>
            <button className="finishSaleButton"><Link to={`/cart`} >Terminar compra</Link></button>
        </div>
    )
}

export default ItemDetail