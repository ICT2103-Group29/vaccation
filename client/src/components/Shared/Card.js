import React from "react";
import "../../assets/css/font.css";

const Card = (props) => {
  return (
    <div class="rounded-lg shadow-md h-72 text-center p-20 m-12 bg-white">
      {props.children}
    </div>
  );
};
export default Card;
