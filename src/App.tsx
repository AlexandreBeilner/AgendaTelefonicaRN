import React, { createContext, useReducer } from "react";
import { Navigator } from "./navigation/Navigation.tsx";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { reducer, InicialState } from "./hooks/reducer.ts";

// @ts-ignore
export const AppContext: React.Context<any> = createContext();

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, InicialState);


  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Navigator></Navigator>
      </GestureHandlerRootView>
    </AppContext.Provider>
  );
};

export { App };
