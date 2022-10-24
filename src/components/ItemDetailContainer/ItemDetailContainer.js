import { useEffect, useState } from "react"
import { getProduct } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'


const ItemDetailContainer = ({setCart}) => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const {productId} = useParams()


    useEffect(() => {
        getProduct(productId).then(product => {
            setProduct(product)
        }).finally(() => {
            setLoading(false)
        })

    }, [productId])

    if (loading) {
        return <h2 className="Title">Cargando...</h2>
    }
    else {
    return (
        <>
            <ItemDetail {...product} setCart={setCart}/>
        </>
    )}


}

export default ItemDetailContainer