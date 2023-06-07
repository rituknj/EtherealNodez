import { Tabs } from "antd";
import React from "react";
import {AiOutlineCalendar} from "react-icons/ai"

export default function Datetabs2() {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `Day`,
      
    },
    {
      key: "2",
      label: `Week`,
      
    },
    {
      key: "3",
      label: `Month`,
      
    },
    {
      key: "4",
      label: `Year`,
      
    },
  ];
  return (
    <div>
      <div className=" d-f a-i-c font-f c-p m-b-2">
      <div className="font-f m-l-0_5">1D</div>
      <div className="font-f m-l-0_5">1W</div>
      <div className="font-f m-l-0_5">1M</div>
      <div className="font-f m-l-0_5">1Y</div>
      <div><AiOutlineCalendar/></div>
      </div>
      
    </div>
  );
}
