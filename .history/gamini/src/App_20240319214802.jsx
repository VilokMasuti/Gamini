import { Route, Routes } from "react-router-dom";
import Main from "./Components/Main/Main";
import SideBar from "./Components/Sidebar/SideBar";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <Routes>
        <Route path="/home" component={Home} /> {/* Example route */}
      </Routes>

      {/* Add more routes here as needed */}
    </div>
  );
}

export default App;
