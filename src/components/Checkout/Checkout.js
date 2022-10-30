import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { addDoc, collection, query, where, documentId, writeBatch, getDocs } from 'firebase/firestore'
import { db } from "../../service/firebase"

const Checkout = () => {
    const { cart, total, count } = useContext(CartContext)
    const [error, setError] = useState(false)
    const [inputs, setInputs] = useState({});


    const createOrder = async () => {
        try {
            const objOrder = {
                buyer: {
                    name: 'Nombre Apellido',
                    phone: '3510000000',
                    email: 'ejemplo@gmail.com'
                },
                items: cart,
                total
            }
            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            const { docs } = productsAddedFromFirestore

            const batch = writeBatch(db)
            const outOfStock = []

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stockDb

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
                console.log(`El id de su orden es: ${orderAdded.id}`)

            } else {
                return (<h2>Hay productos fuera de stock, por favor vuelva a intentarlo</h2>)
            }
        } catch (error) {
            setError(true)
        }
    }

    if (error) {
        return (<h2 className='Title'> Ha ocurrido un error, por favor vuelva a intentarlo</h2>)
    }


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    }


    return (
        <div>
            <h2>Ya casi terminamos!</h2>
            <form onSubmit={handleSubmit}>
                <label>Nombre:
                    <input
                        type="text"
                        name="username"
                        value={inputs.username || ""}
                        onChange={handleChange}
                    />
                </label>
                <label>Telefono:
                    <input
                        type="number"
                        name="phone"
                        value={inputs.phone || ""}
                        onChange={handleChange}
                    />
                </label>
                <label>Mail:
                    <input
                        type="mail"
                        name="mail"
                        value={inputs.mail || ""}
                        onChange={handleChange}
                    />
                </label>
            </form>
            <button onClick={createOrder}>Enviar mi pedido</button>
        </div>
    )
}

export default Checkout