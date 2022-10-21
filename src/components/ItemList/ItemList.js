import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({ products }) => {
    return (
        <div className='ItemListBox'>
            {products.map(prod => (
                <Item key={prod.id} prod={prod} />
            ))}
        </div>
    )

    
}

export default ItemList