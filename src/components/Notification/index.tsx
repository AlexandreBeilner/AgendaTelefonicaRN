import React from "react";
import { CloseNotification, IconType, NotificationContainer, NotifyMessage } from "./styles.ts";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Extrapolation, interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { Dimensions } from "react-native";
import { NotifyProps } from "./interface";


const Notification: React.FC<NotifyProps> = ({message, type, visibility, setVisibility, background}) => {
  const pan = Gesture.Pan();

  const {width} = Dimensions.get("window")

  const widthX = width/2;

  const translationX = useSharedValue(0);
  const opacity = useSharedValue(1);

  pan.onUpdate(event => {
    translationX.value = event.translationX;
    opacity.value = interpolate(translationX.value, [-200, 0, 200], [0, 1, 0], Extrapolation.CLAMP);
  }).onEnd(() => {
    if (translationX.value > 20) {
      translationX.value = withTiming(widthX, { duration: 500 });
      opacity.value = withTiming(0, { duration: 500 });
      setTimeout(() => {
        setVisibility(false);
      }, 1000);
    }
    else if (translationX.value < -20) {
      translationX.value = withTiming(-widthX, { duration: 500 });
      opacity.value = withTiming(0, { duration: 500 });
      setTimeout(() => {
        setVisibility(false);
      }, 1000);
    }
    else {
      translationX.value = 0;
      opacity.value = 1;
    }
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translationX.value }],
      opacity: opacity.value
    };
  });

  const selectIcon = (): {color: string, iconName: string} => {
    switch (type){
      case "sucesso": return {iconName: "check", color: "green"};
      case "erro": return {iconName: "exclamation", color: "red"};
      case "undefined": return {iconName: "question", color: "#FFBF00"};
    }
  }

  return (
    <>
      {visibility && <GestureDetector gesture={pan}>
        <NotificationContainer style={animatedStyle} backgound={background}>
          <IconType borderColor={background}>
            <Icon name={selectIcon().iconName} color={selectIcon().color} size={30}/>
          </IconType>
          <CloseNotification onPress={() => {setVisibility(false)}}>
            <Icon name={"times"} size={30} color={"white"} />
          </CloseNotification>
          <NotifyMessage numberOfLines={2}>{message}</NotifyMessage>
        </NotificationContainer>
      </GestureDetector>}
    </>
  );
};

export { Notification };
