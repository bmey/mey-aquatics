import React from "react";
import { FILTER } from "../../utility/constants";

const OriginCheckbox = ({ id, checked, name, applyFilter, removeFilter }) => {
  const payload = { type: FILTER.ORIGIN, id };

  return (
    <label htmlFor={id}>
      <input
        name={id}
        id={id}
        type="checkbox"
        checked={checked}
        data-test={`filter-origin-${id}`}
        readOnly
        onClick={() => (checked ? removeFilter(payload) : applyFilter(payload))}
      />
      <span data-test="origin-name">&nbsp; {name}</span>
    </label>
  );
};

export default OriginCheckbox;
