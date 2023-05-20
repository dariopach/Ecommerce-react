
import CartWidget from "../CartWidget/CartWidget"


const NavBar = () => {
    return (
        <nav>
            <h3>Mi tienda online</h3>
            <div>
                <button>Productos de limpieza</button>
                <button>Drogueria</button>
                <button>Varios</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar