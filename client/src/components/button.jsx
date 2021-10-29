import React from "react";

const Button = (props) => {
  return (
    <button
      class="bg-blue-800 text-white rounded-md w-40 h-12"
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
