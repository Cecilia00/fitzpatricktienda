import {  createContext, useEffect, useState } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState (0)

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
          setCart([...cart, productToAdd])
        } else {
          return (
            <alert> El producto ya está en el carrito</alert>
          )
        }
      }
    
      const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
      }
    
      const removeItem = (id) => {
        const cartWithoutItem = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutItem)
      }

      const clear = () =>{
        setCart = ([])
      }
      useEffect(()=>{
        const totalQuantity = getTotalQuantity ()
        setTotalQuantity (totalQuantity)
      }, [cart])

      const getTotalQuantity = () => {
        let totalQuantity = 0

        cart.forEach(prod => {
            totalQuantity += prod.count
        })

        return totalQuantity
    }
    

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, getTotalQuantity, clear }}>
            {children}
        </CartContext.Provider>
    )
}