import { useEffect, useState } from "react"
import { getProduct } from "../../asyncMock"
import { useParams } from "react-router-dom"
import Counter from "../Counter/Counter"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const {productId} = useParams()


    useEffect(() => {
        getProduct(productId).then(product => {
            setProduct(product)
        }).finally(() => {
            setLoading(false)
        })

    }, [])

    console.log (product)
    if (loading) {
        return <h1>Cargando</h1>
    }
    else {
    return (
        <div>
            <h1>Detalle del producto</h1>
            <div>
                <h1>{product.nombre}</h1>
                <h1>{product.precio}</h1>
                <Counter/>
            </div>
        </div>
    )}


}

export default ItemDetailContainer