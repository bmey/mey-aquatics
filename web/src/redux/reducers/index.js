import { combineReducers } from "redux";
import appliedFilters from "./appliedFilters";
import appliedSort from "./appliedSort";

export default combineReducers({ appliedFilters, appliedSort });
