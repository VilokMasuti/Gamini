import { Router, Route } from "react-router-dom";
import Main from "./Components/Main/Main";
import SideBar from "./Components/Sidebar/SideBar";
// Import your Home component

function App() {
  return (
    <Router>
      <div className="flex">
        <SideBar />
        <Route path="/" component={Main} /> {/* Example route */}
        {/* Add more routes here as needed */}
      </div>
    </Router>
  );
}

export default App;
