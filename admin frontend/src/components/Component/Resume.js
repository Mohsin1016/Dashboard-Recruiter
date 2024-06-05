import React from "react";

const Resume = () => {
  const items = [
    {
      title: "Graphic Designer",
      score: "66%",
      color: "#2668E8",
      width: "16",
      flag: false,
    },
    {
      title: "Salesperson",
      score: "77%",
      color: "#F05519",
      width: "30",
      flag: false,
    },
    {
      title: "UIUX Designer",
      score: "88%",
      color: "#09D690",
      width: "16",
      flag: false,
    },
  ];
  return (
    <div className="md:my-6 rounded-[10px] py-4 w-[14rem] h-[295px] md:h-[335px] md:w-[400px]  bg-[#FFFFFF] bg-[0px 4px 21px 0px #0000000D] font-poppins shadow-md">
      <div>
        <h1 className="font-[#000000] font-semibold px-6">Resume</h1>
      </div>
      <div className="flex flex-col">
        {items.map((item, index) => {
          return (
           <div  key={index}>
              <div className=" relative text-xs md:text-base mt-6 px-6">
                <h1 className=" font-[#777777] font-normal -mt-[1rem] ">
                  {item.score}
                </h1>
                <div className="h-1  mt-[0.4rem] w-full mb-4 rounded-full bg-[#D9D9D9]">
                  <div
                    className="h-1  mt[0.4rem  rounded-full"
                    style={{ background: item.color, width: item.score }}
                  ></div>
                </div>
                <h1 className="-mt-[1.5rem] mb-1 absolute right-5 top-3 font-normal text-[#777777]">
                  {" "}
                  {item.title}
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
      <div className="flex mt-6 justify-between px-6 text-xs md:text-base">
        <h1 className="text-[#000000] font-medium">Subscribtion</h1>
        <h1 className="font-medium text-[#F05519]">UPGRADE</h1>
      </div>
      <div className="flex mt-2 justify-between px-6 text-xs md:text-base">
        <h1 className="font-normal text-[#777777]">Active Plan</h1>
        <h1 className="font-medium text-[#000000]">basic</h1>
      </div>
      <div className="flex mt-2 justify-between px-6">
        <h1 className="font-normal text-[#777777] text-xs md:text-base">Renewal Date</h1>
        <h1 className="font-medium -ml-4 text-[#000000] text-xs md:text-base">12 July 2023</h1>
      </div>
    </div>
  );
};

export default Resume;
