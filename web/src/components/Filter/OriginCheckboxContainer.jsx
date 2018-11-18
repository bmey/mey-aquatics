import { connect } from "react-redux";
import { applyFilter, removeFilter } from "../../redux/filterActions";
import OriginCheckbox from "./OriginCheckbox";

export default connect(
  null,
  { applyFilter, removeFilter }
)(OriginCheckbox);
