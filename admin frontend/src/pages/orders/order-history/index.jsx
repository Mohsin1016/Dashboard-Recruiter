import CategoryModal from "@/components/Categories/CategoryModal";
import { Button, Space, Table, Input } from "antd";
import Head from "next/head";
import Image from "next/image";

const { Search } = Input;

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
              src={
                record?.user?.image
                  ? `${process.env.NEXT_PUBLIC_API_URL}${record?.user?.image.url}`
                  : ""
              }
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
  return (
    <div>
      <Head>
        <title>Orders History</title>
      </Head>
      <h2 className="text-2xl font-barlow font-semibold">Orders History</h2>
      <div className="tableWrapper">
        <div className="categoryHeader">
          <Space className="flex items-center pb-5">
            <Search
              placeholder="Search Order"
              allowClear
              size="large"
              // onSearch={(value) => setSearchedText(value)}
              // onChange={(e) => setSearchedText(e.target.value)}
              className="searchBar w-52 md:w-[18rem]"
            />
          </Space>
        </div>
        <Table
          // loading={isLoading}
          columns={columns}
          // dataSource={data}
          pagination={{ defaultPageSize: 4 }}
          // className="table"
          scroll={{ x: 1000 }}
        />
      </div>
    </div>
  );
};

export default Index;
