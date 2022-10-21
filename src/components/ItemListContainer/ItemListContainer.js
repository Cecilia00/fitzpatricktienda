import './ItemListContainer.css'
import {getProducts} from '../../asyncMock'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [products, setProducts] = useState ([])
    const [error, setError] = useState (false)
    const [loading, setLoading] = useState (true)

    const {categoryId} = useParams()

    useEffect (()=> { 
        setLoading (true)
        getProducts(categoryId).then(products => {
            setProducts(products)
        }).catch (error =>{
            setError(true)
        }) .finally(() =>{
            setLoading(false)
        })
    }, [categoryId])


    if (loading){
        return (<h2>Cargando</h2>)
    }

    if (error) {
        return (<h2> Ha ocurrido un error, por favor vuelva a intentarlo</h2>)
    }

    return (
        <div className='ItemListContainerBox'>
            <h2>Todos nuestros productos</h2>
            <ItemList products={products}/>
        </div>
    )

}

export default ItemListContainer 
