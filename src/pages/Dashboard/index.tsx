import { Header } from "../../components/Header";

import { useProducts } from "../../providers/Products";

export const Dashboard = () => {
  const { products } = useProducts();

  console.log(products);

  return <Header />;
};
