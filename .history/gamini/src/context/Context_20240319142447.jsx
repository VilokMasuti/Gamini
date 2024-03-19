import { createContext } from "react";
import runChat from "./../../../.history/gamini/src/Config/Api_20240319131400";
export const Context = createContext();

const ContextProvider = props => {
  const Seton = async Prompt => {
    runChat(Prompt);
  };
  Seton(" WHAT IS REACTJS");
  const contextValue = {};
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
export default ContextProvider;
