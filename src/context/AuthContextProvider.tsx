import { createContext, useContext, useState } from 'react';
import React from 'react';

interface PropsType {
  children: React.ReactNode
}


type AuthContextType = {
  userData: AuthDataType;
  setUserData: React.Dispatch<React.SetStateAction<AuthDataType>>;
}

type AuthDataType = {
  name: string,
  email: string
}

const AuthContext = createContext<AuthContextType>({
  userData: { name: '', email: '' },
  setUserData: () => { }
});


const AuthContextProvider: React.FC<PropsType> = ({ children }) => {

  const defaultAuthData: AuthDataType = {
    name: "Mahadi Hasan",
    email: "mahadih.dev@gmail.com"
  }

  const [userData, setUserData] = useState(defaultAuthData)

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  const { userData, setUserData } = useContext(AuthContext)
  return { userData, setUserData }
}

export default AuthContextProvider;