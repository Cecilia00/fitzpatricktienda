const products = [
    {
        id: "001",
        nombre: "Queso",
        categoría: "Fiambres",
        precio: "500",
    },
    {
        id: "002",
        nombre: "Jamón",
        categoría: "Fiambres",
        precio: "700",
    },
    {
        id: "003",
        nombre: "Harina",
        categoría: "Cereales",
        precio: "100",
    },
    {
        id: "004",
        nombre: "Lentejas",
        categoría: "Legumbres",
        precio: "200",
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}
