import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import Logo from "../assets/icons2/main-logo.svg";
import Nomer from "./Nomer";
import NomerBor from "./NomerBor";

const Kirish = () => {
  const { isOpen, onOpen, onClose} = useDisclosure();
  const [state, setState] = useState("");
  function Continue(){
    if(state.length>0){
      <Nomer />
    }else{
      <NomerBor />
    }
  }
  return (
    <div>
      <a className="nav__btn" onClick={onOpen}>
        <img src="https://beeline.uz/binaries/content/assets/js/nd/img/icons/key.svg"></img>
        <span className="kirish">Kirish</span>
      </a>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader display={"flex"} justifyContent="center">
            <img src={Logo} alt="" />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <h3
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                SMS orqali kirish
              </h3>
              <h5
                style={{
                  fontWeight: "400",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                Parol bilan kirish
              </h5>
            </div>
            <p style={{ paddingTop: "20px", paddingBottom: "10px" }}>
              Telefon raqami
            </p>
            <InputGroup onChange={(e) => setState(e.target.value)}>
              <InputLeftAddon children="+998" />
              <Input type="tel" />
            </InputGroup>
            <Button
                variant="solid"
                colorScheme="yellow"
                borderRadius="50px"
                w="100%"
                mt='5'
                onClick={() => Continue()}
            >
        Davom etish
      </Button>
            {/* <NomerBor />
            <Nomer /> */}
            <div>
              
            </div>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Kirish;
