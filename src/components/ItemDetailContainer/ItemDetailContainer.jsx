import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { useAsync } from '../../hooks/useAsync'
import { getProductById } from '../../services/firebase/firestore/products'

const ItemDetailContainer = () => {
  const { itemId } = useParams();

  const productById = () => getProductById(itemId)

  const { data: product, error, loading } = useAsync(productById, [itemId])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>Hubo un error, por favor recargue la página</h1>
  }

  return (
    <div className='ItemDetailContainer'>
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer