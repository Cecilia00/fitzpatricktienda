import './ItemCount.css'
import { React, useState } from 'react'

const ItemCount = ({stock, initial=0, onAdd}) => {
    const [count, setCount] = useState(initial)

    const add = () => {
    if (count < stock){
        setCount(count + 1)}
    }

    const rest = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const reset = () => {
        setCount(0)
    }
    return (
        <div className='counterContainer'>
            <div className='modifyCuantityContainer'>
                <button disabled={count > 0 ? false : true} onClick={rest} className="counterButton">-</button>
                <h4 className='cuentaText'>{count}</h4>
                <button onClick={(add)} className="counterButton">+</button>
            </div>
            <div>
                <button className="counterButton" onClick={() => onAdd(count)}> Agregar al carrito</button>
            </div>
        </div>
    )
}
export default ItemCount