import styled from "styled-components/native";
import { Dimensions } from "react-native";

const {width} = Dimensions.get("window")

export const ButtonGenericContainer = styled.TouchableOpacity<{backgroundColor: string, elevation: boolean | undefined}>`
  height: 80px;
  width: ${width * 0.45}px;
  border-radius: 15px;
  background-color: ${props => props.backgroundColor};
  justify-content: center;
  align-items: center;
  elevation: ${props => props.elevation ? 5 : 0};
`;

export const ButtonName = styled.Text<{color: any}>`
  color: ${props => props.color ? props.color : "black"};
  font-size: 20px;
`;
