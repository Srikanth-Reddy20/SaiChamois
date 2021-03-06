import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Natural from "./Components/Natural/Natural";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Slider from "./Components/Slider/Slider";
import LandingPage from "./Pages/LandingPage/LandingPage";
import { HashRouter, Route, Switch } from "react-router-dom";
import Slider2 from "./Components/Slider2/Slider2";
import Products from "./Components/Products/Products";
import Leathertypes from "./Components/Leathertypes/Leathertypes";
import ChamoisPage from "./Pages/ChamoisPage/ChamoisPage";
import Landingsection1 from "./Components/Landing/Landingsection1";
import LeatherPage from "./Pages/LeatherPage/LeatherPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import Timeline from "./Components/Timeline/Timeline";

function App() {
  return (
    <>
      <HashRouter hashType="noslash">
          <Switch>
            <Route path="/" component={LandingPage} exact />
            <Route path="/Chamois" component={ChamoisPage} />
            <Route path="/Leather" component={LeatherPage} />
            <Route path="/About" component={AboutPage} />
          </Switch>
        </HashRouter>
      
    </>
  );
}

export default App;
