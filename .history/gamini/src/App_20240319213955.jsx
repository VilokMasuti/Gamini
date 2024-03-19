import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Components/Main/Main";
import SideBar from "./Components/Sidebar/SideBar";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <Routes>
        <Route path="/" component={Main} /> {/* Example route */}
      </Routes>

      {/* Add more routes here as needed */}
    </div>
  );
}

export default App;
