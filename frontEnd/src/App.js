import logo from './logo.svg';
import './App.css';
import Nav from './comonents/Nav';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Footer from './comonents/Footer';
import SignUp from './comonents/SignUp';
import PrivateComponent from './comonents/PrivateComponent';
import AddProduct from './comonents/AddProduct'
import Login from './comonents/Login';
import ProductList from './comonents/ProductList';
import UpdateProduct from './comonents/UpdateProduct';
function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
        <Route element={<PrivateComponent/>}>
      <Route path='/' element={<ProductList/>}/>
      <Route path='/update/:id' element={<UpdateProduct/>}/>
      <Route path='/add-product' element={<AddProduct/>}/>
      <Route path='/profile' element={<h4>view profile </h4>}/>
      <Route path='/logout' element={<h4>Logout page</h4>}/>
    
      </Route>
      
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      
      </Routes>
      </Router>
      <Footer/>
   </div>
  );
}

export default App;
