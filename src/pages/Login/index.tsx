import BurguerKenzie from "../../assets/BurguerKenzie.svg";
import { Input } from "../../components/Form/Input";

import { Flex, Grid, Heading, Image, VStack } from "@chakra-ui/react";

export const Login = () => {
  return (
    <Flex alignItems="center" h="100vh" bg="white">
      <Flex
        w="100%"
        justifyContent="center"
        flexDirection="row"
        alignItems="center"
      >
        <Grid
          as="form"
          w="100%"
          padding="26px 24px"
          border="3px solid"
          borderColor="gray.0"
          borderRadius="md"
          bg="white"
          shadow="md"
        >
          <Heading size="lg">Login</Heading>
          <VStack spacing="6" mt="5">
            <Input
              name="name"
              bg="gray.0"
              _hover={{ bgColor: "white" }}
              placeholder="Nome completo"
            />
            <Input
              name="password"
              bg="gray.0"
              _hover={{ bgColor: "white" }}
              placeholder="Sua senha"
            />
          </VStack>
        </Grid>

        <Grid w="100%" bg="white" paddingLeft="39px"></Grid>
      </Flex>
    </Flex>
  );
};
