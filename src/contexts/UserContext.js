import React, {createContext, useState} from 'react';

export const UserContext = createContext();

// This context provider is passed to any component requiring the context
export const UserProvider = ({children}) => {
  const [id, setId] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState(null);

  return (
    <UserContext.Provider
      value={{
        id,
        isLoggedIn,
        name,
        setId,
        setIsLoggedIn,
        setName,
      }}>
      {children}
    </UserContext.Provider>
  );
};
