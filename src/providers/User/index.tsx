import { api } from "../../services/api";
import { createStandaloneToast } from "@chakra-ui/toast";

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
  id?: number;
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
  logOut: () => void;
}

const UserContext = createContext<UserProviderData>({} as UserProviderData);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [token, setToken] = useState(localStorage.getItem("@BK/token") || "");
  const [userId, setUserId] = useState(localStorage.getItem("@BK/id") || "");

  const history = useHistory();

  const { toast } = createStandaloneToast();

  const signUp = (data: SignUpData) => {
    api
      .post("/register", data)
      .then((res) => {
        toast({
          title: "Conta criada com sucesso",
          description: "Agora faça login",
          status: "success",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
        history.push("/");
      })
      .catch((err) =>
        toast({
          title: "Algo deu errado",
          description: "Confira seu email",
          status: "error",
          duration: 3000,
          position: "top",
          isClosable: true,
        })
      );
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
        toast({
          title: "Login feito com sucesso",
          description: "Vamos às compras",
          status: "success",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
      })
      .catch((err) =>
        toast({
          title: "Algo deu errado",
          description: "Verifique seu email e senha",
          status: "error",
          duration: 3000,
          position: "top-right",
          isClosable: true,
        })
      );
  };

  const logOut = () => {
    setToken("");
    localStorage.clear();
    history.push("/");
  };

  return (
    <UserContext.Provider
      value={{ token, userId, setToken, signIn, signUp, logOut }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
