import logo from './logo.svg';
import './App.css';
import Nav from './comonents/Nav';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Footer from './comonents/Footer';
import SignUp from './comonents/SignUp';
import PrivateComponent from './comonents/PrivateComponent';
import AddProduct from './comonents/AddProduct'
import Login from './comonents/Login';
function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
        <Route element={<PrivateComponent/>}>
      <Route path='/' element={<h4>Home page</h4>}/>
      <Route path='/update' element={<h4>Update page</h4>}/>
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
