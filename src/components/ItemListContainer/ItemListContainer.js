import './ItemListContainer.css'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../../service/firebase'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        const collectionRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')


        getDocs(collectionRef).then(response => {
            console.log(response)

            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data }
            })

            setProducts(productsAdapted)
        })
            .catch(error => {
                setError(true)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    if (loading) {
        return (<h2 className='Title'>Cargando...</h2>)
    }

    if (error) {
        return (<h2 className='Title'> Ha ocurrido un error, por favor vuelva a intentarlo</h2>)
    }

    return (
        <div className='ItemListContainerBox'>
            <h2 className='Title'>Nuestros productos</h2>
            <ItemList products={products} />
        </div>
    )

}

export default ItemListContainer 
