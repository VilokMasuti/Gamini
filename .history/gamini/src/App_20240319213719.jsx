import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Components/Main/Main";
import SideBar from "./Components/Sidebar/SideBar";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <Route path="/main" component={Main} /> {/* Example route */}
      {/* Add more routes here as needed */}
    </div>
  );
}

export default App;
