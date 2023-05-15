import logo from './logo.svg';
import './App.css';
import Cards from './Components/Cards';
import Home from './Pages/Home';
import {Route, Routes} from "react-router-dom"
import ProductDetails from './Pages/ProductDetails';
function App() {

  // https://rickandmortyapi.com/graphql
  return (
    <div className="App">
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/:id" element={<ProductDetails/>}/>

</Routes>
    </div>
  );
}

export default App;
