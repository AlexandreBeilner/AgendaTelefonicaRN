import { InicialStateProps } from "./interface";
import { Reducer } from "react";

const NEED_UPDATE = "NEED_UPDATE";


const InicialState: InicialStateProps = {
  needUpdate: false,
};

const reducer: Reducer<InicialStateProps, any> = (state: InicialStateProps, action: any) => {
  switch (action.type) {
    case NEED_UPDATE: {
      return {
        ...state,
        needUpdate: !state.needUpdate
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};

export { InicialState, reducer };
