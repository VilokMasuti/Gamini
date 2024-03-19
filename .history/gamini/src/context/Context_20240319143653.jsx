/* eslint-disable react/prop-types */
import { createContext } from "react";
import runChat from "../Config/gemini.js";
export const Context = createContext();

const ContextProvider = props => {
  const [input, setInput] = useState(second);
  const response = async Prompt => {
    await runChat(Prompt);
  };

  const contextValue = {};
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
export default ContextProvider;
