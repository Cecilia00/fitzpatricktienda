import './Counter.css'
import { React, useState, useRef, useEffect } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const add = () => {
        setCount(count + 1)
    }

    const rest = () => {
        if (count>0) {
        setCount(count - 1)}
    }

    const reset = () => {
        setCount(0)
    }
    return (
        <div className='counterContainer'>
            <h4>{count}</h4>
            <button onClick={add} className="counterButton">+</button>
            <button disabled={count >0 ? false : true} onClick={rest} className="counterButton">-</button>
            <button onClick={reset} className="counterButton">Resetear</button>
        </div>
    )
}
export default Counter