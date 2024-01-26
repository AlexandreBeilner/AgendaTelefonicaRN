import React, { useContext, useState } from "react";
import {
  ContactBody,
  BackHome,
  HeaderInfo,
  BodyInfo,
  DataField,
  FieldName,
  ContactData,
  InfoButton,
  ButtonLabel,
  ButtonView,
  LabelHeader
} from "./styles.ts";
import {ContactInfoProps } from "./interface";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Alert, Modal } from "react-native";
import { Notification } from "../Notification";
import { ContactEdit } from "./ContactEdit.tsx";
import { AppContext } from "../../App.tsx";

const ContactInfo: React.FC<ContactInfoProps> = ({
                                                   address,
                                                   id,
                                                   name,
                                                   cellNum,
                                                   setContactInfo
                                                 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [notify, setNotify] = useState<{
    message: string,
    type: "undefined" | "erro" | "sucesso",
    background: "red" | "green" | "#FFBF00"
  }>({
    message: "",
    type: "undefined",
    background: "green"
  });

  const { dispatch } = useContext(AppContext);
  const deleteContact = () => {
    Alert.alert("Deletar contato", "Tem certeza que deseja deletar o contato?", [{
      text: "não",
      style: "cancel"
    }, {
      text: "sim",
      onPress: async () => {
        try {
          const resp = await fetch(`http://192.168.112.209:8080/crudIXC/api/contatos/deletar/${id}`, {
            method: "DELETE",
            headers: {
              Authorization: "Bearer 50be8559-160e-4dc6-ae8c-5bc2493a7b5e"
            }
          });
          const response = await resp.json();
          if (response.tipo === "sucesso") {
            dispatch({ type: "NEED_UPDATE" });
            setNotify({ type: "sucesso", message: "Contato deletado com sucesso", background: "green" });
          } else {
            setNotify({ type: "erro", message: response.resposta, background: "red" });
          }
        } catch (e) {
          setNotify({ type: "erro", message: "Erro de conexão", background: "red" });
        }
        setVisibility(true);
      }
    }]);
  };

  return (
    <ContactBody>
      <Notification type={notify.type} message={notify.message} visibility={visibility} background={notify.background}
                    setVisibility={setVisibility} />
      <HeaderInfo>
        <BackHome onPress={() => {
          setContactInfo(false);
        }}>
          <Icon name={"times"} size={40} color={"black"} />
        </BackHome>
        <LabelHeader>Informações do contato</LabelHeader>
      </HeaderInfo>
      <BodyInfo>
        <DataField>
          <FieldName>NOME</FieldName>
          <ContactData>{name}</ContactData>
        </DataField>
        <DataField>
          <FieldName>NUMERO DE TELEFONE</FieldName>
          <ContactData>{cellNum}</ContactData>
        </DataField>
        <DataField>
          <FieldName>ENDEREÇO</FieldName>
          <ContactData numberOfLines={5} ellipsizeMode={"tail"}>{address}</ContactData>
        </DataField>
        <ButtonView>
          <InfoButton onPress={() => {
            setIsVisible(true);
          }} bg={"#00449d"}>
            <ButtonLabel color={"white"}>Editar</ButtonLabel>
            <Icon name={"edit"} color={"white"} size={30} />
          </InfoButton>
          <InfoButton onPress={deleteContact} bg={"red"}>
            <ButtonLabel color={"white"}>Deletar</ButtonLabel>
            <Icon name={"trash"} color={"white"} size={30} />
          </InfoButton>
        </ButtonView>
      </BodyInfo>
      <Modal animationType={"slide"} visible={isVisible}>
        <ContactEdit name={name} cellNum={cellNum} id={id} setIsVisible={setIsVisible}
                     setContactInfo={setContactInfo} address={address} />
      </Modal>
    </ContactBody>
  );
};

export { ContactInfo };
