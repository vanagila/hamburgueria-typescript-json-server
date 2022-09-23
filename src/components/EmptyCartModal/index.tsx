import {
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

interface EmptyCartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmptyCartModal = ({ isOpen, onClose }: EmptyCartModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent h="160px">
        <ModalHeader bgColor="primary.100">
          <Heading as="h3" size="md" color="white">
            Carrinho de compras
          </Heading>
        </ModalHeader>
        <ModalCloseButton color="gray.100" />
        <ModalBody
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="lg" fontWeight="700" color="gray.600" align="center">
            Seu carrinho está vazio
          </Text>
          <Text fontSize="sm" color="gray.300">
            Adicione itens
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
