import React from "react";
import { FILTER } from "../../utility/constants";

const OriginCheckbox = ({ id, checked, name, applyFilter, removeFilter }) => {
  const payload = { type: FILTER.ORIGIN, id };

  return (
    <label
      htmlFor={id}
      data-test="origin-label"
      onClick={() => (checked ? removeFilter(payload) : applyFilter(payload))}
    >
      <input name={id} id={id} type="checkbox" checked={checked} data-test={`filter-origin-${id}`} readOnly />
      <span data-test="origin-name">&nbsp; {name}</span>
    </label>
  );
};

export default OriginCheckbox;
