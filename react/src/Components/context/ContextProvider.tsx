import { createContext, useContext, useState, ReactNode } from "react";

type User = Record<string, any> | null;

interface StateContextType {
  user: User;
  token: string | null;
  notification: string | null;
  setUser: (user: User) => void;
  setToken: (token: string | null) => void;
  setNotification: (message: string) => void;
}

const StateContext = createContext<StateContextType>({
  user: null,
  token: null,
  notification: null,
  setUser: () => {},
  setToken: () => {},
  setNotification: () => {},
});

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [user, setUser] = useState<User>(null);
  const [token, _setToken] = useState<string | null>(localStorage.getItem('ACCESS_TOKEN'));
  const [notification, _setNotification] = useState<string | null>(null);

  const setToken = (token: string | null) => {
    _setToken(token);
    if (token) {
      localStorage.setItem('ACCESS_TOKEN', token);
    } else {
      localStorage.removeItem('ACCESS_TOKEN');
    }
  };

  const setNotification = (message: string) => {
    _setNotification(message);
    setTimeout(() => {
      _setNotification(null);
    }, 5000);
  };

  return (
    <StateContext.Provider value={{
      user,
      setUser,
      token,
      setToken,
      notification,
      setNotification
    }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
