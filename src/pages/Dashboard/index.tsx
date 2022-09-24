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
        overflowX="auto"
        display="flex"
        justifyContent={["normal", "normal", "center"]}
        flexWrap={["nowrap", "nowrap", "wrap"]}
        mt="5"
        ml={["5", "5", "none"]}
        mr={["5", "5", "none"]}
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
