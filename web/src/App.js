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
import ErrorPage from "./components/ErrorPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const LoadedApp = ({ data }) => (
  <CloudinaryContext cloudName="bmey">
    <Router>
      <div>
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

class App extends Component {
  state = {
    data: null,
    showError: false,
  };

  componentDidMount() {
    const that = this;
    axios
      .get(`${process.env.REACT_APP_API}/data.json`)
      .then(response => response.data)
      .then(json => {
        that.setState({ data: json });
      })
      .catch(response => that.setState({ showError: true }));
  }

  render() {
    const { data, showError } = this.state;
    const isLoading = data === null;
    let PageComponent = null;

    if (showError) {
      PageComponent = <ErrorPage data-test="error" data-cy="error" />;
    } else if (isLoading) {
      PageComponent = <div data-test="loading">Loading...</div>;
    } else {
      PageComponent = <LoadedApp data={data} data-test="loaded" />;
    }

    return <div className="App">{PageComponent}</div>;
  }
}

export default App;
