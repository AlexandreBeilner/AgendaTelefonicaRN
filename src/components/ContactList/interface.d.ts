import React from "react";

export interface Contact {
  id: number
  name: string,
  cellNum: string,
  address: string | undefined,
}

export interface ContactBodyProps {
  id: number
  name: string,
  cellNum: string,
  setContactInfo: React.Dispatch<React.SetStateAction<boolean>>,
}

export interface ContactInfoProps {
  id: number
  name: string,
  cellNum: string,
  address: string | undefined,
  setContactInfo: React.Dispatch<React.SetStateAction<boolean>>,
}

export interface EditProps {
  name: string,
  cellNum: string,
  address: string | undefined,
  id: number,
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>,
  setContactInfo: React.Dispatch<React.SetStateAction<boolean>>,
}
