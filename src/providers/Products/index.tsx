import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  Dispatch,
  SetStateAction,
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
  displayProducts: Product[];
  inputProduct: string;
  loading: boolean;
  setInputProduct: Dispatch<SetStateAction<string>>;
  loadProducts: (product: Product) => Promise<void>;
  searchProduct: (inputProduct: string) => void;
}

const ProductContext = createContext<ProductProviderData>(
  {} as ProductProviderData
);

export const ProductProvider = ({ children }: ProductProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [displayProducts, setDisplayProducts] = useState<Product[]>([]);
  const [inputProduct, setInputProduct] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  async function loadProducts() {
    await api
      .get("/products")
      .then((response) => {
        setProducts([...products, ...response.data]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    loadProducts();
  }, []);

  const searchProduct = (inputProduct: string) => {
    inputProduct = inputProduct.toLocaleLowerCase();
    const filteredProduct = products.filter((product) => {
      if (
        product.title.toLocaleLowerCase().includes(inputProduct) ||
        product.category.toLocaleLowerCase().includes(inputProduct)
      ) {
        return product;
      }
    });
    setDisplayProducts(filteredProduct);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        inputProduct,
        displayProducts,
        setInputProduct,
        loadProducts,
        searchProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
