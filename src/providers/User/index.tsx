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
  signUp: (data: SignUpData) => void;
  signIn: (data: SignInData) => void;
}

const UserContext = createContext<UserProviderData>({} as UserProviderData);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [token, setToken] = useState(localStorage.getItem("@BK/token") || "");
  const [userId, setUserId] = useState(localStorage.getItem("@BK/id") || "");

  const history = useHistory();

  const signUp = (data: SignUpData) => {
    api
      .post("/register", data)
      .then((res) => {
        api.post(
          "/cart",
          { userId: res.data.user.id, cart: [] },
          {
            headers: { Authorization: `Bearer ${res.data.accessToken}` },
          }
        );
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

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
    <UserContext.Provider value={{ token, userId, setToken, signIn, signUp }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
