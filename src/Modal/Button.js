import React from "react";

const Button = Consumer => ({ children }) => (
  <Consumer>
    {({ onClick }) => (
      <button type="button" onClick={onClick}>
        {children}
      </button>
    )}
  </Consumer>
);

export default Button;
