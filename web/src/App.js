import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import { CloudinaryContext } from "cloudinary-react";
import Credits from "./components/Credits";
import Nav from "./components/Nav/Nav";
import Home from "./components/HomePage";
import LivestockPage from "./components/LivestockPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    const that = this;
    axios
      .get(`${process.env.REACT_APP_API}/data.json`)
      .then(response => response.data)
      .then(json => {
        that.setState({ data: json });
      });
  }

  render() {
    return (
      <div className="App">
        <CloudinaryContext cloudName="bmey">
          <Router>
            <div>
              <Nav />

              <Route path="/" exact render={() => <Home data={this.state.data} />} />
              <Route path="/livestock/" render={() => <LivestockPage data={this.state.data} />} />
              <Route path="/about/" render={() => <AboutPage data={this.state.data} />} />
              <Route path="/contact/" render={() => <ContactPage data={this.state.data} />} />
            </div>
          </Router>
          <Credits />
        </CloudinaryContext>
      </div>
    );
  }
}

export default App;
