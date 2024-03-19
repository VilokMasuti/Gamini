import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Components/Main/Main";
import SideBar from "./Components/Sidebar/SideBar";
// Import your Home component

function App() {
  return (
    <Router>
      <div className="flex">
        <SideBar />
        <Switch>
          <Route path="/" exact component={Home} /> {/* Define your routes */}
          <Route path="/main" component={Main} /> {/* Example route */}
          {/* Add more routes here as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
