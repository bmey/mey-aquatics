import React from "react";
import FishList from "./Livestock/ProductListContainer";
import Filter from "./Filter/FilterContainer";

const LivestockPage = props => (
  <div data-cy="livestockpage">
    <header className="App-header">
      <h1 className="App-title">Livestock</h1>
    </header>
    <div className="App-content">
      <Filter />
      <div>{props.data && <FishList {...props.data} />}</div>
    </div>
  </div>
);

export default LivestockPage;
