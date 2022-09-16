import { api } from "../../services/api";

import {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { useHistory } from "react-router-dom";

interface UserProviderProps {
  children: ReactNode;
}

interface SignUpData {
  name?: string;
  email: string;
  password: string;
}

interface SignInData {
  email: string;
  password: string;
}

interface UserProviderData {
  userId: string;
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  signIn: (data: SignInData) => void;
}

const UserContext = createContext<UserProviderData>({} as UserProviderData);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [token, setToken] = useState(localStorage.getItem("@BK/token") || "");
  const [userId, setUserId] = useState(localStorage.getItem("@BK/id") || "");

  const history = useHistory();

  const signIn = (data: SignInData) => {
    api
      .post("/login", data)
      .then((res) => {
        setToken(res.data.accessToken);
        localStorage.setItem("@BK/token", res.data.accessToken);
        setUserId(res.data.user.id);
        localStorage.setItem("@BK/id", res.data.user.id);
        history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <UserContext.Provider value={{ token, userId, setToken, signIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
