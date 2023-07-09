
import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <nav className='NavBar'>
            <Link to='/'>
                <h3 className='Titulo'>Mi tienda online</h3>
            </Link>
            <div className='Categories'>
                <NavLink to={`/category/Celulares`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Celulares</NavLink>
                <NavLink to={`/category/Tablet`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Tablet</NavLink>
                <NavLink to={`/category/PC`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>PC</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar