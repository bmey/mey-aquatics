import { combineReducers } from "redux";
import filters from "./filters";
import appliedSort from "./appliedSort";

export default combineReducers({ filters, appliedSort });
