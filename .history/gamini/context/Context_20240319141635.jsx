import { createContext } from "react";
export const Context = createContext();

const ContextProvider = props => {
  const contextVlaue = {};
  return;
  <Context.Provider value={contextVlaue}>{props.children}</Context.Provider>;
};
export default ContextProvider;
