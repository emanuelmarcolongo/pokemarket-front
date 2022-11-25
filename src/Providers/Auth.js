import React, { useState } from "react";

export const AuthContext = React.createContext({});

export function AuthProvider(props) {
  const [userData, setUserData] = useState({});

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {props.children}
    </AuthContext.Provider>
  );
}
