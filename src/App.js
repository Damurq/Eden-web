// Third party
import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// Local
import AboutUs from "./pages/AboutUs/AboutUs"
import Activities from "./pages/Activities/Activities"
import ActivityDetail from "./pages/ActivityDetail/ActivityDetail"
import Areas from "./pages/Areas/Areas"
import Events from "./pages/Events/Events"
import FinishedEvents from "./pages/FinishedEvents/FinishedEvents"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import MatchsNews from "./pages/MatchsNews/MatchsNews"
import Navbar from "./components/common/menus/Navbar/Navbar"
import Results from "./pages/Results/Results"
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
          <Route path="/Torneos-resultados">
            <Results />
          </Route>
          <Route path="/Torneos-noticias">
            <MatchsNews />
          </Route>
          <Route path="/Torneos">
            <Tournament />
          </Route>
          <Route path="/Quienes-somos">
            <AboutUs />
          </Route>
          <Route path="/Noti-eventos">
            <FinishedEvents />
          </Route>
          <Route path="/Eventos">
            <Events />
          </Route>
          <Route path="/Detalle-actividad">
            <ActivityDetail />
          </Route>
          <Route path="/Areas">
            <Areas />
          </Route>
          <Route path="/Actividades">
            <Activities />
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
