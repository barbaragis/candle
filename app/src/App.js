
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer  from './components/ItemDetail';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import CartWidget from './components/CartWidget';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <ItemDetailContainer/>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>} /> 
          <Route path='/cart' element={<CartWidget />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
