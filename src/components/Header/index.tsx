import BurguerKenzie from "../../assets/Rectangle.png";
import { Input } from "../Form/Input";

import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";

import {
  Flex,
  Image,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      bgColor="gray.0"
      w="100%"
      h="80px"
      paddingLeft="115px"
      paddingRight="115px"
    >
      <Image src={BurguerKenzie} alt="BurguerKenzie" />

      <Flex>
        <InputGroup>
          <Input
            placeholder="Digitar Pesquisa"
            w="365px"
            h="60px"
            bgColor="white"
            borderRadius="lg"
          />
          <InputRightElement paddingRight="10">
            <IconButton
              aria-label="Search database"
              icon={<FaSearch />}
              color="white"
              bgColor="primary.100"
              _hover={{ bgColor: "primary.50" }}
            />
          </InputRightElement>
        </InputGroup>
        <IconButton
          aria-label="Search database"
          icon={<FaShoppingCart />}
          variant="link"
          color="gray.50"
          size="lg"
        />
        <IconButton
          aria-label="Search database"
          icon={<FaSignOutAlt />}
          variant="link"
          color="gray.50"
          size="lg"
        />
      </Flex>
    </Flex>
  );
};
