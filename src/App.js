// Third party
import React                                      from "react"
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom"
// Local
import Navbar           from "./components/Navbar/Navbar"
import Footer           from "./components/Footer/Footer"
import Home             from "./pages/Home/Home"
// Data
import data             from "./data/components.json"
// Styles
import "./App.css"

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar data={data.Navbar} />
        <Switch>
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
