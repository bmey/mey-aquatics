import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import Media from "react-media";
import { applyFilter, removeFilter, changeSort } from "../../redux/filterActions";
import sortOptions from "./sortOptions";
import { FILTER } from "../../utility/constants";
import mapStateToOrigins from "../../service/origin";
import Filter from "./Filter";
import MobileFilter from "./MobileFilter";

//(xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px)
const FilterContainer = props => (
  <Media query="(max-width: 767.98px)">
    {matches =>
      matches ? <MobileFilter {...props} sortOptions={sortOptions} /> : <Filter {...props} sortOptions={sortOptions} />
    }
  </Media>
);

const mapStateToProps = state => {
  const originFilter = state.filters.filter(f => f.type === FILTER.ORIGIN)[0];
  const originFilterValues = _.get(originFilter, "values", []);
  const originOptions = mapStateToOrigins(originFilterValues);

  return {
    appliedFilters: state.filters,
    appliedSortId: state.appliedSort.id,
    originOptions,
  };
};

export default connect(
  mapStateToProps,
  { applyFilter, removeFilter, changeSort }
)(FilterContainer);
