
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout';
import { NotifactionProvider } from './notification/NotificationService';



function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <NotifactionProvider>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={'Tus mejores productos tecnologicos'} />} />
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Categorias'} />} />
              <Route path='/item/:itemId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='*' element={<h1>404 NOT FOUND</h1>} />
            </Routes>
          </CartProvider>
        </NotifactionProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;
