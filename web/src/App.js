import React, { Component } from "react";
import FishList from "./components/FishList";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    const that = this;
    fetch(`${process.env.REACT_APP_API}/data.json`)
      .then(response => response.json())
      .then(json => {
        that.setState({ data: json });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.state.data && <FishList {...this.state.data} />}
      </div>
    );
  }
}

export default App;
