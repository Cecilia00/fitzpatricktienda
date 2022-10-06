import Counter from '../Counter/Counter'
import './ItemDetail.css'

const ItemDetail = ({product}) => {
    return (<div className='detailContainer'>
            <h2>Detalle del producto</h2>
            <div className='productContainer'>
                <h3>{product.nombre}</h3>
                <h4>${product.precio}</h4>
                <Counter/>
            </div>
        </div>
    )
}

export default ItemDetail