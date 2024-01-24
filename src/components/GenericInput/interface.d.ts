import {
  KeyboardTypeOptions,
} from "react-native";

export interface InputProps{
  value: string,
  onChangeText:  ((text: string) => void),
  placeHolder: string,
  iconName: string,
  keyBoardType?:  KeyboardTypeOptions | undefined;
  label: string,
  notEmpty?: boolean,
  requiredText? : string
}
