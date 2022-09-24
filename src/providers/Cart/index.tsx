import { createContext, ReactNode, useContext, useState } from "react";
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
  cartProducts: Cart[];
  userCart: (userId: number, token: string) => void;
  addProduct: (userId: number, token: string, data: Cart) => void;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartProducts, setCartProducts] = useState<Cart[]>([] as Cart[]);

  const userCart = (userId: number, token: string) => {
    api
      .get(`/cart?userId=${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setCartProducts(res.data))
      .catch((err) => console.log(err));
  };

  const addProduct = (userId: number, token: string, data: Cart) => {
    const newData = { ...data, userId };
    if (
      cartProducts.filter((item) => item.title === newData.title).length > 0
    ) {
      return;
    }
    api
      .post(`/cart`, newData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        userCart(userId, token);
        console.log(userCart);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <CartContext.Provider value={{ cartProducts, addProduct, userCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
