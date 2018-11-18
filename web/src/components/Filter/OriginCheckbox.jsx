import React from "react";

const OriginCheckbox = ({ id, checked, name }) => (
  <label htmlFor={id}>
    <input name={id} id={id} type="checkbox" checked={checked} data-test={id} readOnly />
    &nbsp; {name}
  </label>
);

export default OriginCheckbox;
