import './ItemListContainer.css'
import {getProducts} from '../../asyncMock'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
    const [products, setProducts] = useState ([])

    useEffect (()=> { 
        getProducts().then(products => {
            setProducts(products)
        })
    }, [])

    return (
        <div>
            <h1>hola</h1>
            <ItemList products={products}/>

        </div>
    )
}

export default ItemListContainer 
