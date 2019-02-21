import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "./HomePage.css";

const Home = () => (
  <div data-cy="homepage">
    <header className="homepage-header">
      <div>
        <h1 className="App-title">Welcome to Mey's Aquatics!</h1>
        <div className="d-flex flex-column align-items-center">
          <em>Caring for fish since 1970</em>
          <Link to="/livestock" style={{ marginTop: "40px" }}>
            <Button color="primary">Browse</Button>
          </Link>
        </div>
      </div>
    </header>
    <div className="App-content">
      <h2>Home</h2>
    </div>
  </div>
);

export default Home;
