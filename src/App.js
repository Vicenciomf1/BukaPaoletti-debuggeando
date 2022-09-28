import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Banner from './components/Banner/Banner';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Banner />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:cat" element={<ItemListContainer />} />
          <Route path="/ItemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
