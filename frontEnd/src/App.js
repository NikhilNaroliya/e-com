import logo from './logo.svg';
import './App.css';
import Nav from './comonents/Nav';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Footer from './comonents/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
      <Route path='/' element={<h4>Home page</h4>}/>
      <Route path='/update' element={<h4>Update page</h4>}/>
      <Route path='/add' element={<h4>Add product page</h4>}/>
      <Route path='/profile' element={<h4>view profile </h4>}/>
      <Route path='/logout' element={<h4>Logout page</h4>}/>

      </Routes>
      </Router>
      <Footer/>
   
  
      
    </div>
  );
}

export default App;
