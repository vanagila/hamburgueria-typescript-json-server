import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";

import { ProductProvider } from "../providers/Products/index";
import { UserProvider } from "./User";
import { CartProvider } from "./Cart";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <CartProvider>
    <ProductProvider>
      <UserProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </UserProvider>
    </ProductProvider>
  </CartProvider>
);
