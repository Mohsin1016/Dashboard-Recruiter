import categoryApi from "@/lib/category";
import { useQuery } from "@tanstack/react-query";
import { Button, Space, Table, Input, Popconfirm } from "antd";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

const CategoryModal = dynamic(() =>
  import("../../components/Categories/CategoryModal")
);

const { Search } = Input;

const Index = ({ categories }) => {
  const [searchedText, setSearchedText] = useState("");
  const [category, setCategory] = useState();
  const { data, isLoading, isError } = useQuery(
    ["categories"],
    async () => {
      const data = await categoryApi.getCategories();
      return data;
    },
    {
      initialData: categories,
    }
  );
  console.log("data in index", data);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const columns = [
    {
      title: (
        <div className="flex items-center justify-center space-x-4">
          <span className="text-base font-poppins font-medium">#</span>
          <Image
            src={"/images/sort.svg"}
            width={20}
            height={20}
            style={{ marginLeft: "8px" }}
          />
        </div>
      ),
      dataIndex: "index",
      key: "index",
      render: (_, record, index) => {
        return (
          <div className="flex items-center justify-center space-x-2">
            <span className="text-base font-poppins font-medium text-[#474747]">
              {index + 1}
            </span>
          </div>
        );
      },
      sorter: (a, b) => a.index - b.index,
    },
    {
      title: (
        <div className="flex items-center justify-center space-x-4 w-full">
          <Image
            src={"/images/sort.svg"}
            width={20}
            height={20}
            style={{ marginLeft: "8px" }}
          />
          <span className="text-base font-poppins font-medium">
            Category Name
          </span>
        </div>
      ),
      dataIndex: "name",
      key: "name",
      render: (_, record) => {
        return record?.name ? (
          <div className="flex items-center justify-center space-x-2">
            <span className="text-base font-poppins font-medium text-[#474747]">
              {record?.name}
            </span>
          </div>
        ) : (
          "N/A"
        );
      },
      filteredValue: [searchedText],
      onFilter: (value, record) => {
        return String(record.name).toLowerCase().includes(value.toLowerCase());
      },
      sorter: (a, b) => a.name - b.name,
    },
    {
      title: (
        <div className="flex items-center justify-center space-x-4">
          <span className="text-base font-poppins font-medium">Actions</span>
        </div>
      ),
      key: "actions",
      render: (_, record) => {
        return (
          <div className="flex items-center justify-center">
            <Popconfirm
              placement="left"
              title={
                <div className="flex flex-col">
                  <Button
                    type="link"
                    className="flex items-center space-x-2 text-[#2f9379] font-poppins"
                    onClick={() => {
                      setCategory(record);
                      setShowCategoryModal(true);
                    }}
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
                    <Image src={"/images/delete.svg"} width={18} height={18} />
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

  return (
    <div>
      <Head>
        <title>Categories</title>
      </Head>
      <h2 className="text-2xl font-barlow font-semibold">Categories</h2>
      <div className="tableWrapper">
        <div className="categoryHeader">
          <Space className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between pb-5">
            <Search
              placeholder="Search Category"
              allowClear
              size="large"
              onSearch={(value) => setSearchedText(value)}
              onChange={(e) => setSearchedText(e.target.value)}
              className="searchBar w-52 md:w-[18rem]"
            />
            <Button
              className="btn-primary bg-[#2f9379] font-poppins hover:bg-[#2f9379]"
              type="primary"
              size="large"
              onClick={() => setShowCategoryModal(true)}
            >
              Add Category
            </Button>
          </Space>
        </div>
        <Table
          loading={isLoading}
          columns={columns}
          dataSource={data}
          pagination={{ defaultPageSize: 4 }}
          // className="table"
          scroll={{ x: 1000 }}
        />
      </div>
      {showCategoryModal && (
        <CategoryModal
          show={showCategoryModal}
          close={() => {
            setShowCategoryModal(false);
          }}
          data={category}
          setData={setCategory}
        />
      )}
    </div>
  );
};

export default Index;

export const getServerSideProps = async () => {
  const categories = await categoryApi.getCategories();
  return { props: { categories } };
};
