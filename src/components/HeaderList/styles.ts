import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");


export const SearchField = styled.View` 
  width: 92%;
  background-color: white;
  height: 70%;
  border-radius: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const SearchInput = styled.TextInput` 
  width: 85%;
  height: 100%;
  font-size: 16px;
`;

export const HeaderListContainer = styled.View`
  width: ${width}px;
  height: ${height * 0.09}px;
  background-color: black;
  align-items: center;
  justify-content: center;
`;
