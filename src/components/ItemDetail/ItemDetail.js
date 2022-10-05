import Counter from '../Counter/Counter'

const ItemDetail = ({product}) => {
    return (<div>
            <h1>Detalle del producto</h1>
            <div>
                <h1>{product.nombre}</h1>
                <h1>{product.precio}</h1>
                <Counter/>
            </div>
        </div>
    )
}

export default ItemDetail