import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CloudinaryContext } from "cloudinary-react";
import Credits from "./Credits";
import Nav from "./Nav/Nav";
import Home from "./HomePage";
import LivestockPage from "./LivestockPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";

const LoadedApp = ({ data }) => (
  <CloudinaryContext cloudName="bmey">
    <Router>
      <div data-test="loaded">
        <Nav />

        <Route path="/" exact render={() => <Home data={data} />} />
        <Route path="/livestock/" render={() => <LivestockPage data={data} />} />
        <Route path="/about/" render={() => <AboutPage data={data} />} />
        <Route path="/contact/" render={() => <ContactPage data={data} />} />
      </div>
    </Router>
    <Credits />
  </CloudinaryContext>
);

export default LoadedApp;
