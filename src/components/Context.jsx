 import React, { useState, createContext, useContext } from "react";
 
 export const UserContext = createContext(null);
 
 export const Component1 = ({childern}) => {
  const [userDetails, setUserDetails] = useState();

  const value = useContext(
    () => ({
      userDetails,setUserDetails,
    }),
    [userDetails,setUserDetails]
  )
  return (
    <UserContext.Provider value={value}>
      {childern}
    </UserContext.Provider>
  )
}

// export const Component2 = () = > {
//   return (
//     React.useContext(UserContext);
//   )
// }