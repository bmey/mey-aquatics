import React from 'react';
import { Button } from 'reactstrap';
import MailIcon from '@material-ui/icons/Mail';
import queryString from 'query-string';
import './ContactButton.css';

const email = 'meysaquatics@gmail.com';
const emailQuery = queryString.stringify({
  subject: "Mey's Aquatics Inquiry",
  body:
    '(Please fill out the questions below)\n\n' +
    'My name is: \n\n' +
    'The best way to contact me is: \n\n' +
    'I am looking to: \n' +
    '- Buy\n' +
    '- Trade\n' +
    '- Question about an item\n' +
    '- Something else\n',
});

const ContactButton = ({ isPrimary }) => (
  <a className='button-link' href={`mailto:${email}?${emailQuery}`} target='_top'>
    <Button color={isPrimary ? 'primary' : undefined}>
      <MailIcon />
      &nbsp; {email}
    </Button>
  </a>
);

export default ContactButton;
