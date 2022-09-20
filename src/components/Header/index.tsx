import BurguerKenzie from "../../assets/Rectangle.png";
import { Input } from "../Form/Input";
import { EmptyCartModal } from "../EmptyCartModal";
import { CartModal } from "../CartModal";

import { useProducts } from "../../providers/Products";

import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";

import {
  Flex,
  Image,
  InputGroup,
  InputRightElement,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";

export const Header = () => {
  const {
    isOpen: isEmptyCartOpen,
    onOpen: onEmptyCartOpen,
    onClose: onEmptyCartClose,
  } = useDisclosure();
  const {
    isOpen: isCartOpen,
    onOpen: onCartOpen,
    onClose: onCartClose,
  } = useDisclosure();

  const { inputProduct, searchProduct, setInputProduct } = useProducts();

  return (
    <>
      <EmptyCartModal isOpen={isEmptyCartOpen} onClose={onEmptyCartClose} />
      <CartModal isOpen={isCartOpen} onClose={onCartClose} />
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
              onChange={(e) => setInputProduct(e.target.value)}
            />
            <InputRightElement paddingRight="10">
              <IconButton
                onClick={() => searchProduct(inputProduct)}
                aria-label="Search"
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
            onClick={onCartOpen}
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
    </>
  );
};
