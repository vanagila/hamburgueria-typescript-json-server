import BurguerKenzie from "../../assets/BurguerKenzie.svg";
import Ellipse from "../../assets/ellipse.svg";
import { Input } from "../../components/Form/Input";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FiShoppingBag } from "react-icons/fi";

import {
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  VStack,
  Text,
  Box,
  Icon,
  HStack,
  Center,
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
    <Flex
      alignItems="center"
      h={["auto", "auto", "100vh", "100vh"]}
      bgColor="white"
    >
      <Flex
        w="100%"
        justifyContent="center"
        flexDirection={["column-reverse", "column-reverse", "row", "row"]}
        alignItems="center"
      >
        <Grid
          w={["383px", "383px", "500px"]}
          as="form"
          onSubmit={handleSubmit(handleSigIn)}
          padding="26px 24px"
          border="3px solid"
          borderColor="gray.0"
          borderRadius="md"
          bgColor="white"
          shadow="md"
        >
          <Heading as="h3" size="lg">
            Login
          </Heading>
          <VStack spacing="6" mt="5">
            <Box w="100%">
              <Input
                type="email"
                bgColor="gray.0"
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
              bgColor="gray.0"
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

        <Grid bg="white" paddingLeft={[null, null, "39px", "39px"]}>
          <Image
            src={BurguerKenzie}
            alt="BurguerKenzie"
            w="243px"
            h="60px"
            mb="5"
          />

          <HStack
            direction="row"
            w="100%"
            padding="16px 14px"
            spacing="19px"
            border="1px solid"
            borderColor="gray.100"
            borderRadius="md"
            bgColor="white"
            shadow="md"
          >
            <Center boxSize="60px" bgColor="primary.50" borderRadius="md">
              <Icon as={FiShoppingBag} color="primary.100" w="24px" h="24px" />
            </Center>
            <Text fontSize="sm" fontWeight="500" color="gray.300">
              A vida é como um sanduíche, é preciso
              <br /> recheá-la com os <b>melhores</b>
              <br /> ingredientes.
            </Text>
          </HStack>

          <Image src={Ellipse} alt="ellipse" mt="7" />
        </Grid>
      </Flex>
    </Flex>
  );
};
