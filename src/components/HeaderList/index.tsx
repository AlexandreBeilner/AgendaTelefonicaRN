import React from "react";
import { HeaderListContainer, SearchField, SearchInput } from "./styles.ts";
import Icon from "react-native-vector-icons/FontAwesome6";
import { HeaderListProps } from "./interface";

const HeaderList: React.FC<HeaderListProps> = ({ value, setValue }) => {
  return (
    <HeaderListContainer>
      <SearchField>
        <SearchInput
          placeholder={"Buscar contato"}
          placeholderTextColor={"#666"}
          value={value}
          onChangeText={(text) => setValue(text)} />
        <Icon name={"magnifying-glass"} size={30} color={"black"} />
      </SearchField>
    </HeaderListContainer>
  );

};

export { HeaderList };
