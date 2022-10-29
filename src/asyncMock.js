

const products = [
    {
        id: "001",
        name: "Queso",
        category: "fiambres",
        description: "Esto es una descripción",
        price: "500",
        measurmentUnit: "kg",
        stock: 15,
        imagen: 'https://itechstore.com.ar/wp-content/uploads/2020/06/iphone-12-pro-gold-hero-600x710.png'

    },
    {
        id: "002",
        name: "Jamón",
        category: "fiambres",
        description: "Esto es una descripción",
        price: "700",
        measurmentUnit: "kg",
        stock: 15,
        imagen: 'https://itechstore.com.ar/wp-content/uploads/2020/06/iphone-12-pro-gold-hero-600x710.png'

    },
    {
        id: "003",
        name: "Harina",
        category: "cereales",
        description: "Esto es una descripción",
        price: "100",
        measurmentUnit: "kg",
        stock: 15,
        imagen: 'https://itechstore.com.ar/wp-content/uploads/2020/06/iphone-12-pro-gold-hero-600x710.png'

    },
    {
        id: "004",
        name: "Lentejas",
        category: "legumbres",
        description: "Esto es una descripción",
        price: "200",
        measurmentUnit: "kg",
        stock: 15,
        imagen: 'https://itechstore.com.ar/wp-content/uploads/2020/06/iphone-12-pro-gold-hero-600x710.png'

    }
]

export const getProducts = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categoryId? products.filter(prod => prod.category === categoryId) : products)
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
