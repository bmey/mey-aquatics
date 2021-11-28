import React from 'react'
import styles from './Checkbox.module.scss'

const Checkbox = ({
  id,
  children,
  checked,
  onClick,
  style,
  ...restProps
}: React.InputHTMLAttributes<HTMLInputElement>): JSX.Element => {
  const handleClick = (e) => {
    e.preventDefault()
    onClick(e)
  }

  return (
    <label
      htmlFor={id}
      className={styles['checkbox-wrapper']}
      onClick={handleClick}
      style={style}
    >
      <input
        name={id}
        id={id}
        type="checkbox"
        checked={checked}
        readOnly
        className="h-4 w-4 text-primary-600 focus:ring-sky-500 border-gray-300 rounded"
        {...restProps}
      />
      {children}
    </label>
  )
}

export default Checkbox
