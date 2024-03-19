/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import runChat from "../Config/gemini.js";
export const Context = createContext();

const ContextProvider = props => {
  const [input, setInput] = useState("");
  const [resnet, setResent] = useState("");
  const [prePrompt, setPrePrompt] = useState([]);
  const [preresult, setResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const response = async Prompt => {
    await runChat(Prompt);
  };

  const contextValue = {};
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
export default ContextProvider;
