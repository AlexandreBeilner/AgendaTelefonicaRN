import React from "react";
import { ButtonGenericContainer, ButtonName } from "./styles.ts";
import { ButtonProps } from "./interface";


const ButtonGeneric: React.FC<ButtonProps> = ({
                                                buttonName,
                                                disable,
                                                onPress,
                                                backgroundColor,
                                                textColor,
                                                elevation
                                              }) => {
  return (
    <ButtonGenericContainer disabled={disable} elevation={elevation} backgroundColor={backgroundColor}
                            onPress={onPress} activeOpacity={0.7}>
      <ButtonName color={textColor}>{buttonName}</ButtonName>
    </ButtonGenericContainer>
  );
};

export { ButtonGeneric };
