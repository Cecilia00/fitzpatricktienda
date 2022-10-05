const products = [
    {
        id: "001",
        nombre: "Queso",
        categoria: "fiambres",
        precio: "500",
    },
    {
        id: "002",
        nombre: "Jamón",
        categoria: "fiambres",
        precio: "700",
    },
    {
        id: "003",
        nombre: "Harina",
        categoria: "cereales",
        precio: "100",
    },
    {
        id: "004",
        nombre: "Lentejas",
        categoria: "legumbres",
        precio: "200",
    }
]

export const getProducts = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categoryId? products.filter(prod => prod.categoria === categoryId) : products)
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
