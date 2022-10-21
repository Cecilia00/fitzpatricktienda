import './ItemCount.css'
import { React, useState, useEffect } from 'react'

const ItemCount = () => {
    const [count, setCount] = useState(0)

    const add = () => {
        setCount(count + 1)
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
                <button onClick={add} className="counterButton">+</button>
            </div>
            <div>
                <button onClick={reset} className="counterButton">Comprar</button>
            </div>
        </div>
    )
}
export default ItemCount