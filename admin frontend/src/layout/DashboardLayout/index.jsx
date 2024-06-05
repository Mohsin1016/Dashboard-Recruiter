import { Avatar, Button, Dropdown, Layout, Spin } from "antd";
import Sidebar from "./Sidebar";
import { useMutation, useQuery } from "@tanstack/react-query";
import { db } from "@/config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import authApi from "@/lib/authApi";
import Image from "next/image";
import {FaRegBell} from "react-icons/fa"
import {FiSettings} from "react-icons/fi"

const { Header, Content } = Layout;

const Index = ({ children }) => {
  const router = useRouter();
  const items = [
    {
      key: "2",
      label: (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            className="text-sm md:text-lg font-medium font-poppins"
            style={{ textTransform: "capitalize", color: "#F49342" }}
          >
            {/* {data?.name} */}
            John Doe
          </span>
          <span
            className="text-black opacity-50 text-xs md:text-sm font-normal font-poppins"
            style={{ textTransform: "capitalize", opacity: "60" }}
          >
            {/* {data?.role} */}
            Admin
          </span>
        </div>
      ),
    },
    {
      key: "1",
      label: (
        <span
          className="text-red-600 opacity-50 text-xs md:text-base font-normal font-poppins"
          style={{ color: "red" }}
          onClick={() => logoutMutation.mutate()}
        >
          Logout
        </span>
      ),
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }} className="">
      <Sidebar role={"admin"} />
      <Layout className="site-layout">
        <Header
          className="site-layout-background bg-white flex items-center justify-between font-poppins"
          style={{ paddingTop: 20, paddingBottom: 20, height: "4rem" }}
        >
          <div>

            <h1 className="flex justify-start items-start font-extrabold text-xl">Dashboard</h1>
          </div>

          <div className="flex gap-5 items-center">
          <FiSettings size={24} className="md:block hidden" />
          <FaRegBell size={24} className="md:block hidden"/>
         {/* <Image src={'/images/bell.png'} alt="" width="30" height="20" /> */}

            <Dropdown menu={{ items }} placement="bottom">
              <Avatar
                size="large"
                icon={<UserOutlined style={{ color: "black" }} />}
                className="flex items-center justify-center bg-white cursor-pointer"
              />
            </Dropdown>
          </div>

          {/* <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: ".5rem",
              paddingRight: "30px",
            }}
          >
            <Avatar
              size="large"
              icon={<UserOutlined style={{ color: "black" }} />}
              className="flex items-center justify-center bg-white"
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                className="text-sm md:text-lg font-medium font-poppins"
                style={{ textTransform: "capitalize", color: "#F49342" }}
              >
                {data?.name}
              </span>
              <span
                className="text-white text-xs md:text-base font-normal font-poppins"
                style={{ textTransform: "capitalize", opacity: "60" }}
              >
                {data?.role}
              </span>
            </div>
          </div> */}
        </Header>
        <Content
          style={{
            background: "#F8F8F8",
          }}
        >
          <div
            className="bg-[#FAFBFF]"
            style={{

              padding: 24,
              minHeight: 360,
              height: "85vh",
              overflowY: "scroll",
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Index;
