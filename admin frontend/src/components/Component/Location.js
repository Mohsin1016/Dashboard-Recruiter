import React from "react";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
const Location = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">Option 1</Menu.Item>
      <Menu.Item key="2">Option 2</Menu.Item>
      <Menu.Item key="3">Option 3</Menu.Item>
    </Menu>
  );
  const data = [
    {
      name: "Choose Location",
    },
    {
      name: "Salary Range",
    },
  ];

  return (
    <>
      <div className="flex md:flex-row flex-col md:justify-between items-center font-poppins text-xs md:text-sm ">
        <ul className="flex  gap-4">
          {data.map((item, index) => {
            return (
              <Dropdown
                key={index}
                overlay={menu}
                placement="bottomLeft"
                arrow
                className="flex items-center gap-2 py-2 px-4 bg-[#F0551926] rounded-[5px]"
              >
                <button
                  className="ant-dropdown-link text-[#F05519] font-semibold"
                  onClick={(e) => e.preventDefault()}
                >
                  {item.name}{" "}
                  <DownOutlined className="small-arrow-icon text-[#F05519]" />
                </button>
              </Dropdown>
            );
          })}
        </ul>
        <Dropdown
          overlay={menu}
          placement="bottomLeft"
          arrow
          className="flex md:justify-normal ml-[-8.2rem] mt-5 md:mt-0 md:ml-0 items-center gap-2 py-2 px-4 bg-[#2668E81F] rounded-[5px]"
        >
          <button
            className="ant-dropdown-link text-[#2668E8] font-semibold text-xs md:text-sm "
            onClick={(e) => e.preventDefault()}
          >
            Newest <DownOutlined className="small-arrow-icon text-[#2668E8]" />
          </button>
        </Dropdown>
      </div>
    </>
  );
};

export default Location;
