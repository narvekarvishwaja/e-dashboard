import './App.css';
import Nav from './Components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <div className='body'>
        <Routes>
          <Route path='/' element={<h1>Product Listing Component</h1>}/>
          <Route path='/add' element={<h1>Add Product Component</h1>}/>
          <Route path='/update' element={<h1>Update Product Component</h1>}/>
          <Route path='/logout' element={<h1>Logout</h1>}/>
          <Route path='/profile' element={<h1>Profile</h1>}/>
        </Routes>
      </div>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
