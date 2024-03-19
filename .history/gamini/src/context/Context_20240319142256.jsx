import { createContext } from "react";
import runChat from "./../../../.history/gamini/src/Config/Api_20240319131400";
export const Context = createContext();

const ContextProvider = props => {
  const Seton = async Propmt => {
    runChat();
  };
  const contextVlaue = {};
  return (
    <Context.Provider value={contextVlaue}>{props.children}</Context.Provider>
  );
};
export default ContextProvider;
