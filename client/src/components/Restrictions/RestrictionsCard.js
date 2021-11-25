import React from "react";

const RestrictionsCard = ({ data }) => {
  return (
    <div class="bg-white m-10 p-5 rounded-2xl">
      <p class="text-left ">
        <h1 class="text-3xl font-bold">{data.country_name}</h1>
      </p>
      <p class="text-left ">
        <h1 class="text-xl text-blue-800 font-bold">Restrictions</h1>
        <p class="text-xl text-black-500">{data.restrictions}</p>
      </p>
      <p class="text-left ...">
        <h1 class="text-xl text-blue-800 font-bold">Procedures</h1>
        <p class="text-xl text-black-500">{data.procedures}</p>
      </p>
      <h1 class="text-xl text-left"></h1>
    </div>
  );
};

export default RestrictionsCard;