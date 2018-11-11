import React from "react";
import { connect } from "react-redux";
import FishList from "../FishList";

const ProductListContainer = ({ appliedFilters, fish }) => {
  return <FishList appliedFilters={appliedFilters} fish={fish} />;
};

const mapStateToProps = state => ({
  appliedFilters: state.appliedFilters,
});

export default connect(mapStateToProps)(ProductListContainer);
