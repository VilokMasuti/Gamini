import { Route, Routes } from "react-router-dom";
import Main from "./Components/Main/Main";
import SideBar from "./Components/Sidebar/SideBar";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <Routes>
        <Route path="/" component= /> {/* Example route */}
      </Routes>

      {/* Add more routes here as needed */}
    </div>
  );
}

export default App;
