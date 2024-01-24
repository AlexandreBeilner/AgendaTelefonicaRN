import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Animated from "react-native-reanimated";
const {height, width} = Dimensions.get("window")

export const NotificationContainer = styled(Animated.View)<{backgound: string}>` 
  position: absolute;
  top: 50px;
  width: ${width*0.9}px;
  height: ${height*0.15}px;
  background-color: ${props => props.backgound};
  align-self: center;
  align-items: center;
  justify-content: center;
  z-index: 99;
  border-radius: 10px;
`;

export const NotifyMessage = styled.Text` 
  color: white;
  font-size: 25px;
`;

export const CloseNotification = styled.TouchableOpacity` 
  position: absolute;
  top: 5px;
  right: 5px;
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
`;

export const IconType = styled.View<{borderColor: string}>` 
  align-items: center;
  justify-content: center;
  height: 55px;
  width: 55px;
  background-color: white;
  border: 2px ${props => props.borderColor};
  border-radius: 30px;
  position: absolute;
  top: -30px;
  align-self: center;
`;
