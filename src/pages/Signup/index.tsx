import BurguerKenzie from "../../assets/BurguerKenzie.svg";
import Ellipse from "../../assets/ellipse.svg";
import { Input } from "../../components/Form/Input";
import { useUser } from "../../providers/User";

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
} from "@chakra-ui/react";

interface SignUpData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const Signup = () => {
  const { signUp } = useUser();

  const signupSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .min(6, "a senha deve possuir ao menos 6 caracteres")
      .required("Campo obrigatório"),
    confirmPassword: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "Senhas não conferem")
      .required("Campo obrigatório"),
  });

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignUpData>({ resolver: yupResolver(signupSchema) });

  const history = useHistory();

  const handleClick = (data: SignUpData) => {
    signUp(data);
  };

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
          <Image
            src={Ellipse}
            alt="ellipse"
            mt="7"
            display={["none", "none", "block"]}
          />
        </Grid>

        <Grid
          w={["383px", "383px", "500px"]}
          as="form"
          onSubmit={handleSubmit(handleClick)}
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
              onClick={() => history.push("/")}
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
              error={errors.name}
              {...register("name")}
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
              {...register("confirmPassword")}
            />
          </VStack>

          <Button
            type="submit"
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
