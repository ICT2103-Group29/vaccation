import React from "react";
import "../assets/font.css";

const LargeCard = (props) => {
  return (
    <div class=" rounded shadow-md w-4/5 p-14 mt-14 bg-white m-auto">
      {props.children}
    </div>
  );
};
export default LargeCard;
