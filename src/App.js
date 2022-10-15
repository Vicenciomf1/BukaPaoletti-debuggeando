import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Banner from './components/Banner/Banner';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartView from './components/CartView/CartView';
import FormBuy from './components/FormBuy/FormBuy';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Provider from './context/CartContext';



function App() {
  return (
    <div className="App">
    <Provider>
      <BrowserRouter>
          <NavBar />
          <Banner />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:cat" element={<ItemListContainer />} />
            <Route path="/ItemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/cartView" element={<CartView />}></Route>
            <Route path="/formBuy" element={<FormBuy />}></Route>
          </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
