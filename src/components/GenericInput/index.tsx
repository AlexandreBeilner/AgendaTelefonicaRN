import React, { useState } from "react";
import { InputContainer, InputData, IconView, InputField, InputLabel, IsRequiredText } from "./styles.ts";
import { InputProps } from "./interface";
import Icon from "react-native-vector-icons/FontAwesome5";
import { NativeSyntheticEvent, TextInputKeyPressEventData } from "react-native";

const GenericInput: React.FC<InputProps> = ({
                                              value,
                                              onChangeText,
                                              keyBoardType,
                                              placeHolder,
                                              iconName,
                                              label,
                                              notEmpty,
                                              requiredText
                                            }) => {
  const [isEmpty, setIsEmpty] = useState(false);

  const handleKeyPress = (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
    const keyPress = e.nativeEvent.key;
    if (keyPress === "Backspace" && value.length === 1 && notEmpty) {
      setIsEmpty(true);
    }
    if (isEmpty && keyPress !== "Backspace") {
      setIsEmpty(false);
    }
  };


  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputField borderColor={isEmpty ? "red" : "#bbb"}>
        <IconView>
          <Icon name={iconName} color={isEmpty ? "red" : "black"} size={40} />
        </IconView>
        <InputData
          placeholderTextColor={isEmpty ? "red" : "#bbb"}
          onKeyPress={handleKeyPress}
          keyboardType={keyBoardType}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeHolder}
        ></InputData>
      </InputField>
      {isEmpty && <IsRequiredText>{requiredText}</IsRequiredText>}
    </InputContainer>
  );
};

export { GenericInput };
