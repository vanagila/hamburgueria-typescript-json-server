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
        // templateColumns="repeat(auto-fill, minmax(480px, 1fr))"
        // gap={5}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_) => (
          <Card />
        ))}
      </Grid>
    </>
  );
};
