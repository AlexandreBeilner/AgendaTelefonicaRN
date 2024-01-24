import React, { useState } from "react";
import { AddButtonContainer, ButtonShape, BackButton, HeaderCCContainer, TextHeader } from "./styles.ts";
import Icon from "react-native-vector-icons/AntDesign";
import { Dimensions, Modal } from "react-native";
import { CreateContactForm } from "../CreateContactForm";


const { width } = Dimensions.get("window");

const AddButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <AddButtonContainer>
      <ButtonShape onPress={() => {
        setIsVisible(true);
      }}>
        <Icon name={"plus"} size={width / 10} color={"black"} />
      </ButtonShape>
      <Modal visible={isVisible} animationType={"slide"}>
        <HeaderCCContainer>
          <BackButton onPress={() => setIsVisible(false)}>
            <Icon name={"close"} size={40} color={"black"} />
          </BackButton>
          <TextHeader>Criar contato</TextHeader>
        </HeaderCCContainer>
        <CreateContactForm />
      </Modal>
    </AddButtonContainer>
  );
};
export { AddButton };
