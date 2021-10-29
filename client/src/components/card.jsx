import React from "react";
import "../assets/font.css";

const Card = (props) => {
  return (
    <div class=" rounded shadow-md h-1/5 text-center p-32 m-12 bg-white">
      {props.children}
    </div>
  );
};
export default Card;
