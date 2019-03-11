import React from 'react';
import { Button } from 'reactstrap';
import MailIcon from '@material-ui/icons/Mail';
import { email, emailHref } from '../../service/contact';
import './ContactButton.css';

const ContactButton = ({ isPrimary }) => (
  <a className='button-link' href={emailHref} target='_top'>
    <Button color={isPrimary ? 'primary' : undefined}>
      <MailIcon />
      &nbsp; {email}
    </Button>
  </a>
);

export default ContactButton;
