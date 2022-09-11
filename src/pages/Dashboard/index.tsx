import { Header } from "../../components/Header";
import { Card } from "../../components/Card";

import { useProducts } from "../../providers/Products";
import { Grid } from "@chakra-ui/react";

export const Dashboard = () => {
  const { products } = useProducts();

  return (
    <>
      <Header />
      <Grid
        display="flex"
        justifyContent="center"
        mt="5"
        flexWrap="wrap"
        w="100%"
        gap={10}
      >
        {products.map((product, id) => (
          <Card product={product} key={id} />
        ))}
      </Grid>
    </>
  );
};
