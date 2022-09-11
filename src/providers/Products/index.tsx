import { AxiosResponse } from "axios";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

import { api } from "../../services/api";

interface Product {
  image: string;
  title: string;
  category: string;
  price: number;
  id: number;
}

interface ProductProps {
  children: ReactNode;
}

interface ProductProviderData {
  products: Product[];
  loadProducts: (product: Product) => Promise<void>;
}

const ProductContext = createContext<ProductProviderData>(
  {} as ProductProviderData
);

export const ProductProvider = ({ children }: ProductProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  async function loadProducts() {
    await api
      .get("/products")
      .then((response) => {
        setProducts([...products, ...response.data]);
      })
      .catch((err) => console.log(err));
  }

  //ver useCallback

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loadProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
