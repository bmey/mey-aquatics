import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import { CloudinaryContext } from "cloudinary-react";
import FishList from "./components/FishList";
import Credits from "./components/Credits";
import Nav from "./components/Nav/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const Home = () => (
  <div data-cy="homepage">
    <header className="App-header">
      <div>
        <h1 className="App-title">Welcome to Mey's Aquatics!</h1>
        <div className="text-center">
          <em>Caring for fish since 1970</em>
        </div>
      </div>
    </header>
    <div className="App-content">
      <h2>Home</h2>
    </div>
  </div>
);

const LivestockPage = props => (
  <div data-cy="livestockpage">
    <header className="App-header">
      <h1 className="App-title">Livestock</h1>
    </header>
    <div className="App-content">
      <div>{props.data && <FishList {...props.data} />}</div>
    </div>
  </div>
);

const AboutPage = () => (
  <div data-cy="aboutpage">
    <header className="App-header">
      <h1 className="App-title">About Us</h1>
    </header>
    <div className="App-content">
      <h2>About Us</h2>
    </div>
  </div>
);

const ContactPage = () => (
  <div data-cy="contactpage">
    <header className="App-header">
      <h1 className="App-title">Contact</h1>
    </header>
    <div className="App-content">
      <h2>Contact</h2>
    </div>
  </div>
);

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
