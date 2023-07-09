import { useCart } from "../../context/CartContext"

const CartItem = ({ id, name, img, price, quantity }) => {

    const { removeItem } = useCart()

    return (
        <div>
            <h1>Cart Item</h1>
            <img src={img} style={{ width: '150px' }} />
            <h2>{name}</h2>
            <h4>{price}</h4>
            <h4>cantidad: {quantity}</h4>
            <h4>subtotal: ${quantity * price}</h4>
            <button onClick={() => removeItem(id)}>X</button>
        </div>
    )
}

export default CartItem