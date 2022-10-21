import {Link} from 'react-router-dom'
import './Item.css'

const Item = ({prod}) => {
    return (
        <div className='ItemContainer'>
            <h3><Link to={`/item/${prod.id}`} >{prod.nombre}</Link></h3>
            <h4> ${prod.precio}</h4>
        </div>
        
    )
}

export default Item