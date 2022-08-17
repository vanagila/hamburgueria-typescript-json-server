import BurguerKenzie from "../../assets/BurguerKenzie.svg";

import { Flex, Grid, Heading, Image, Input, VStack } from "@chakra-ui/react";

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
            <Input placeholder="Seu email aqui"></Input>
            <Input placeholder="Sua senha aqui"></Input>
          </VStack>
        </Grid>

        <Grid w="100%" bg="white" paddingLeft="39px"></Grid>
      </Flex>
    </Flex>
  );
};
