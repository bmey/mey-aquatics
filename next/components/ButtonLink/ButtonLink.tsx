import React, { HTMLAttributes } from 'react'
import styles from './ButtonLink.module.scss'
import { useRouter } from 'next/router'

interface IProps extends HTMLAttributes<HTMLButtonElement> {
  to: string
}

const ButtonLink = (props: React.PropsWithChildren<IProps>): JSX.Element => {
  const router = useRouter()
  const { className, to, onClick, ...rest } = props
  return (
    <button
      {...rest}
      className={`${className || ''} ${styles['button-link']}`}
      onClick={(event) => {
        onClick && onClick(event)
        router.push(to)
      }}
    />
  )
}

export default ButtonLink
