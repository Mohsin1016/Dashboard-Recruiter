import React from "react";
import Image from "next/image";

import { CiLocationOn } from "react-icons/ci";
// import { FaSackDollar } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa";

const Jobpost = () => {
  const items = [
    {
      title: "Marketing",
      post: "manager",
      data: "MK studio inida",
      price: "$1200-$2300",
      month: "monthly Salry",
      location: "Mumbai Inida",
      loc: "location",
      collor: "#F05519",
    },
    {
      title: "Marketing",
      post: "manager",
      data: "MK studio inida",
      price: "$1200-$2300",
      month: "monthly Salry",
      location: "Mumbai Inida",
      loc: "location",
      collor: "#D7A311",
    },
    {
      title: "Marketing",
      post: "manager",
      data: "MK studio inida",
      price: "$1200-$2300",
      month: "monthly Salry",
      location: "Mumbai Inida",
      loc: "location",
      collor: "#09D690",
    },
    {
      title: "Marketing",
      post: "manager",
      data: "MK studio inida",
      price: "$1200-$2300",
      month: "monthly Salry",
      location: "Mumbai Inida",
      loc: "location",
      collor: "#F05519",
    },
    {
      title: "Marketing",
      post: "manager",
      data: "MK studio inida",
      price: "$1200-$2300",
      month: "monthly Salry",
      location: "Mumbai Inida",
      loc: "location",
      collor: "#F05519",
    },
    {
      title: "Marketing",
      post: "manager",
      data: "MK studio inida",
      price: "$1200-$2300",
      month: "monthly Salry",
      location: "Mumbai Inida",
      loc: "location",
      collor: "#F05519",
    },
  ];

  return (
    <div className="overflow-scroll md:overflow-hidden">
      <div className="flex  flex-col mt-4 font-poppins  ">
        {items.map((item, index) => {
          return (
            <div className="flex  justify-between bg-white w-[900px] md:w-[1280px] mt-4  p-4 ">
              <div className="flex gap-4">
                <div
                  style={{ background: item.collor }}
                  className="p-5  rounded-lg"
                >
                  <div className="p-3 bg-[#D9D9D9] rounded-full"></div>
                </div>
                <div>
                  <h1 className="font-medium font-poppins">{item.title} </h1>
                  <h1 className="font-medium font-poppins">{item.post}</h1>
                  <h1 className="font-normal text-[#2668E8] font-poppins">
                    {item.data}
                  </h1>
                </div>
              </div>
              {/* ============================================================= */}
              <div className="flex gap-4 items-center">
                {/* <div className="p-5 h-5    rounded-md text-white bg-[#09D690]">
                  <Image
                    src={"/images/money.svg"}
                    height={20}
                    width={20}
                    alt="sa"
                    className="-mt-3"
                  />
                </div> */}
                <div className="p-5 h-6 w-6 rounded-md bg-[#09D690]">
                  {/* <CiLocationOn className="text-white text-2xl -ml-3 -mt-3" /> */}
                  {/* <FaSackDollar /> */}
                  {/* <i class="fa-solid fa-sack-dollar"></i> */}
                </div>
                <div>
                  <h1 className="font-medium font-poppins">{item.price}</h1>
                  <h1 className="font-medium font-poppins text-[#777777]">
                    {item.month}
                  </h1>
                </div>
              </div>
              {/* ============================================================= */}
              <div className="flex gap-4 items-center">
                <div className="p-5 h-6 w-6 rounded-md bg-[#F055199C]">
                  <CiLocationOn className="text-white text-2xl -ml-3 -mt-3" />
                </div>
                <div>
                  <h1 className="font-medium font-poppins">{item.location}</h1>
                  <h1 className="font-medium font-poppins text-[#777777]">
                    {item.loc}
                  </h1>
                </div>
              </div>
              {/* ============================================================= */}
              <div className=" flex items-center">
                <button className="p-2 pl-5 pr-5 font-semibold rounded-[4px] bg-[#2668E81F] text-[#2668E8] cursor-pointer ">
                  Apply Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {/* ======================================================;;;;;=========== */}
    </div>
  );
};

export default Jobpost;
