import {Link} from 'react-router-dom'

const Item = ({prod}) => {
    return (
        <div>
            <h3>{prod.nombre}</h3>
            <h4> ${prod.precio}</h4>
            <Link to={`/item/${prod.id}`} > ver detalle</Link>
        </div>
        
    )
}

export default Item