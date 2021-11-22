import React from "react";
import "../../assets/css/font.css";

const Card = (props) => {
  return (
    <div class="rounded shadow-md h-64 text-center p-20 m-12 bg-gray-50">
      {props.children}
    </div>
  );
};
export default Card;
