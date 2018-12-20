import React from "react";
import { withRouter } from "react-router";
import { Button } from "reactstrap";
import FishCard from "./FishCard";

const LivestockDetailsPage = ({ data, match, history }) => {
  const { itemId } = match.params;
  let model = data.fish.find(item => item.id === itemId);

  return (
    <div data-cy="livestockpage">
      <header className="App-header">
        <h1 className="App-title">Livestock</h1>
      </header>
      <div className="App-content">
        <div>
          <Button onClick={history.goBack} size="sm" outline color="secondary">
            &lt; Go Back
          </Button>
        </div>
        <div style={{ marginTop: "20px" }}>{model ? <FishCard {...model} /> : "Item not found"}</div>
      </div>
    </div>
  );
};

export default withRouter(LivestockDetailsPage);
