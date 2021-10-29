import React from "react";
import "../assets/font.css";

const Card = (props) => {
  return (
    <div class=" rounded-lg shadow-md p-32  bg-gradient-to-r from-blue-800 to-blue-400 m-auto">
      <p class="text-white text-center font-bold text-2xl mb-2 ">
        {props.children}
      </p>
    </div>
  );
};
export default Card;
