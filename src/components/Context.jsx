import React, { useCallback, useMemo, useContext, createContext } from "react";

const UserContext = createContext(null);

export const Provider = ({ children }) => {

  const addUser = useCallback((item) => {
    const signupData = localStorage.getItem("data");
    if (signupData !== null) {
      const currentData = JSON.parse(signupData);
      if (currentData?.length) {
        const newData = [...currentData, item];
        localStorage.setItem("data", JSON.stringify(newData));
      } else {
        localStorage.setItem("data", JSON.stringify([item]));
      }
    } else {
      localStorage.setItem("data", JSON.stringify([item]));
    }
  }, []);

  // const fetchUsers = () => {
  //   return signUpdata ? JSON.parse(signUpdata) : [];
  // };

  const value = useMemo(
    () => ({
      addUser,
      // fetchUsers,
    }),
    [addUser]
  );

  return <UserContext.Provider value={value}>
    {children}
    </UserContext.Provider>;
};

export const Context = () => {
  return useContext(UserContext);
}