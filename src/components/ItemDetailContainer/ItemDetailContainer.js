import { useEffect, useState } from "react"
import { getProduct } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'


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
        <>
            <ItemDetail product={product} />
        </>
    )}


}

export default ItemDetailContainer