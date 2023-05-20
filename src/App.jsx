
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Bienvenido a tu tienda de confianza'}/>
    </>
  )
}

export default App;
