import React from "react";
import { Button } from "antd";

const Buttons = (props) => {
  return (
    <a href="/results">
      <Button
        type="primary"
        class="bg-blue-800 text-white rounded-md w-40 h-12  text-xl font-semibold"
      >
        {props.children}
      </Button>
    </a>
  );
};

export default Buttons;
