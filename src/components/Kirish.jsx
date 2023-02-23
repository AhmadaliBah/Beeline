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
import Cross from '../assets/icons2/cross-circle.svg'

const Kirish = () => {
  const { isOpen, onOpen, onClose} = useDisclosure();
  const [state, setState] = useState("");

    function Continue(){
      if(setState.length<0){ 
        setState(<NomerBor />)
      }else if(setState.length>0){
        setState(<Nomer />)
      }
    }

  return (
    <div>
      <a className="nav__btn" onClick={onOpen}>
        <img src="https://beeline.uz/binaries/content/assets/js/nd/img/icons/key.svg" style={{width: '20px', height: '9px'}}></img>
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
            <InputGroup onChange={(e) => Continue(e.target.value)}>
              <InputLeftAddon children="+998" />
              <Input type="tel" />
            </InputGroup>
            <div>
              {state}
            </div>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default Kirish;
