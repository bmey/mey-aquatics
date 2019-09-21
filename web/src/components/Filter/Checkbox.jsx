import React from 'react';
//import CheckedIcon from '@material-ui/icons/CheckBox';
//import UncheckedIcon from '@material-ui/icons/CheckBoxOutlineBlank';
//import IndeterminateIcon from '@material-ui/icons/IndeterminateCheckBox';
//import Icon from '@material-ui/core/Icon';
import Checkbox from '@material-ui/core/Checkbox';
import "./Checkbox.css";

const Checkbox2 = ({ id, children, className, checked, indeterminate, ...restProps }) => {
  let icon = 'check_box_outline_blank';//UncheckedIcon;
  if (checked && indeterminate) {
    icon = 'indeterminate_check_box';//IndeterminateIcon;
  } else if (checked) {
    icon = 'check_box';//CheckedIcon;
  }

  return (
    <label htmlFor={id} class="checkbox">
      <Checkbox
        name={id}
        id={id}
        type='checkbox'
        checked={checked}
        className={className}
        {...restProps}
      />
      {/* <Icon>{icon}</Icon> */}
      {children}
    </label>
  );
};

export default Checkbox2;
