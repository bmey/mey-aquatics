import React from 'react'
import { Button } from 'reactstrap'
import { IoMdMail } from 'react-icons/io'
import { email, emailHref } from '../../service/contact'

interface IProps {
  isPrimary?: boolean
}

const ContactButton = ({ isPrimary }: IProps): JSX.Element => (
  <a className="hover:no-underline" href={emailHref} target="_top">
    <Button
      className="flex items-center flex-nowrap"
      color={isPrimary ? 'primary' : undefined}
    >
      <IoMdMail />
      &nbsp;{email}
    </Button>
  </a>
)

export default ContactButton
