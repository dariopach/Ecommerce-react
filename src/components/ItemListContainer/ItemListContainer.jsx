
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { useAsync } from '../../hooks/useAsync'
import { getProducts } from "../../services/firebase/firestore/products"

const ItemListContainer = ({ greeting }) => {

    const { categoryId } = useParams()
    const getProductsWithCategory = () => getProducts(categoryId)

    const { data: products, error, loading } = useAsync(getProductsWithCategory, [categoryId])

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>Hubo un error, por favor recarge la pagina</h1>
    }
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer