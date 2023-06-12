import {AiFillCalendar} from "react-icons/ai"
import React from "react";

export default function Datetabs() {
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
      <div className="d-f a-i-c font-f m-b-2 c-p"> 
      <div className="m-l-0_5 font-f">Day </div>
      <div className="m-l-0_5 font-f">Week </div>
      <div className="m-l-0_5 font-f hightlight">Month</div>
      <div className="m-l-0_5 font-f">Year</div>   
      <div className="m-l-0_5 font-f"><AiFillCalendar/></div>
      </div>
      
    </div>
  );
}
