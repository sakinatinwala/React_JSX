import './App.css';
import { SignUp } from './components/Register';
import {Login} from './components/LogIn';
import React, {useState} from 'react';
import {StarRating} from './components/StarRating';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { createContext } from 'react';
import {Component1} from './components/Context';

function log(value) {
  console.log(value);
}
const UserContext = createContext();
export const UserDispatchContext = createContext();

function App() {
  const [userDetails, setUserDetails] = useState({
    Name: "",
    Surname: "",
    Email: "",
    Password: "",
    Select_Age: "",
    Select_Country: "",
    Select_State:"",
    Select_City: "",
    Address: "",
});

  return (
    <UserContext.Provider value={userDetails}>
      <UserDispatchContext.Provider value={setUserDetails}>
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
      <Component1 />
     </div>
     </UserDispatchContext.Provider>
  </UserContext.Provider>
  );
}

export default App;