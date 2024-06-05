import React from "react";
import Image from "next/image";
import { DatePicker, Space } from "antd";
import { CalendarOutlined } from "@ant-design/icons";

const Aquizition = () => {
  const items = [
    {
      title: "Applications",
      score: "66%",
      color: "#2668E8",
      width: "16",
      flag: false,
    },
    {
      title: "Shortlisted          ",
      score: "66%",
      color: "#D7A311",
      width: "30",
      flag: false,
    },
    {
      title: "Rejected ",
      score: "66%",
      color: "#F05519",
      width: "16",
      flag: false,
    },
    {
      title: "onHold",
      score: "66%",
      color: "#09D690",
      width: "16",
      flag: false,
    },
    {
      title: "Finalized",
      score: "66%",
      color: "#2668E8",
      width: "16",
      flag: true,
    },
  ];

  const handleMonthChange = (date, dateString) => {
    console.log("Selected Month:", dateString);
  };
  const customSuffixIcon = <CalendarOutlined style={{ color: "blue" }} />;

  return (
    <div className="my-6 rounded-[10px] py-4 w-[14rem] md:h-[335px] md:w-[400px] h-[19rem] bg-[#FFFFFF]  font-poppins shadow-md">
      <div className="flex justify-between px-3 md:px-6">
        <h1 className="font-semibold font-[#000000]  ">Acquistions</h1>
        <div className="xs:w-[5rem] md:w-[8rem]">
          <Space direction="vertical" size={12}>
            <DatePicker.MonthPicker
              onChange={handleMonthChange}
              placeholder="Select month"
             
              suffixIcon={customSuffixIcon}
              picker="month"
            />
          </Space>
        </div>
      </div>
      <div className="flex flex-col ">
        {items.map((item, index) => {
          return (
            <div key={index}>
              <div className="flex mt-5 justify-between px-3 md:px-6 font-[400]">
                <div
                  className="w-3 h-3 bg-[#2668E8] rounded-full"
                  style={{ background: item.color }}
                ></div>
                <h1 className=" font-normal text-xs md:text-base text-[#777777] -mt-[0.27rem] text-left">
                  {item.title}
                </h1>
                <div className="h-1  mt-[0.4rem] w-16 md:w-40 rounded-full bg-[#D9D9D9]">
                  <div
                    className="h-1  mt[0.4rem  rounded-full"
                    style={{ background: item.color, width: item.score }}
                  ></div>
                </div>
                <h1 className="mt-2 mb-1 text-[#777777] rounded-full text-xs md:text-base font-normal ">
                  {" "}
                  {item.score}
                </h1>
              </div>
              <hr
                className={
                  item.flag ? "hidden" : "border-b border-[#d2d2d2]"
                }
              ></hr>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Aquizition;
