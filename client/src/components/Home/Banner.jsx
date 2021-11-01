import React from "react";
import "../../assets/css/font.css";

const Banner = (props) => {
  return (
    <div class=" rounded-lg shadow-md  w-2/4 h-40 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-200 m-auto">
      <div class="text-white font-medium text-2xl p-8 m-16">
        {props.children}
      </div>
    </div>
  );
};
export default Banner;
