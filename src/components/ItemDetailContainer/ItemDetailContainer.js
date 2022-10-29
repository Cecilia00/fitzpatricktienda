import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'
import { getDoc, doc } from 'firebase/firestore'
import { db } from "../../service/firebase"


const ItemDetailContainer = ({ setCart }) => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const { productId } = useParams()


    useEffect(() => {

        const docRef = doc(db, 'products', productId)
        getDoc(docRef).then(doc => {
            const data = doc.data()
            const productAdapted = { id: doc.id, ...data }
            setProduct(productAdapted)
            console.log(productAdapted)
        }).catch(error => {
            setError(true)
        }).finally(() => {
            setLoading(false)
        })

    }, [productId])


    if (error) {
        return <h2 className="Title">Ha ocurrido un error, por favor intente de nuevo.</h2>
    }
    if (loading) {
        return <h2 className="Title">Cargando...</h2>
    }
    else {
        return (
            <>
                <ItemDetail {...product} setCart={setCart} />
            </>
        )
    }


}

export default ItemDetailContainer