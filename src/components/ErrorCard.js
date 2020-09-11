import React from "react";
import PropTypes from "prop-types";

const ErrorCard = ({ error }) => {
  if (!error) return null;
  return (
    <div className="error-box">
      <p>{error}</p>
    </div>
  );
};

ErrorCard.propTypes = {
  error: PropTypes.string,
};

export default ErrorCard;
