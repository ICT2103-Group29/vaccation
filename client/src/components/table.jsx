import React from "react";
import "../assets/font.css";
import "antd/dist/antd.css";

import { Table } from "antd";

const columns = [
  {
    title: "Country",
    dataIndex: "country",
  },
  {
    title: "Total Fully Vaccinated",
    dataIndex: "fully_vaxed",
    sorter: (a, b) => a.fully_vaxed - b.fully_vaxed,
  },
  {
    title: "Total Vaccinated",
    dataIndex: "total_vaxed",
    sorter: (a, b) => a.fully_vaxed - b.fully_vaxed,
  },
  {
    title: "Population",
    dataIndex: "population",
    sorter: (a, b) => a.population - b.population,
  },
];

const data = [
  {
    key: "1",
    country: "France",
    fully_vaxed: 158183,
    total_vaxed: 31,
    population: "50%",
  },
  {
    key: "2",
    country: "Germany",
    fully_vaxed: 200000,
    total_vaxed: 32,
    population: "50%",
  },
  {
    key: "3",
    country: "China",
    fully_vaxed: 300000,
    total_vaxed: 33,
    population: "50%",
  },
  {
    key: "4",
    country: "Singapore",
    fully_vaxed: 400000,
    total_vaxed: 34,
    population: "50%",
  },
];

function onChange(pagination, filters, sorter, extra) {
  console.log("params", pagination, filters, sorter, extra);
}

const TableData = (props) => {
  return (
    <div class="m-auto ">
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
};
export default TableData;
