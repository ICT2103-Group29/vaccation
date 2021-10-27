import React from "react";

const title = [
  { id: 1, name: "Open with Restrictions", data: "200" },
  { id: 2, name: "Worldwide Vaccination", data: "60%" },
];

const Card = (props) => {
  return (
    <div class="">
      <div class=" rounded  shadow-lg w-96 h-96 text-center ">
        <div class="font-bold text-2xl mb-2">
          {title.map((item) => (
            <p>{item.name}</p>
          ))}
        </div>
        <p class="text-gray-700 text-6xl font-black text-blue-800">
          {title.map((item) => (
            <p>{item.data}</p>
          ))}
        </p>
      </div>
    </div>
  );
};
export default Card;
