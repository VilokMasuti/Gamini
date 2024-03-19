/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import runChat from "../Config/gemini.js";
export const Context = createContext();

const ContextProvider = props => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prePrompts, setPrePrompts] = useState([]);
  const [showresult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultdate, setResultDate] = useState("");
  const responses = async Prompt => {
    setResultDate("");
    setLoading(true);
    setShowResult(true);
    recentPrompt(input);
    const response = await runChat(input);
    setShowResult(response);
    setLoading(false);
    setInput("");
  };

  const contextValue = {
    input,
    setInput,
    loading,
    responses,
    setRecentPrompt,
    showresult,
    setPrePrompts,
    prePrompts,
    recentPrompt,
    setShowResult,
    resultdate,
    setResultDate,
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
export default ContextProvider;
