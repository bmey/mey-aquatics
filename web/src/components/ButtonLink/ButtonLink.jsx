import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import "./ButtonLink.css";

const ButtonLink = props => {
  const { history, location, className, match, staticContext, to, onClick, ...rest } = props;
  return (
    <button
      {...rest}
      className={`${className || ""} button-link`}
      onClick={event => {
        onClick && onClick(event);
        history.push(to);
      }}
    />
  );
};

ButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default withRouter(ButtonLink);
