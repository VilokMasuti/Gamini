/* eslint-disable react/prop-types */
import { createContext } from "react";
import runChat from "../Config/gemini.js";
export const Context = createContext();

const ContextProvider = props => {
  const Seton = async Prompt => {
    await runChat(Prompt);
  };
  Seton(" WHAT IS REACTJS");
  const contextValue = {};
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
export default ContextProvider;
