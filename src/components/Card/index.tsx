import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface Product {
  image: string;
  title: string;
  category: string;
  price: number;
  id: number;
}

interface CardProps {
  product: Product;
}

export const Card = ({ product }: CardProps) => {
  return (
    <Box
      minW="290px"
      bgColor="gray.0"
      border="2px solid"
      borderColor="gray.100"
      borderRadius="md"
      _hover={{ borderColor: "primary.100" }}
    >
      <Flex justifyContent="center">
        <Image src={product.image} alt={product.image} boxSize="130px" />
      </Flex>

      <Flex
        flexDirection="column"
        bgColor="white"
        borderBottomRadius="md"
        paddingTop="23px"
        paddingBottom="23px"
        paddingLeft="21px"
        gap="5px"
      >
        <Heading as="h3" fontSize="lg">
          {product.title}
        </Heading>

        <Text fontSize="sm" color="gray.300">
          {product.category}
        </Text>

        <Text fontSize="sm" fontWeight="600" color="primary.100">
          {product.price}
        </Text>

        <Button
          h="40px"
          w="106px"
          bgColor="gray.25"
          color="white"
          _hover={{ bgColor: "primary.100" }}
        >
          Adicionar
        </Button>
      </Flex>
    </Box>
  );
};
