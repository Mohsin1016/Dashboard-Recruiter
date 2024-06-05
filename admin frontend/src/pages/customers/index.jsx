import { Button, Space, Table, Input, Avatar, Popconfirm } from "antd";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { UserOutlined } from "@ant-design/icons";

const { Search } = Input;

const Index = () => {
  const [showCustomerModal, setShowCustomerModal] = useState(false);
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
      key: "no",
      render: (_, record) => {
        return record?.no ? (
          <div className="flex items-center justify-center space-x-2">
            <span className="text-base font-poppins font-medium text-[#474747]">
              {record?.no}
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
          <span className="text-base font-poppins font-medium">Name</span>
        </div>
      ),
      dataIndex: "name",
      key: "name",
      render: (_, record) => {
        return record?.name ? (
          <div className="flex items-center space-x-2">
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

      //   filteredValue: [searchedText],
      //   onFilter: (value, record) => {
      //     return (
      //       String(record.name).toLowerCase().includes(value.toLowerCase()) ||
      //       String(record.category).toLowerCase().includes(value.toLowerCase()) ||
      //       String(record.subCategory)
      //         .toLowerCase()
      //         .includes(value.toLowerCase()) ||
      //       String(record.colors).toLowerCase().includes(value.toLowerCase()) ||
      //       String(record.type).toLowerCase().includes(value.toLowerCase()) ||
      //       String(record.material).toLowerCase().includes(value.toLowerCase()) ||
      //       String(record.sizes).toLowerCase().includes(value.toLowerCase())
      //     );
      //   },
    },
    {
      title: (
        <div className="flex items-center space-x-4">
          <Image src={"/images/sort.svg"} width={20} height={20} />
          <span className="text-base font-poppins font-medium">Country</span>
        </div>
      ),
      dataIndex: "country",
      key: "country",
      render: (_, record) => {
        return record?.country ? (
          <div className="flex items-center space-x-2">
            <span className="text-base font-poppins font-medium text-[#474747]">
              {record?.country}
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
          <Image src={"/images/sort.svg"} width={20} height={20} />
          <span className="text-base font-poppins font-medium">Email</span>
        </div>
      ),
      dataIndex: "email",
      key: "email",
      render: (_, record) => {
        return record?.email ? (
          <div className="flex items-center space-x-2">
            <span className="text-base font-poppins font-medium text-[#474747]">
              {record?.email}
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
          <Image src={"/images/sort.svg"} width={20} height={20} />
          <span className="text-base font-poppins font-medium">Phone No</span>
        </div>
      ),
      dataIndex: "phone",
      key: "phone",
      render: (_, record) => {
        return record?.phone ? (
          <div className="flex items-center space-x-2">
            <span className="text-base font-poppins font-medium text-[#474747]">
              {record?.phone}
            </span>
          </div>
        ) : (
          "N/A"
        );
      },
    },
    {
      title: (
        <div className="flex items-center justify-center space-x-4">
          <span className="text-base font-poppins font-medium">Actions</span>
        </div>
      ),
      key: "actions",
      render: () => {
        return (
          <div className="flex items-center justify-center">
            <Popconfirm
              placement="left"
              title={
                <div className="flex flex-col">
                  {/* <Button
                    type="link"
                    className="flex items-center space-x-2 text-[#2f9379] font-poppins hover:text-[#2f9379]"
                  >
                    <Image src={"/images/eye.svg"} width={18} height={18} />
                    View Details
                  </Button> */}
                  <Button
                    type="link"
                    className="flex items-center space-x-2 text-[#2f9379] font-poppins"
                  >
                    <Image
                      src={"/images/edit_icon1.svg"}
                      width={18}
                      height={18}
                    />
                    Edit Details
                  </Button>
                  <Button
                    type="link"
                    className="flex items-center space-x-2 text-[#D94B38] font-poppins"
                  >
                    <Image
                      src={"/images/delete.svg"}
                      width={18}
                      height={18}
                    />
                    Delete
                  </Button>
                </div>
              }
              description=""
              // onConfirm={confirm}
              icon={null}
            >
              <Image
                className="cursor-pointer"
                src={"/images/more_icon.svg"}
                width={24}
                height={24}
              />
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      no: 1,
      country: "USA",
      phone: "312123212",
      email: "john@gmail.com",
    },
    {
      key: "2",
      name: "John Brown",
      no: 2,
      country: "USA",
      phone: "312123212",
      email: "john@gmail.com",
    },
    {
      key: "3",
      name: "John Brown",
      no: 3,
      country: "USA",
      phone: "312123212",
      email: "john@gmail.com",
    },
  ];
  return (
    <div>
      <Head>
        <title>Customers</title>
      </Head>
      <h2 className="text-2xl font-barlow font-semibold">Customers</h2>
      <div className="tableWrapper">
        <div className="categoryHeader">
          <Space className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between pb-5">
            <Search
              placeholder="Search Customer"
              allowClear
              size="large"
              // onSearch={(value) => setSearchedText(value)}
              // onChange={(e) => setSearchedText(e.target.value)}
             
              className="searchBar w-52 md:w-[18rem]"
            />
            <Button
              className="btn-primary bg-[#2f9379] font-poppins hover:bg-[#2f9379]"
              type="primary"
              size="large"
              onClick={() => setShowCustomerModal(true)}
            >
              Add Customer
            </Button>
          </Space>
        </div>
        <Table
          // loading={isLoading}
          columns={columns}
          dataSource={data}
          pagination={{ defaultPageSize: 4 }}
          // className="table"
          scroll={{ x: 1000 }}
        />
      </div>
      {/* {showCustomerModal && (
        <ProductModal
          show={showCustomerModal}
          close={() => {
            setShowCustomerModal(false);
          }}
        />
      )} */}
    </div>
  );
};

export default Index;
