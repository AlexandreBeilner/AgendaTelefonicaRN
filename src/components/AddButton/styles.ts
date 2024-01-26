import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const AddButtonContainer = styled.View`
  flex: 1;
`;

export const ButtonShape = styled.TouchableOpacity`
  height: ${width / 6}px;
  width: ${width / 6}px;
  background-color: #ffe;
  elevation: 5;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 15px;
  right: 15px;
`;

export const HeaderCCContainer = styled.View`
  width: ${width}px;
  height: ${height * 0.10}px;
  border-bottom-width: 1px;
  border-bottom-color: black;
  flex-direction: row;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  height: 60%;
  width: 50px;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

export const TextHeader = styled.Text`
  font-size: 22px;
  align-self: center;
  color: black;
  text-align: center;
  flex: 1;
  margin-right: 50px;
`;
