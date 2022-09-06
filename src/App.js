import './App.css';
 import { SignUp } from './components/LogIn';
import {Login} from './components/SignIn';
import React from 'react';
//import { SignInOutContainer } from './containers';

function App() {
  return (
    <div>
      <Login />
      <SignUp />
    </div>
  );
}

export default App;