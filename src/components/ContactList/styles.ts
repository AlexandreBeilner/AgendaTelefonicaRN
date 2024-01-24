import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Animated from 'react-native-reanimated';
import { GestureHandlerRootView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");
export const ContactListContainer = styled(Animated.View)`
`;

export const ShapeContact = styled.TouchableOpacity`
  width: ${width * 0.90}px;
  height: ${width * 0.20}px;
  border-radius: 15px;
  background-color: #eee;
  margin-top: 15px;
  margin-bottom: 15px;
  align-self: center;
  elevation: 5;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
`;

export const UserName = styled.Text` 
  font-size: 18px;
  color: black;
`;

export const UserNumber = styled.Text` 
  font-size: 18px;
  color: black;
`;

export const ContactBody = styled.View` 
  flex: 1;
`;

export const ContactData = styled.Text` 
  font-size: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: black;
`;

export const BackHome = styled.TouchableOpacity` 
  height: 50px;
  width: 50px;
  align-items: center;
  justify-content: center;
`;

export const EditContainer = styled(GestureHandlerRootView)`
  flex: 1;
`;

export const HeaderInfo = styled.View` 
  height: ${height*0.1}px;
  width: ${width}px;
  background-color: white;
  border-bottom-width: 1.5px;
  border-bottom-color: black;
  flex-direction: row;
  align-items: center;
`;

export const BodyInfo = styled.View` 
  flex: 1.5;
  justify-content: space-evenly;
`;

export const DataField = styled.View`
  width: ${width*0.92}px;
  align-self: center;
  border-radius: 15px;
  background-color: #ddd;
  border: 2px #ccc;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
export const FieldName = styled.Text` 
  font-size: 25px;
  color: black;
  font-weight: bold;
`;


export const HeaderEdit = styled.View` 
  height: ${height*0.1}px;
  width: ${width}px;
  background-color: white;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1.5px;
  border-bottom-color: black;
`;

export const HeaderText = styled.Text` 
  color: black;
  font-size: 20px;
  flex: 1;
  text-align: center;
  margin-right: 50px;
`;

export const BodyEdit = styled.View` 
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: space-evenly;
`;


export const DeleteView = styled.View` 
  position: absolute;
  width: ${width}px;
  height: ${width * 0.20}px;
  background-color: red;
  z-index: 1;
  left: ${-width}px;
  top: 15px;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
  flex-direction: row;
`;

export const DeleteText = styled.Text` 
  font-size: 25px;
  text-transform: uppercase;
  color: white;
  margin-right: 20px;
`;

export const InfoButton = styled.TouchableOpacity<{bg:string}>` 
  background-color: ${props => props.bg};
  width: ${width*0.40}px;
  height: 80px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 15px;
  margin-top: 15px;
  align-self: center;
`;

export const ButtonLabel = styled.Text<{color: string}>`
  color: ${props=> props.color};
  font-size: 20px;
`;

export const ButtonView = styled.View` 
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  flex: 0.5;
`;

export const LabelHeader = styled.Text`  
  font-size: 20px;
  color: black;
  text-align: center;
  flex: 1;
  margin-right: 50px;
`;
