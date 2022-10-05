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
        <div>
            <h3>{count}</h3>
            <button onClick={add}>Aumentar</button>
            <button disabled={count>0 ? false : true} onClick={rest}>Disminuir</button>
            <button onClick={reset}>Resetear</button>
        </div>
    )
}
export default Counter