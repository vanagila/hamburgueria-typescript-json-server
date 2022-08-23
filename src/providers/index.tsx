import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";

import { ProductProvider } from "../providers/Products/index";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <ProductProvider>
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
  </ProductProvider>
);
