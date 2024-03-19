import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextProvider from "./context/Context.jsx";
import { RouterProvider } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider>
    <ContextProvider>
      <App />
    </ContextProvider>
  </RouterProvider>
);
