import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    data: {},
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
        <p>
          Data:
          {this.state.data && JSON.stringify(this.state.data)}
        </p>
      </div>
    );
  }
}

export default App;
