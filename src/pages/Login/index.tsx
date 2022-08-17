import BurguerKenzie from "../../assets/BurguerKenzie.svg";
import { Input } from "../../components/Form/Input";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  VStack,
  Text,
  Box,
} from "@chakra-ui/react";

interface SignInData {
  email: string;
  password: string;
}

export const Login = () => {
  const signInSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignInData>({ resolver: yupResolver(signInSchema) });

  const handleSigIn = (data: SignInData) => {
    console.log(data);
  };

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
          onSubmit={handleSubmit(handleSigIn)}
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
            <Box w="100%">
              <Input
                type="email"
                bg="gray.0"
                _hover={{ bgColor: "white" }}
                placeholder="Seu email"
                label="Email"
                error={errors.email}
                {...register("email")}
              />
              {!errors.email && (
                <Text ml="1" mt="1" color="gray.100">
                  Exemplo: nome@email.com
                </Text>
              )}
            </Box>

            <Input
              type="password"
              bg="gray.0"
              _hover={{ bgColor: "white" }}
              placeholder="Sua senha"
              label="Senha"
              error={errors.password}
              {...register("password")}
            />
          </VStack>
          <Button
            type="submit"
            mt="5"
            bgColor="primary.100"
            color="white"
            _hover={{ bgColor: "primary.50" }}
            h="60px"
            size="md"
          >
            Logar
          </Button>

          <Text fontSize="sm" mt="5" textAlign="center" color="gray.50">
            Crie sua conta para saborear muitas delícias e <br /> matar sua
            fome!
          </Text>

          <Button
            mt="5"
            bgColor="gray.0"
            color="gray.300"
            _hover={{ bgColor: "gray.300", color: "gray.100" }}
            h="60px"
            size="md"
          >
            Cadastrar
          </Button>
        </Grid>

        <Grid w="100%" bg="white" paddingLeft="39px">
          <Image src={BurguerKenzie} alt="BurguerKenzie" boxSize="200px" />
        </Grid>
      </Flex>
    </Flex>
  );
};
