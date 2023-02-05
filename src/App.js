// Third party
import React from "react"
import { SkeletonTheme } from 'react-loading-skeleton'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// Local
// Pages
import AboutUs from "./pages/AboutUs/AboutUs"
import Activities from "./pages/Activities/Activities"
import ActivityDetail from "./pages/ActivityDetail/ActivityDetail"
import Areas from "./pages/Areas/Areas"
import AreaDetails from "./pages/Areas/AreaDetails"
import InstallationDetails from "./pages/Areas/InstallationDetails"
import Events from "./pages/Events/Events"
import FinishedEvents from "./pages/FinishedEvents/FinishedEvents"
import Home from "./pages/Home/Home"
import MatchsNews from "./pages/MatchsNews/MatchsNews"
import Results from "./pages/Results/Results"
import Tournament from "./pages/Tournament/Tournament"
import WhatWeOffer from "./pages/WhatWeOffer/WhatWeOffer"
// Components
import Footer from "./components/common/menus/Footer/Footer"
import Navbar from "./components/common/menus/Navbar/Navbar"
// Data
import data from "./data/components.json"
// Styles
import "./App.css"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar data={data.Navbar} />
        <SkeletonTheme baseColor="#1B1D29" highlightColor="#525252">
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
            <Route path="/Que-ofrecemos">
              <WhatWeOffer />
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
            <Route path="/AreaDetails/:area">
              <AreaDetails />
            </Route>
            <Route path="/InstallationDetails/:instalacion">
              <InstallationDetails />
            </Route>
            <Route path="/Actividades">
              <Activities />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </SkeletonTheme>
        <Footer data={data.Footer} />
      </Router>
    </div>
  );
}

export default App;
