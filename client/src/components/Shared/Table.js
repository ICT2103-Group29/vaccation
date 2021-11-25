import React from "react";
import "../../assets/css/font.css";
import "antd/dist/antd.css";
import { Table } from "antd";

const TableData = ({ columns, data }) => {
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }
  return (
    <div class="m-auto ">
      <Table
        className="vacc-table"
        columns={columns}
        dataSource={data}
        onChange={onChange}
      />
    </div>
  );
};
export default TableData;
