import React from "react";

const RestrictionsCard = ({ data }) => {
  return (
    <div class="bg-white m-10 p-5 rounded-2xl">
      <p class="text-left ...">
        {/* <h1 class="text-2xl"> */}
        <h1 class="text-3xl">
          <b>{data.country_name}</b>
        </h1>
      </p>
      <p class="text-left ...">
        {/* <h1 class="text-2xl"> */}
        <h1 class="text-2xl text-blue-500">
          {/* <b>Restrictions: {data.restrictions}</b> */}
          <b>Restrictions: </b>
          </h1>
          <p class="text-xl text-black-500">
          {data.restrictions}
          </p>
        {/* </h1> */}
      </p>
      <p class="text-left ...">
        {/* <h1 class="text-2xl"> */}
        <h1 class="text-2xl text-blue-500">
          {/* <b>Procedures: {data.procedures}</b> */}
          <b>Procedures: </b>
          </h1>
          <p class="text-xl text-black-500">
          {data.procedures}
          </p>
        {/* </h1> */}
      </p>
      {/* <div class="bg-purple-200 m-10 p-5 rounded-2xl"> */}
        <h1 class="text-xl text-left">
          {/* <b
            dangerouslySetInnerHTML={{
              __html: data.opening_hours
                .replace(/\\n/g, "<br/>")
                .replace(/(\w)(\w*)/g, function (g0, g1, g2) {
                  return g1.toUpperCase() + g2.toLowerCase();
                }),
            }} */}
          {/* /> */}
        </h1>
      {/* </div> */}
    </div>
  );
};

export default RestrictionsCard;