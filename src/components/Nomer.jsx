import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input
} from "@chakra-ui/react";
import Cross from '../assets/icons2/cross-circle.svg'

const Nomer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
              <Button
        onClick={onOpen}
        variant="solid"
        colorScheme="yellow"
        borderRadius="50px"
        w="100%"
        mt='5'
        >
        Davom etish
        </Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent p="10">
          <ModalCloseButton />
          <div style={{display: 'flex', justifyContent: 'center'}}>
          <img className="cross" src={Cross} alt="" />
          </div>
          <ModalBody>
            <h1 className="cross__text">Siz kiritilgan raqam topilmadi</h1>
          </ModalBody>
          <ModalFooter justifyContent="center" display="flex">
            <Button width="100px" justifyContent="center" display="flex" backgroundColor="black" borderRadius="50px" color="white" mr={3} onClick={onClose}>
              Ok
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Nomer;
