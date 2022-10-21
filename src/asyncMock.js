

const products = [
    {
        id: "001",
        nombre: "Queso",
        categoria: "fiambres",
        descripcion: "Esto es una descripción",
        precio: "500",
        unidadDeMedida: "kg",

    },
    {
        id: "002",
        nombre: "Jamón",
        categoria: "fiambres",
        descripcion: "Esto es una descripción",
        precio: "700",
        unidadDeMedida: "kg",




    },
    {
        id: "003",
        nombre: "Harina",
        categoria: "cereales",
        descripcion: "Esto es una descripción",
        precio: "100",
        unidadDeMedida: "kg",



    },
    {
        id: "004",
        nombre: "Lentejas",
        categoria: "legumbres",
        descripcion: "Esto es una descripción",
        precio: "200",
        unidadDeMedida: "kg",



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
