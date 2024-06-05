import React from "react";
import Image from "next/image";

const Topcard = () => {
  const data = [
    {
      title: "Total Applications",
      score: 6787,
      image: "/images/topcard1.svg",
      grpah: "/svg/bluearrow.svg",
      colors: "#2668E8",
      color: "#2668E833",
    },
    {
      title: "Shoertlisted Candidates",
      score: 2234,
      image: "/images/daadad1.svg",
      grpah: "/svg/redarrow.svg",
      color: "#F0551930",
      colors: "#F05519",
      flag: true,
    },
    {
      title: "Total Applications",
      score: 6787,
      image: "/images/fdfff1.svg",
      grpah: "/svg/greenarrow.svg",
      color: "#09D69030",
      colors: "#09D690",
    },
  ];

  return (
    <div className="flex md:flex-row flex-col gap-7">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className=" bg-[ 0px 4px 21px 0px #0000000D] bg-white w-[14rem] md:w-[16rem] h-[6.5rem] py-4 px-6 rounded-[10px] relative shadow-md"
          >
            <h1 className="text-[#777777] font-poppins ">Total Applications</h1>

            <div
              className="p-2 absolute right-4 top-10 h-12 w-12 rounded-[5px]"
              style={{ background: item.color }}
            >
              <Image src={item.image} height={30} width={30} alt="logo" />
            </div>
            <h1 className="font-semibold font-poppins text-lg">6787</h1>
            <div className="flex mt-2 ">
              <Image
                className="mr-1"
                src={item.grpah}
                height={20}
                width={20}
                alt="graph"
              />

              <h1
                className="font-poppins font-normal"
                style={{ color: item.colors }}
              >
                {" "}
                +45% inc
              </h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Topcard;
