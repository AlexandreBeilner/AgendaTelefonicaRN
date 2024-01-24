export interface ButtonProps {
  backgroundColor: string
  textColor: string,
  buttonName: string,
  onPress: () => void;
  elevation?: boolean;
  disable?: boolean
}
