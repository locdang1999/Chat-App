import React from "react";
import PropTypes from "prop-types";

const ThemeSettings = ({ children }) => {
    console.log(children)
  return <div>{children}</div>;
};

export default ThemeSettings;

ThemeSettings.propTypes = {
  children: PropTypes.node.isRequired,
};
