import Main from "./Components/Main/Main";
import SideBar from "./Components/Sidebar/SideBar";
import { Router } from "react-router-dom";

function App() {
  return (
    <div className=" flex">
      <SideBar />
      <Main />
    </div>
  );
}

export default App;
