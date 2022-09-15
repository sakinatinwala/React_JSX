import React, { createContext, useContext } from "react";
import { SignUp } from "./Register";
//import { Login } from "./LogIn";
import { useEffect } from "react";
 
 export const UserContext = createContext();

 export const Component1 = (props) => {
    const [data, setData] = useContext(SignUp,[], () => {
      const localData = localStorage.getItem('data');
      return localData ? JSON.parse(localData) : [];
    });
    useEffect(() => {
      localStorage.setItem('data',JSON.stringify(data))
    },[data]);

    return (
      <UserContext.Provider value={{data,setData}}>
        {props.childern}
      </UserContext.Provider>
     )
  }
 

// export const Header = () => {
//   return (
//     <nav id="navigation">
//       <h1 href="Login" className="logo">
//         <Login />
//       </h1>
//     </nav>
//   );
// };