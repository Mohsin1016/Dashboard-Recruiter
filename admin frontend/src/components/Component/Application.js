import Table from "./Table";
import React from "react";

const Application = () => {
  return (
    <div>
      <div className="md:-mt-[23.5rem] mt-5 rounded-[10px] py-3 px-6 overflow-scroll md:overflow-hidden md:w-[820px] h-auto bg-[#FFFFFF] bg-[0px 4px 21px 0px #0000000D] font-poppins shadow-md">
        <div>
          <h1 className="text-[#000000] text-base font-semibold  pt-3 ">Recent Applications</h1>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Application;
