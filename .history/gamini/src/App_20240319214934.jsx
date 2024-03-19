import { Route, Routes } from "react-router-dom";
import Main from "./Components/Main/Main";
import SideBar from "./Components/Sidebar/SideBar";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <Main />
    </div>
  );
}

export default App;
