import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({ products }) => {
    return (
        <ul className='ItemListBox' onClick={(e) => console.log(e)}>
            {products.map(prod => (
                <Item key={prod.id} prod={prod} />
            ))}
        </ul>
    )

    
}

export default ItemList