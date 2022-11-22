// Third party
import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// Local
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import Events from "./pages/Events/Events"
import Tournament from "./pages/Tournament/Tournament"
// Data
import data from "./data/components.json"
// Styles
import "./App.css"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar data={data.Navbar} />
        <Switch>
          <Route path="/Eventos">
            <Events />
          </Route>
          <Route path="/Torneos">
            <Tournament />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer data={data.Footer} />
      </Router>
    </div>
  );
}

export default App;
