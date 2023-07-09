import { getDocs, doc, collection, query, where } from 'firebase/firestore'
import { db } from '../firebaseConfig'


export const getProducts = async (categoryId) => {
    const collectionRef = categoryId
        ? query(collection(db, 'products'), where('category', '==', categoryId))
        : collection(db, 'products')

    try {
        const response = await getDocs(collectionRef)
        const productsAdapted = response.docs.map(doc => {
            const data = doc.data()
            return { id: doc.id, ...data }
        })
        return productsAdapted
    } catch (error) {
        console.error(error)
    }
}

export const getProductById = async (productId) => {
    const querySnapshot = await getDocs(collection(db, 'products'));
    const products = querySnapshot.docs.map((doc) => {
        const data = doc.data()
        return { id: doc.id, ...data }
    });
    const product = products.find((p) => p.id === productId);
    if (product) {
        return product
    } else {
        throw new Error('Product not found')
    }
}
