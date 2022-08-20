import BurguerKenzie from "../../assets/BurguerKenzie.svg";
import Ellipse from "../../assets/ellipse.svg";
import { Input } from "../../components/Form/Input";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
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
  Link,
} from "@chakra-ui/react";

interface SignupData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const Signup = () => {
  const signupSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup.string().required("Campo obrigatório"),
    confirmPassword: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "Senhas não conferem"),
  });

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignupData>({ resolver: yupResolver(signupSchema) });

  const handleSigIn = (data: SignupData) => {
    console.log(data);
  };

  const history = useHistory();

  return (
    <Flex alignItems="center" h={["auto", "auto", "100vh", "100vh"]} bg="white">
      <Flex
        w="100%"
        justifyContent="center"
        flexDirection={["column", "column", "row", "row"]}
        alignItems="center"
      >
        <Grid bg="white" paddingRight={[null, null, "39px", "39px"]}>
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
          <Flex justifyContent="space-between">
            <Heading as="h3" size="lg">
              Cadastro
            </Heading>
            <Button
              variant="link"
              color="gray.300"
              onClick={() => history.push("/cadastrar")}
            >
              Retornar para o login
            </Button>
          </Flex>

          <VStack spacing="6" mt="5">
            <Input
              type="name"
              bg="gray.0"
              _hover={{ bgColor: "white" }}
              placeholder="Seu nome"
              label="Nome"
              error={errors.password}
              {...register("password")}
            />
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

            <Input
              type="password"
              bgColor="gray.0"
              _hover={{ bgColor: "white" }}
              placeholder="Confirmar senha"
              label="Confirmar Senha"
              error={errors.confirmPassword}
              {...register("password")}
            />
          </VStack>

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
      </Flex>
    </Flex>
  );
};
