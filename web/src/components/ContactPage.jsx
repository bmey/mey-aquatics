import React from "react";
import { Button } from "reactstrap";
import { IoLogoInstagram } from "react-icons/io";
import MailIcon from "@material-ui/icons/Mail";
import queryString from "query-string";
import "./ContactPage.css";

const email = "meysaquatics@gmail.com";
const emailQuery = queryString.stringify({
  subject: "Mey's Aquatics Inquiry",
  body:
    "(Please fill out the questions below)\n\n\
My name is: \n\n\
The best way to contact me is: \n\n\
I am looking to: \n\
- Buy\n\
- Trade\n\
- Question about an item\n\
- Something\n\
  ",
});

const ContactPage = () => (
  <div data-cy="contactpage">
    <header className="App-header">
      <h1 className="App-title">Contact</h1>
    </header>
    <div className="App-content">
      <p>
        <strong>We would love to hear from you!</strong>
      </p>
      <p>Feel free to reach out for any reason at all. Some common things others contact us for:</p>
      <ul>
        <li>Buy</li>
        <li>Trade</li>
        <li>Question about an item</li>
      </ul>
      <hr />
      <div className="d-flex justify-content-around contact-content">
        <div className="d-flex flex-column align-items-center">
          <h3 className="text-center">Email</h3>
          <a className="button-link" href={`mailto:${email}?${emailQuery}`} target="_top">
            <Button color="primary">
              <MailIcon />
              &nbsp; {email}
            </Button>
          </a>
        </div>
        <div>
          <h3 className="text-center">Social Media</h3>
          <a href="https://www.instagram.com/mey_aquatics/" className="d-flex flex-column align-items-center">
            <IoLogoInstagram style={{ fontSize: "2rem" }} />
            &nbsp;Instagram
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default ContactPage;
