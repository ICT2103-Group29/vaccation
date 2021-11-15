import React from "react";

const PCRCard = ({ data }) => {
  return (
    <div class="bg-white m-10 p-5 rounded-2xl">
      <p class="text-left ...">
        <h1 class="text-2xl">
          <b>{data.clinic_name}</b>
        </h1>
      </p>
      <p class="text-left ...">
        <h1 class="text-2xl">
          <b>Location: {data.location}</b>
        </h1>
      </p>
      <p class="text-left ...">
        <h1 class="text-2xl">
          <b>Contact: {data.contact_number}</b>
        </h1>
      </p>
      <div class="bg-purple-200 m-10 p-5 h-72 rounded-2xl">
        <p class="text-left ...">
          <h1 class="text-2xl">
            <b
              dangerouslySetInnerHTML={{
                __html: data.opening_hours.replace(/\\n/g, "<br/>"),
              }}
            />
          </h1>
        </p>
      </div>
    </div>
  );
};

export default PCRCard;
