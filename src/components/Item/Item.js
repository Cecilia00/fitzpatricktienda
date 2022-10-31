import {Link} from 'react-router-dom'
import './Item.css'

const Item = ({prod}) => {
    return (
        <div className='ItemContainer'>
            <h3 className='ItemName'><Link className='link' to={`/item/${prod.id}`} >{prod.name}</Link></h3>
            <img className='ItemImage' src={prod.imagen}></img>
            <h4 className='ItemPrice'> ${prod.price}</h4>
            <h5 className='ItemMeasurmentUnit'> por {prod.measurmentUnit}</h5>
            <button className='buyButton'><Link className='link' to={`/item/${prod.id}`} > Comprar</Link></button>
        </div>
        
    )
}

export default Item