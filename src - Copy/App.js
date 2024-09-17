//import logo from './logo.svg';
// import { Routes } from 'react-router-dom';
import './App.css';
import Forgot from './Forgot';
//import Forgot from './Forgot';
import  Login from './Login';
//import Register from './Register';
import {Routes, Route } from 'react-router-dom';
import Register from './Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path='/forgot' element={<Forgot/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
      
          {/* <Login/>
          <Forgot/>
          <Register/> */}

        
    </div>
  );
}

export default App;
