 import React, { useState, createContext, useContext } from "react";
 import ReactDOM from "react-dom/client";

 export const UserContext = createContext();
 export const UserDispatchContext = createContext();

 export const Component1 = ({childern}) => {
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
      {childern}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}

const Profile = () => {
const userDetails = React.useContext(UserContext);
const setUserDetails = useContext(UserDispatchContext);
return (
    <h1> {userDetails.username} </h1>
  );
}
