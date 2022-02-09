import PropTypes from "prop-types";
import React from "react";
import { Card } from "@mui/material";

const CardStyle = ({ children, width, styleProps, ...otherProps }) => {
  const cardStyles = {
    width: width,
    ...styleProps,
  };
  return (
    <Card sx={cardStyles} {...otherProps}>
      {children}
    </Card>
  );
};

CardStyle.propTypes = {
  children: PropTypes.any.isRequired,
  width: PropTypes.string,
};

export default CardStyle;

CardStyle.defaultProps = {
  width: "100%",
};
