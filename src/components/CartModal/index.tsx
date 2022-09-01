import {
  Box,
  Center,
  Circle,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Image,
  Button,
  IconButton,
  Container,
  Square,
  ModalFooter,
} from "@chakra-ui/react";

import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartModal = ({ isOpen, onClose }: CartModalProps) => {
  const property = {
    imageUrl: "https://i.ibb.co/BPBXgVv/202110050424-xijoowz172-1.png",
    imageAlt: "Combo Kenzie",
    title: "Combo Kenzie",
    category: "Combos",
    price: "R$ 14.00",
    quantity: "1",
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader bgColor="primary.100">
          <Heading as="h3" size="md" color="white">
            Carrinho de compras
          </Heading>
        </ModalHeader>
        <ModalCloseButton color="gray.100" />

        <ModalBody mt="5" display="flex">
          <Center w="82px" h="80px" bgColor="gray.100" borderRadius="md">
            <Image src={property.imageUrl} alt={property.imageAlt} />
          </Center>

          <Flex justifyContent="space-between" ml="2.5" flexDirection="column">
            <Heading as="h3" fontSize="md">
              {property.title}
            </Heading>

            <Flex
              h="34px"
              w="100px"
              justifyContent="center"
              alignItems="center"
              bgColor="#f2f2f2"
              border="2px solid"
              borderColor="#f2f2f2"
              borderRadius="0"
            >
              <IconButton
                aria-label="minus"
                icon={<FaMinus />}
                variant="link"
                color="secondary"
                size="sm"
              />
              <Square size="8" bgColor="white">
                {property.quantity}
              </Square>
              <IconButton
                aria-label="plus"
                icon={<FaPlus />}
                variant="link"
                color="secondary"
                size="sm"
              />
            </Flex>
          </Flex>

          <IconButton
            aria-label="delete"
            icon={<FaTrash />}
            variant="link"
            color="gray.25"
            size="md"
            pl="40"
          />
        </ModalBody>
        <ModalFooter display="flex" flexDirection="column">
          <Box display="flex" justifyContent="space-evenly">
            <Text>Total</Text>
            <Text>{property.price}</Text>
          </Box>
          <Button w="100%" h="60px" color="gray.300">
            Remover todos
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
