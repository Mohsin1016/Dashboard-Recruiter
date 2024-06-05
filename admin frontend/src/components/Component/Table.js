// components/Table.js
import React from "react";

const Table = () => {
  const data = [
    {
      Name: "james Smith",
      Email: "james34@gmail.com",
      Apply: "designer",
      Date: "12-04-23",
      procss: "12-04-23",
    },
    {
      Name: "james Smith",
      Email: "james34@gmail.com",
      Apply: "designer",
      Date: "12-04-23",
      procss: "12-04-23",
    },
    {
      Name: "james Smith",
      Email: "james34@gmail.com",
      Apply: "designer",
      Date: "12-04-23",
      procss: "12-04-23",
    },
    {
      Name: "james Smith",
      Email: "james34@gmail.com",
      Apply: "designer",
      Date: "12-04-23",
      procss: "12-04-23",
    },
    {
      Name: "james Smith",
      Email: "james34@gmail.com",
      Apply: "designer",
      Date: "12-04-23",
      procss: "12-04-23",
    },
    {
      Name: "james Smith",
      Email: "james34@gmail.com",
      Apply: "designer",
      Date: "12-04-23",
      procss: "12-04-23",
    },
    {
      Name: "james Smith",
      Email: "james34@gmail.com",
      Apply: "designer",
      Date: "12-04-23",
      procss: "12-04-23",
    },
  ];
  return (
    <table className="w-full mt-4 table-auto  ">
      <thead className="rounded-lg">
        <tr className="bg-[#B4C7ED30] ">
          <th className="py-2 px-4 text-start rounded-l-lg">Name</th>
          <th className="py-2 px-4 text-start">Email</th>
          <th className="py-2 px-4 text-start">Apply for</th>
          <th className="py-2 px-4 text-start">Date</th>
          <th className="py-2 px-4 text-start rounded-r-lg">Process</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          return (
            <tr key={index} className="border-b border-[#d2d2d2] ">
              <td className="py-2 font-normal text-[#777777] bg-white px-4">
                {item.Name}
              </td>

              <td className="py-2 font-normal text-[#777777] bg-white px-4">
                {item.Email}
              </td>
              <td className="py-2  font-normal text-[#777777] bg-white px-4">
                {item.Apply}
              </td>
              <td className="py-2  font-normal text-[#777777]  bg-white px-4">
                {item.Date}
              </td>
              <td className="py-2  font-normal text-[#777777]  bg-white px-4">
                {item.procss}
              </td>
            </tr>
          );
        })}
        {/* {Array.from({ length: 7 }, (_, rowIdx) => (
          <tr key={rowIdx}>
            <td className="py-2 px-4 "></td>
          </tr>
        ))} */}
      </tbody>
    </table>
  );
};

export default Table;
