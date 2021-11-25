import React from "react";

const PCRCard = ({ data }) => {
  return (
    <div class="bg-white m-10 p-5 rounded-2xl">
      <h1 class="text-2xl font-bold  mt-8"> {data.clinic_name}</h1>

      <p class="text-left align-middle">
        <h1 class="text-xl">
          <div class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 fill-current mr-3"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd"
              />
            </svg>
            <h1 class="font-bold mr-3 text-blue-800">Location </h1>
            <p class="font-normal">{data.location}</p>
          </div>
        </h1>
      </p>
      <p class="text-left">
        <h1 class="text-xl">
          <div class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 fill-current mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <b>
              <h1 class="font-bold mr-3 text-blue-800">Contact </h1>
            </b>
            <p class="font-normal">{data.contact_number}</p>
          </div>
        </h1>
      </p>

      <div class="bg-blue-200 m-0.5 p-5 rounded-2xl">
        <h1 class="text-xl text-left">
          <b>
            <h1 class="text-xl font-bold text-blue-800">Opening Hours </h1>
          </b>

          <b
            dangerouslySetInnerHTML={{
              __html: data.opening_hours
                .replace(/\\n/g, "<br/>")
                .replace(/(\w)(\w*)/g, function (g0, g1, g2) {
                  return g1.toUpperCase() + g2.toLowerCase();
                }),
            }}
          />
        </h1>
      </div>
    </div>
  );
};

export default PCRCard;
