import {Link} from 'react-router-dom'

const Item = ({prod}) => {
    return (
        <div>
            <h1>{prod.nombre}</h1>
            <h2> {prod.precio}</h2>
            <Link to={`/item/${prod.id}`} > ver detalle</Link>
        </div>
        
    )
}

export default Item