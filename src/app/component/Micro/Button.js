import React from "react";

const Button = ({ children }) => {
  return <button className={`bg-primary text-white h-11 rounded-md w-32 font-medium`}>{children}</button>;
};

export default Button;
