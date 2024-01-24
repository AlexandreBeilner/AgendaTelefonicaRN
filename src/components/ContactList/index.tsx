import React, { useContext, useState } from "react";
import { ContactListContainer, DeleteView, DeleteText } from "./styles.ts";
import { ContactBody } from "./ContactBody.tsx";
import { Contact } from "./interface";
import { Dimensions, Modal } from "react-native";
import { ContactInfo } from "./ContactInfo.tsx";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import Icon from "react-native-vector-icons/FontAwesome5";
import { AppContext } from "../../App.tsx";

const ContactList: React.FC<Contact> = ({ address, id, name, cellNum }) => {
  const [isVisible, setIsVisible] = useState(false);

  const { dispatch } = useContext(AppContext);

  const { width } = Dimensions.get("window");

  const position = useSharedValue(0);
  const pan = Gesture.Pan();
  pan.minDistance(50).onUpdate(event => {
    if (event.translationX > 0) {
      position.value = event.translationX;
    }
  }).onEnd(() => {
    if (position.value >= width / 2.5) {
      const deleteContact = async () => {
        try {
          const resp = await fetch(`http://192.168.43.220:8080/crudIXC/api/contatos/deletar/${id}`, {
            method: "DELETE",
            headers: {
              Authorization: "Bearer 50be8559-160e-4dc6-ae8c-5bc2493a7b5e"
            }
          });
          const response = await resp.json();
          if (response.tipo === "sucesso") {
            dispatch({ type: "NEED_UPDATE" });
          }
        } catch (e) {
          console.log(e)
        }
      };
      deleteContact();
    } else {
      position.value = withTiming(0);
    }
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: position.value }]
  }));

  return (
    <GestureDetector gesture={pan}>
      <ContactListContainer style={animatedStyle}>
        <ContactBody id={id} name={name} cellNum={cellNum}
                     setContactInfo={setIsVisible}></ContactBody>
        <Modal animationType={"slide"} visible={isVisible}>
          <ContactInfo key={id} id={id} name={name}
                       address={address}
                       cellNum={cellNum}
                       setContactInfo={setIsVisible} />
        </Modal>
        <DeleteView>
          <DeleteText>excluir</DeleteText>
          <Icon name={"trash-alt"} size={50} color={"white"} />
        </DeleteView>
      </ContactListContainer>
    </GestureDetector>
  );
};

export { ContactList };
