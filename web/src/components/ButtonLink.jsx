import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

const ButtonLink = props => {
  const { history, location, match, staticContext, to, onClick, ...rest } = props;
  return (
    <button
      {...rest}
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
