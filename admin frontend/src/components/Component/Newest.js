import React, { useState } from "react";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
const Newest = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">Option 1</Menu.Item>
      <Menu.Item key="2">Option 2</Menu.Item>
      <Menu.Item key="3">Option 3</Menu.Item>
    </Menu>
  );
  const [data, setData] = useState([
    {
      name: "All Status",
      flag: true,
    },
    {
      name: "Pending",
      flag: false,
    },
    {
      name: "On-Hold",
      flag: false,
    },
    {
      name: "Candidate",
      flag: false,
    },
  ]);

  const handleFilter = (name) => {
    // ta(newData);
    // console.log(data);
    // const newdata = data.map((item, index) => {
    //   item.name === name ? { ...item, flag: true } : { ...item, flag: false };
    // });
    // console.log(newdata);
    const newData = data.map((items, index) => {
      return items.name === name
        ? { ...items, flag: true }
        : { ...items, flag: false };
    });
    setData(newData);
  };

  return (
    <div>
      <div className="flex justify-between font-poppins">
        <ul className="flex space-x-3 md:space-x-4">
          {data.map((item, index) => {
            return (
              <div
                onClick={() => handleFilter(item.name)}
                className={
                  item.flag
                    ? "cursor-pointer font-normal text-[12px] md:text-sm font-poppins text-[#2668E8]"
                    : "cursor-pointer font-normal text-[12px] md:text-sm font-poppins"
                }
              >
                {item.name}
              </div>
            );
          })}
        </ul>
        <div>
        <Dropdown
          overlay={menu}
          placement="bottomLeft"
          arrow
          className="flex items-center gap-2 py-2 px-4 bg-[#2668E81F] rounded-[5px] "
        >
          <button
            className="ant-dropdown-link text-[#2668E8] font-semibold mt-10 md:mt-0  md:ml-0 ml-[-5rem]"
            onClick={(e) => e.preventDefault()}
          >
            Newest <DownOutlined className="small-arrow-icon text-[#2668E8]" />
          </button>
        </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Newest;
