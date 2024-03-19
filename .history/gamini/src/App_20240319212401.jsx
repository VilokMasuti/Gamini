import Main from "./Components/Main/Main";
import SideBar from "./Components/Sidebar/SideBar";
import { Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className=" flex">
        <SideBar />
        <Main />
      </div>
    </Router>
  );
}

export default App;
