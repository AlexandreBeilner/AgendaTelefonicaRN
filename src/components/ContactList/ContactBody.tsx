import React from "react";
import { ShapeContact, UserName, UserNumber } from "./styles.ts";
import { ContactBodyProps } from "./interface";

const ContactBody: React.FC<ContactBodyProps> = ({ setContactInfo, name, cellNum }) => {

  return (
    <ShapeContact onPress={() => {
      setContactInfo(true);
    }}>
      <UserName>{name}</UserName>
      <UserNumber>{cellNum}</UserNumber>
    </ShapeContact>
  );
};

export { ContactBody };
