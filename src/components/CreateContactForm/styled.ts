import styled from "styled-components/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const FormContainer = styled(GestureHandlerRootView)`
  align-items: center;
  flex: 1;
  justify-content: space-evenly;
`;
export const ButtonView = styled.View`
  align-items: center;
  justify-content: center;
`;

export const InvalidInput = styled.Text`
  font-size: 20px;
  color: red;
`;
