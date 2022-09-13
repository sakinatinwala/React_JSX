import './App.css';
import { SignUp } from './components/Register';
import {Login} from './components/LogIn';
import React from 'react';
import {StarRating} from './components/StarRating';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function log(value) {
  console.log(value);
}

function App() {
  return (
    <div>
      <BrowserRouter>
       <div>
        <div>
         <Link to="/"> Login</Link>
          </div>
           <div>
            <Link to="signup"> SignUp</Link>
           </div>
           <div>
            <Link to="StarRating"> StarRating</Link>
           </div>
          </div>
    
     <Routes>
       <Route path='/' element={<Login /> } />
       <Route path='signup' element={<SignUp /> } />
       <Route path='StarRating' element={<StarRating onChange={log} /> } />
     </Routes>
     
     </BrowserRouter>

     

    </div>
  );
}

export default App;