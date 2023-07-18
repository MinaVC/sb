import React from "react";
import PropTypes from "prop-types";
import "./card.css";

/**
 * Primary UI component for user interaction
 */
export const Card = ({
  primary,
  backgroundColor,
  size,
  label,
  color,
  ...props
}) => {
  return (
    <div
      className={[`storybook-button--${size}`, "card"].join(" ")}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      <p style={color && { color }}>{label}</p>
    </div>
  );
};

Card.propTypes = {
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,

  color: PropTypes.string,

  /**
   * Optional click handler
   */
  //   onClick: PropTypes.func,
};

Card.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  //   onClick: undefined,
};
