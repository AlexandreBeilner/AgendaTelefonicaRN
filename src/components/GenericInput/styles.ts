import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");
export const InputContainer = styled.View`
`;
export const InputLabel = styled.Text`
  font-size: 20px;
  color: black;
  margin-left: 4px;
`;

export const InputField = styled.View<{ borderColor: string }>`
  height: 80px;
  width: ${width * 0.92}px;
  background-color: #eee;
  border-radius: 10px;
  flex-direction: row;
  margin-bottom: 15px;
  margin-top: 15px;
  align-items: center;
  justify-content: center;
  border: 1px ${props => props.borderColor};
`;
export const InputData = styled.TextInput`
  height: 100%;
  flex: 1;
  font-size: 18px;
`;

export const IconView = styled.View`
  align-items: center;
  height: 100%;
  width: 15%;
  justify-content: center;
`;

export const IsRequiredText = styled.Text`
  color: red;
  font-size: 17px;
`;
