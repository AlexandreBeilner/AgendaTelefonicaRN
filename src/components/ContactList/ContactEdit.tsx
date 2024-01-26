import React, { useContext, useState } from "react";
import { Notification } from "../Notification";
import { BackHome, BodyEdit, EditContainer, HeaderEdit, HeaderText } from "./styles.ts";
import Icon from "react-native-vector-icons/FontAwesome5";
import { GenericInput } from "../GenericInput";
import { ButtonGeneric } from "../ButtonGeneric";
import { EditProps } from "./interface";
import { AppContext } from "../../App.tsx";
import { phoneMask } from "../../utils/UtilFunction.ts";

const ContactEdit: React.FC<EditProps> = ({
                                            cellNum,
                                            id,
                                            name,
                                            address,
                                            setIsVisible
                                          }) => {

  const [editName, setEditName] = useState(name as string);
  const [editNum, setEditNum] = useState(cellNum as string);
  const [editAddress, setEditAddress] = useState(address as string);
  const [disable, setDisable] = useState(false);
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

  const updateInDb = async () => {
    setDisable(true);
    if (editName && editNum) {
      try {
        const resp = await fetch(`http://192.168.112.209:8080/crudIXC/api/contatos/atualizar/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer 50be8559-160e-4dc6-ae8c-5bc2493a7b5e"
          },
          body: JSON.stringify({
            name: editName,
            cellNum: editNum,
            address: editAddress
          })
        });

        const response = await resp.json();

        if (response.tipo === "sucesso") {
          dispatch({ type: "NEED_UPDATE" });
          setNotify({ type: "sucesso", message: "Contato atualizado com sucesso", background: "green" });
        } else {
          setNotify({ type: "erro", message: response.resposta, background: "red" });
        }

      } catch (e) {
        setNotify({ type: "erro", message: "Erro de conexão", background: "red" });
      }
    } else {
      setNotify({ type: "undefined", message: "Campo de nome e numero devem ser preenchidos", background: "#FFBF00" });
    }
    setVisibility(true);
    setDisable(false);
  };

  const formatCellNum = (cellNum: string) => {
    if (cellNum.length <= 17) {
      setEditNum(phoneMask(cellNum));
    }
  };

  return (
    <EditContainer key={cellNum + id}>
      <Notification type={notify.type} message={notify.message} visibility={visibility} background={notify.background}
                    setVisibility={setVisibility} />
      <HeaderEdit>
        <BackHome onPress={() => {
          setIsVisible(false);
        }}>
          <Icon name={"times"} size={40} color={"black"} />
        </BackHome>
        <HeaderText>Editar informarções</HeaderText>
      </HeaderEdit>
      <BodyEdit>
        <GenericInput
          label={"Nome do contato"}
          value={editName}
          onChangeText={setEditName}
          placeHolder={"Atualize o nome"}
          iconName={"user"}
          notEmpty={true}
          requiredText={"Este campo não pode estar vazio"}
        />
        <GenericInput
          keyBoardType={"numeric"}
          label={"Numero do contato"}
          value={editNum}
          onChangeText={formatCellNum}
          placeHolder={"Atualize o numero"}
          iconName={"phone"}
          notEmpty={true}
          requiredText={"O campo deve estar no formato +55(49)12345-6789"}
        />
        <GenericInput
          label={"Endereço"}
          value={editAddress}
          onChangeText={setEditAddress}
          placeHolder={"Atualize o endereço"}
          iconName={"map-marker-alt"} />
        <ButtonGeneric disable={disable} backgroundColor={!disable ? "#3861d5" : "#386177"} textColor={"white"}
                       buttonName={"Salvar"} onPress={updateInDb} />
      </BodyEdit>
    </EditContainer>
  );
};

export { ContactEdit };
