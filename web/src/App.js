import React, { Component } from "react";
import { CloudinaryContext } from "cloudinary-react";
import FishList from "./components/FishList";
import Credits from "./components/Credits";
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
        <CloudinaryContext cloudName="bmey">
          <header className="App-header">
            <h1 className="App-title">Welcome to Mey Aquatics!</h1>
          </header>
          <div className="App-content">{this.state.data && <FishList {...this.state.data} />}</div>
          <Credits />
        </CloudinaryContext>
      </div>
    );
  }
}

export default App;
