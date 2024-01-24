import React from "react";

export interface NotifyProps{
  type: "erro" | "sucesso" | "undefined",
  message: string,
  visibility: boolean,
  background: "red" | "green" | "#FFBF00"
  setVisibility:  React.Dispatch<React.SetStateAction<boolean>>
}
