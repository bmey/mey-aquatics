import React from 'react';
import { FILTER } from '../../utility/constants';
import Checkbox from './Checkbox';

const OriginCheckbox = ({
  id,
  checked,
  name,
  hasSubOrigins,
  applyFilter,
  removeFilter,
  ...restProps
}) => {
  const payload = { type: FILTER.ORIGIN, id, hasSubOrigins };

  return (
    <Checkbox
      {...restProps}
      id={id}
      data-test={`filter-origin-${id}`}
      checked={checked}
      onClick={() => (checked ? removeFilter(payload) : applyFilter(payload))}
    >
      <span data-test='origin-name'>{name}</span>
    </Checkbox>
  );
};

export default OriginCheckbox;
