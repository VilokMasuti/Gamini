import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Components/Main/Main";
import SideBar from "./Components/Sidebar/SideBar";

function App() {
  return (
    <><Routes>
      <div className="flex">
        <SideBar />
        <Route path="/main" component={Main} /> {/* Example route */}
        {/* Add more routes here as needed */}
      </div>

    </Routes>< /></>
}

export default App;
