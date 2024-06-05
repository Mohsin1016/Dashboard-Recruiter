import TopCard from "@/components/Home/TopCard";
import { Avatar, Button, Select, Table, Tag } from "antd";
import Head from "next/head";
import Image from "next/image";
import { UserOutlined } from "@ant-design/icons";
import Application from "@/components/Component/Application";
import Aquizition from "@/components/Component/Aquizition";
import Profile from "@/components/Component/Profile";
import Resume from "@/components/Component/Resume";
import Topcard from "@/components/Component/Topcard";

const Index = () => {
  const columns = [
    {
      title: (
        <div className="flex items-center space-x-4">
          <span className="text-base font-poppins font-medium">#</span>
          <Image
            src={"/images/sort.svg"}
            width={20}
            height={20}
            style={{ marginLeft: "8px" }}
          />
        </div>
      ),
      dataIndex: "no",
      sorter: (a, b) => a.age - b.age,
      render: (_, record) => (
        <div className="w-full flex items-center justify-center">
          <span className="text-base font-poppins font-medium text-[#474747]">
            {record.no}
          </span>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center space-x-4">
          <span className="text-base font-poppins font-medium">Date</span>
        </div>
      ),
      dataIndex: "date",
      render: (_, record) => (
        <div className="w-full flex items-center">
          <span className="text-base font-poppins font-medium text-[#474747]">
            {record.date}
          </span>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center space-x-4">
          <Image
            src={"/images/sort.svg"}
            width={20}
            height={20}
            style={{ marginLeft: "8px" }}
          />
          <span className="text-base font-poppins font-medium">Customer</span>
        </div>
      ),
      dataIndex: "name",
      sorter: (a, b) => a.age - b.age,
      render: (_, record) => {
        return record?.name ? (
          <div className="flex items-center justify-center space-x-2">
            <Avatar
              icon={<UserOutlined />}
              // src={
              //   record?.user?.image
              //     ? `${process.env.NEXT_PUBLIC_API_URL}${record?.user?.image.url}`
              //     : ""
              // }
              className="flex items-center justify-center"
            />
            <span className="text-base font-poppins font-medium text-[#474747]">
              {record?.name}
            </span>
          </div>
        ) : (
          "N/A"
        );
      },
    },
    {
      title: (
        <div className="flex items-center space-x-4">
          <Image
            src={"/images/sort.svg"}
            width={20}
            height={20}
            style={{ marginLeft: "8px" }}
          />
          <span className="text-base font-poppins font-medium">Country</span>
        </div>
      ),
      dataIndex: "country",
      sorter: (a, b) => a.age - b.age,
      render: (_, record) => {
        return (
          <div className="flex items-center justify-center space-x-2">
            <span className="text-base font-poppins font-medium text-[#474747]">
              {record?.country}
            </span>
          </div>
        );
      },
    },
    {
      title: (
        <div className="flex items-center space-x-4">
          <Image
            src={"/images/sort.svg"}
            width={20}
            height={20}
            style={{ marginLeft: "8px" }}
          />
          <span className="text-base font-poppins font-medium">Products</span>
        </div>
      ),
      dataIndex: "service",
      sorter: (a, b) => a.age - b.age,
      render: (_, record) => (
        <div className="w-full flex items-center justify-center">
          <Button className="text-base font-poppins font-medium text-[#474747]">
            View Products
          </Button>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center space-x-4">
          <Image
            src={"/images/sort.svg"}
            width={20}
            height={20}
            style={{ marginLeft: "8px" }}
          />
          <span className="text-base font-poppins font-medium">Status</span>
        </div>
      ),
      dataIndex: "status",
      sorter: (a, b) => a.age - b.age,
      render: (_, record) => (
        <div className="w-full flex items-center justify-center">
          <Tag
            style={{ background: "rgba(207, 246, 128, 0.46)" }}
            className="mx-auto text-sm font-poppins font-normal text-[black] px-6 py-1"
          >
            {record.status}
          </Tag>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center space-x-4">
          <Image
            src={"/images/sort.svg"}
            width={20}
            height={20}
            style={{ marginLeft: "8px" }}
          />
          <span className="text-base font-poppins font-medium">Payment</span>
        </div>
      ),
      dataIndex: "payment",
      sorter: (a, b) => a.age - b.age,
      render: (_, record) => (
        <div className="w-full flex items-center justify-center">
          <Tag
            style={{ background: "rgba(245, 98, 51, 0.47)" }}
            className="mx-auto text-sm font-poppins font-normal text-[black] px-6 py-1"
          >
            {record.payment}
          </Tag>
        </div>
      ),
    },
    {
      title: (
        <div className="flex items-center space-x-4">
          <Image
            src={"/images/sort.svg"}
            width={20}
            height={20}
            style={{ marginLeft: "8px" }}
          />
          <span className="text-base font-poppins font-medium">Action</span>
        </div>
      ),
      render: (_, record) => (
        <div className="w-full flex items-center justify-center">
          <Image src={"/images/accept.svg"} width={18} height={18} />
        </div>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      no: 1,
      status: "New",
      payment: "UnPaid",
      country: "USA",
      date: "13 Spt 2023",
      service: "Rehab",
    },
    {
      key: "2",
      name: "John Brown",
      no: 2,
      status: "New",
      payment: "UnPaid",
      country: "USA",
      date: "13 Spt 2023",
      service: "Rehab",
    },
    {
      key: "3",
      name: "John Brown",
      no: 3,
      status: "New",
      payment: "UnPaid",
      country: "USA",
      date: "13 Spt 2023",
      service: "Rehab",
    },
    {
      key: "4",
      name: "John Brown",
      no: 4,
      status: "New",
      payment: "UnPaid",
      country: "USA",
      date: "13 Spt 2023",
      service: "Rehab",
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>



      <Topcard />
       <div className="flex md:flex-row flex-col md:gap-6">
        <Aquizition />
        <Resume />
        <Profile />
        </div>
    
     
      <Application />
    </>
  );
};



export default Index;
