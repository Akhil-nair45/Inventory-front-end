
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import AddProduct from './Component/AddProduct';
import EditProduct from './Component/EditProduct';
import { Register } from './Component/Register';
import { Login } from './Component/Login';

function App() {
  return (
    <>
       <Routes>
       <Route path ="/register" element={<Register/>}></Route>
       <Route path ="/login" element={<Login/>}></Route> 
        <Route path ="/" element={<Home/>}></Route>
        <Route path ="/saveproduct" element={<AddProduct/>}></Route>
        <Route path ="/editproduct/:id" element={<EditProduct/>}></Route>
       </Routes>
    </>
  
  );
}

export default App;
