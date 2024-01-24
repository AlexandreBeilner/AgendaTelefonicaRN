import React, { useContext, useEffect, useState } from "react";
import { HomeContainer } from "./styles.ts";
import { AddButton } from "../../components/AddButton";
import { ContactList } from "../../components/ContactList";
import { ActivityIndicator, FlatList, ListRenderItem, Text } from "react-native";
import { HeaderList } from "../../components/HeaderList";
import { Notification } from "../../components/Notification";
import { AppContext } from "../../App.tsx";

interface ContactProps {
  id: number,
  nome: string,
  telefone: string,
  endereco?: string | undefined
}

const Home: React.FC = () => {
  const [contacts, setContacts] = useState<ContactProps[]>([]);
  const [getData, setGetData] = useState(false);
  const [searchContact, setSearchContact] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [searchResult, setSearchResult] = useState<ContactProps[]>();

  const { state } = useContext(AppContext);
  const getContact = async () => {
    try {
      const response = await fetch("http://192.168.43.220:8080/crudIXC/api/contatos/listar", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer 50be8559-160e-4dc6-ae8c-5bc2493a7b5e"
        }
      });
      const contacts = await response.json();
      if (contacts.tipo === "sucesso") {
        setContacts(contacts.resposta);
        setGetData(true);
      } else {
        setVisibility(true);
      }
    } catch (e) {
      setVisibility(true);
    }
  };
  useEffect(() => {
    getContact();
  }, [state.needUpdate]);

  useEffect(() => {
    setSearchResult(contacts.filter(
      (value) => {
        return value.nome.toLowerCase().includes(searchContact.toLowerCase());
      }));
  }, [searchContact]);

  const renderContacts: ListRenderItem<ContactProps> | null | undefined = ({ item }) => {
    return (
      <ContactList key={item.id + item.telefone} id={item.id}
                   cellNum={item.telefone}
                   address={item.endereco} name={item.nome}
      ></ContactList>
    );
  };

  return (
    <HomeContainer>
      <Notification setVisibility={setVisibility} message={"Erro ao buscar dados, reinicie o app"} type={"erro"}
                    background={"red"} visibility={visibility} />
      <HeaderList value={searchContact} setValue={setSearchContact}></HeaderList>
      {contacts.length === 0 && !getData ? <ActivityIndicator size={30} color={"#0011f3"} /> :
        <FlatList removeClippedSubviews={false} keyboardShouldPersistTaps={"always"}
                  data={searchContact ? searchResult : contacts}
                  renderItem={renderContacts}
                  showsVerticalScrollIndicator={false} />}
      {contacts.length === 0 && getData && <Text>Sua lista de contatos esta vazia</Text>}
      <AddButton></AddButton>
    </HomeContainer>
  );
};

export { Home };
