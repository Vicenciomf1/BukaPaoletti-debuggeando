import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Banner from './components/Banner/Banner';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <ItemListContainer />
    </div>
  );
}

export default App;
