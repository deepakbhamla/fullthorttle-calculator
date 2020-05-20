import React from "react";
import PropTypes from "prop-types";
import './result.style.css'

const Result = ({ func, text }) => {
  return (
    <span className='result'>
      {func} 
      <small className='sm'>{text}</small>
    </span>
    
  );
};

Result.defaultProps = {
  func: () => <p>Missing numeric value</p>,
  text: "No value provided"
};

Result.propTypes = {
  func: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired
};

export default Result;
