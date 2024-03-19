import { Route, Routes } from "react-router-dom";
import Main from "./Components/Main/Main";
import SideBar from "./Components/Sidebar/SideBar";

function App() {
  return (
    <div className="flex">
      <Routes></Routes>
      <SideBar />
      <Main />
    </div>
  );
}

export default App;
