import React from 'react';
import MaterialCheckbox from '@material-ui/core/Checkbox';
import './Checkbox.css';

class Checkbox extends React.Component {
  handleClick = e => {
    e.preventDefault();
    this.props.onClick();
  };

  render() {
    const { id, children, checked, onClick, style, ...restProps } = this.props;
    return (
      <label htmlFor={id} className='checkbox-wrapper' onClick={this.handleClick} style={style}>
        <MaterialCheckbox
          name={id}
          id={id}
          type='checkbox'
          checked={checked}
          color='primary'
          className='checkbox'
          readOnly
          {...restProps}
        />
        {children}
      </label>
    );
  }
}

export default Checkbox;
