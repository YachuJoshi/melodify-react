import React, { useState, useEffect, createContext } from "react";
import { auth } from "../firebase";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, photoURL } = user;
        setUser({ displayName, email, photoURL });
      } else {
        setUser({});
      }
    });
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
