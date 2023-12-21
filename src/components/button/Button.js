import React from "react";
import "./Button.css"

const Button = ({ text }) => {
  return (
    <div className="button__style">
      <button>{text}</button>
    </div>
  );
};
export default Button;
