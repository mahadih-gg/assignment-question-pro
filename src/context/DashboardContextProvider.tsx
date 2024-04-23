import { createContext, useContext, useState } from 'react';
import React from 'react';

interface PropsType {
  children: React.ReactNode
}

type UserIdType = string | number

type DashboardContextType = {
  selectedUserId: UserIdType;
  setSelectedUserId: React.Dispatch<React.SetStateAction<UserIdType>>;
}

const DashboardContext = createContext<DashboardContextType>({
  selectedUserId: "",
  setSelectedUserId: () => { }
});


const DashboardContextProvider: React.FC<PropsType> = ({ children }) => {

  const [selectedUserId, setSelectedUserId] = useState<UserIdType>("")

  return (
    <DashboardContext.Provider value={{ selectedUserId, setSelectedUserId }}>
      {children}
    </DashboardContext.Provider>
  );
};


export const useDashboard = () => {
  const { selectedUserId, setSelectedUserId } = useContext(DashboardContext)
  return { selectedUserId, setSelectedUserId }
}

export default DashboardContextProvider;