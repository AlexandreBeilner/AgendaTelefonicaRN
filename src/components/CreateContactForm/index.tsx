import React, { useContext, useState } from "react";
import { ButtonView, FormContainer, InvalidInput } from "./styled.ts";
import { GenericInput } from "../GenericInput";
import { ButtonGeneric } from "../ButtonGeneric";
import { AppContext } from "../../App.tsx";
import { Notification } from "../Notification";
import { phoneMask } from "../../utils/UtilFunction.ts";

const CreateContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [cellNum, setCellNum] = useState("");
  const [address, setAddress] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
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

  const validateCellNum = (): boolean => {
    const regex = /^\+(\d{2})\(\d{2}\)\d{5}-\d{4}$/;

    return regex.test(cellNum);
  };
  const validateName = (): boolean => {
    return name.trim() !== "";
  };
  const saveInDb = async () => {
    if (validateCellNum() && validateName()) {
      try {
        const resp = await fetch("http://192.168.43.220:8080/crudIXC/api/contatos/cadastrar", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer 50be8559-160e-4dc6-ae8c-5bc2493a7b5e"
          },
          body: JSON.stringify({
            name,
            cellNum,
            address
          })
        });

        const response = await resp.json();

        if (response.tipo === "sucesso") {
          setAddress("");
          setName("");
          setCellNum("");
          dispatch({ type: "NEED_UPDATE" });
          setNotify({ type: "sucesso", background: "green", message: "Contato criado com sucesso" });
        } else {
          setNotify({ type: "erro", background: "red", message: response.resposta });
        }
      } catch (error) {
        setNotify({ type: "erro", background: "red", message: "Erro de conexão" });
      }
    } else if (!validateName()) {
      setNotify({ type: "undefined", background: "#FFBF00", message: "O campo de nome é obrigatório" });
    } else if (!validateCellNum()) {
      setNotify({
        type: "undefined",
        background: "#FFBF00",
        message: "O campo de telefone deve estar no formato +55(12)34567-8910"
      });
    } else {
      setIsInvalid(true);
    }
    setVisibility(true);
  };

  const formatCellNum = (cellNum: string) => {
    if (cellNum.length <= 17) {
      setCellNum(phoneMask(cellNum));
    }
  };


  return (
    <FormContainer>
      <Notification type={notify.type} message={notify.message} visibility={visibility} background={notify.background}
                    setVisibility={setVisibility} />
      <GenericInput
        label={"Nome do contato"}
        notEmpty={true}
        value={name}
        onChangeText={setName}
        placeHolder={"Digite o nome"}
        iconName={"user"}
        requiredText={"Este campo não pode estar vazio"}
      />
      <GenericInput
        keyBoardType={"numeric"}
        notEmpty={true}
        label={"Telefone do contato"}
        value={cellNum}
        onChangeText={formatCellNum}
        placeHolder={"Digite o telefone"}
        iconName={"phone"}
        requiredText={"O campo deve estar no formato +55(49)12345-6789"}
      />
      {isInvalid && <InvalidInput lineBreakMode={"tail"} numberOfLines={2}>O numero não atende o formato
        +55(12)34567-8910</InvalidInput>}
      <GenericInput
        label={"Endereço do contato (opcional)"}
        value={address}
        onChangeText={setAddress}
        placeHolder={"Digite o endereço"}
        iconName={"map-marker-alt"}
      />
      <ButtonView>
        <ButtonGeneric
          elevation={true}
          textColor={"#ffffff"}
          onPress={saveInDb}
          backgroundColor={"#3861d5"}
          buttonName={"Salvar"} />
      </ButtonView>
    </FormContainer>
  );
};

export { CreateContactForm };
