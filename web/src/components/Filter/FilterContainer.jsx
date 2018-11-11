import React from "react";
import { connect } from "react-redux";
import { applyFilter } from "../../redux/filterActions";
import Filter from "./Filter";

const FilterContainer = ({ appliedFilters, applyFilter }) => (
  <Filter appliedFilters={appliedFilters} applyFilter={applyFilter} />
);

const mapStateToProps = state => ({
  appliedFilters: state.appliedFilters,
});

export default connect(
  mapStateToProps,
  { applyFilter }
)(FilterContainer);
