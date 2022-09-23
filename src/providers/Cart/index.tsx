import { createContext, ReactNode, useState } from "react";
import { api } from "../../services/api";

interface CartProviderProps {
  children: ReactNode;
}

interface Cart {
  image: string;
  title: string;
  category: string;
  price: number;
  id: number;
}

interface CartProviderData {
  /*tudo que for no value */
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Cart[]>([] as Cart[]);

  const getUserCart = (userId: number, token: string) => {
    api
      .get(`/cart?userId=${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setCart(res.data))
      .catch((err) => console.log(err));
  };

  const addProductOnCart = (userId: number, token: string, data: Cart) => {
    const newData = { ...data, userId };
    api.post(`/cart`);
  };

  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
};
