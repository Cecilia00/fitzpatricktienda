import './ItemListContainer.css'
import {getProducts} from '../../asyncMock'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState (true)

    const {categoryId} = useParams()

    useEffect (()=> { 
        setLoading (true)
        getProducts(categoryId).then(products => {
            setProducts(products)
        }).finally(() =>{
            setLoading(false)
        })
    }, [categoryId])

    if (loading){
        return (<h1>Cargando</h1>)
    }


    return (
        <div>
            <h1>hola</h1>
            <ItemList products={products}/>
        </div>
    )

}

export default ItemListContainer 
