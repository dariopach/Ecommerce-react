const products = [
    {
        id: '1',
        name: 'Iphone X',
        price: 20000,
        category: 'celulares',
        img:'https://cellularcenter.com.uy/cache/cellularcenter/products/IPX64BKCPO-1-550x550.jpg',
        stock: 15,
        description: 'Descripcion de iphone X'
    },
    { id: '2', name: 'Ipad PRO', price: 40000, category: 'tablet', img:'https://http2.mlstatic.com/D_NQ_NP_901531-MLA46974955882_082021-O.jpg', stock: 5, description: 'Descripcion de Ipad PRO'},
    { id: '3', name: 'PC Gamer', price: 60000, category: 'PC', img:'https://ripleype.imgix.net/https%3A%2F%2Fdpq25p1ucac70.cloudfront.net%2Fseller-place-files%2Fmrkl-files%2F1909%2FELECTROHOGAR%2FPC-RYZEN-7-RTX3060TI-MATREXX.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=5dec91111390278d768371f13e495f6f', stock: 12, description: 'Descripcion de PC Gamer'}
]

export const getProducts = () => {
    return new Promise((resolve) => (
        setTimeout(() => {
            resolve(products)
        },500)
    ))
}

export const getProductByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}