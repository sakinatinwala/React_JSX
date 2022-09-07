import './App.css';
import { SignUp } from './components/Register';
import {Login} from './components/LogIn';
import React from 'react';
//import { SignInOutContainer } from './containers';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

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
          </div>
    
     <Routes>
       <Route path='/' element={<Login /> } />
       <Route path='signup' element={<SignUp /> } />
     </Routes>
     
     </BrowserRouter>

      
    </div>
  );
}

export default App;