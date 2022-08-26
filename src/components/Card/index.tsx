import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

export const Card = () => {
  const property = {
    imageUrl: "https://i.ibb.co/BPBXgVv/202110050424-xijoowz172-1.png",
    imageAlt: "Combo Kenzie",
    title: "Combo Kenzie",
    category: "Combos",
    price: "R$ 14.00",
  };

  return (
    <Box
      w="300px"
      bgColor="gray.0"
      border="2px solid"
      borderColor="gray.100"
      borderRadius="md"
      _hover={{ borderColor: "primary.100" }}
    >
      <Flex justifyContent="center">
        <Image src={property.imageUrl} alt={property.imageAlt} />
      </Flex>

      <Flex
        flexDirection="column"
        bgColor="white"
        borderBottomRadius="md"
        paddingTop="23px"
        paddingBottom="23px"
        paddingLeft="21px"
        gap="14px"
      >
        <Heading as="h3" fontSize="lg">
          {property.title}
        </Heading>

        <Text fontSize="sm" color="gray.300">
          {property.category}
        </Text>

        <Text fontSize="sm" fontWeight="600" color="primary.100">
          {property.price}
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
