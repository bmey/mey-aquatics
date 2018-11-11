import React from "react";
import { connect } from "react-redux";
import { applyFilter, removeFilter } from "../../redux/filterActions";
import Filter from "./Filter";

const FilterContainer = ({ appliedFilters, applyFilter, removeFilter }) => (
  <Filter appliedFilters={appliedFilters} applyFilter={applyFilter} removeFilter={removeFilter} />
);

const mapStateToProps = state => ({
  appliedFilters: state.appliedFilters,
});

export default connect(
  mapStateToProps,
  { applyFilter, removeFilter }
)(FilterContainer);
