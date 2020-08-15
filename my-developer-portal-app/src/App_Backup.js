import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";
import AddADR from "./components/AddADR";
import EditADR from "./components/EditADR";
import ADRHome from "./components/ADRHome";
function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Switch>
          <Route path="/add">
            <AddADR />
          </Route>
          <Route path="/edit/:id">
            <EditADR />
          </Route>
          <Route path="/">
            <ADRHome />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
