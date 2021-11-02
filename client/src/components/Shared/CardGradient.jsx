import React from "react";
import "../../assets/css/font.css";

const GradientCard = (props) => {
  return (
    <div class=" rounded-lg shadow-md  w-1/5 h-72 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-200 m-auto relative">
      <span class="text-white font-bold text-2xl absolute bottom-0 left-0 pl-12">
        {props.children}
      </span>
    </div>
  );
};
export default GradientCard;
