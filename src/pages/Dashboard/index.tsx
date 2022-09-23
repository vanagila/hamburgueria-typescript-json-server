import { Header } from "../../components/Header";
import { Card } from "../../components/Card";

import { useProducts } from "../../providers/Products";
import { Grid, Skeleton } from "@chakra-ui/react";

export const Dashboard = () => {
  const { loading, products, inputProduct, displayProducts } = useProducts();

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
        {loading ? (
          <Skeleton
            startColor="primary.100"
            endColor="primary.50"
            height="20px"
          />
        ) : inputProduct === "" ? (
          products.map((product, id) => {
            return <Card product={product} key={id} />;
          })
        ) : (
          displayProducts.map((product, id) => {
            return <Card product={product} key={id} />;
          })
        )}
      </Grid>
    </>
  );
};
