import ProductModal from "@/components/Products/ProductModal";
import categoryApi from "@/lib/category";
import productApi from "@/lib/product";
import { useQuery } from "@tanstack/react-query";
import { Button, Space, Table, Input, Popconfirm } from "antd";
import Head from "next/head";
import Image from "next/image";
import { Image as AntdImage } from "antd";
import { useState } from "react";

const { Search } = Input;

const Index = ({ categories, products }) => {
  const [showProductModal, setShowProductModal] = useState(false);
  const { data, isLoading, isError } = useQuery(
    ["products"],
    async () => {
      const data = await productApi.getProdcuts();
      return data;
    },
    {
      initialData: products,
    }
  );
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
      render: (_, record, index) => {
        return (
          <div className="flex items-center justify-center space-x-2">
            <span className="text-base font-poppins font-medium text-[#474747]">
              {index + 1}
            </span>
          </div>
        );
      },
    },
    {
      title: (
        <div className="flex items-center space-x-4">
          <span className="text-base font-poppins font-medium">Image</span>
        </div>
      ),
      key: "image",
      dataIndex: "image",
      render: (_, record) => {
        return (
          <div className="flex items-center justify-center space-x-2">
            {record?.images?.length > 0 ? (
              <AntdImage src={record?.images[0].url} width={40} height={40} />
            ) : (
              <span className="text-base font-poppins font-medium text-[#474747]">
                N/A
              </span>
            )}
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
          <span className="text-base font-poppins font-medium">Name</span>
        </div>
      ),
      dataIndex: "name",
      key: "name",
      render: (_, record) => {
        return (
          <div className="flex items-center justify-center space-x-2">
            <span className="text-base font-poppins font-medium text-[#474747]">
              {record?.name ? record?.name : "N/A"}
            </span>
          </div>
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
          <Image
            src={"/images/sort.svg"}
            width={20}
            height={20}
            style={{ marginLeft: "8px" }}
          />
          <span className="text-base font-poppins font-medium">Category</span>
        </div>
      ),
      dataIndex: "category",
      key: "category",
      render: (_, record) => {
        return (
          <div className="flex items-center justify-center space-x-2">
            <span className="text-base font-poppins font-medium text-[#474747]">
              {record?.category ? record?.category : "N/A"}
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
          <span className="text-base font-poppins font-medium">Price</span>
        </div>
      ),
      dataIndex: "price",
      key: "price",
      render: (_, record) => {
        return (
          <div className="flex items-center justify-center space-x-2">
            <Image src={"/images/currency_gray.svg"} width={10} height={10} />
            <span className="text-base font-poppins font-medium text-[#474747]">
              {record?.price ? record?.price : "N/A"}
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
          <span className="text-base font-poppins font-medium">
            Items in Stock
          </span>
        </div>
      ),
      dataIndex: "itemsInStock",
      key: "itemsInStock",
      render: (_, record) => {
        return (
          <div className="flex items-center justify-center space-x-2">
            <span className="text-base font-poppins font-medium text-[#474747]">
              {record?.itemsInStock ? record?.itemsInStock : "N/A"}
            </span>
          </div>
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
                  <Button
                    type="link"
                    className="flex items-center space-x-2 text-[#2f9379] font-poppins hover:text-[#2f9379]"
                  >
                    <Image src={"/images/eye.svg"} width={18} height={18} />
                    View Details
                  </Button>
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

  // const data = [
  //   {
  //     no: "1",
  //     name: "Axe Perfume",
  //     category: "Perfume",
  //     price: "100",
  //     itemsInStock: 10,
  //   },
  // ];
  return (
    <div>
      <Head>
        <title>Products</title>
      </Head>
      <h2 className="text-2xl font-barlow font-semibold">Products</h2>
      <div className="tableWrapper">
        <div className="categoryHeader">
          <Space className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between pb-5">
            <Search
              placeholder="Search Product"
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
              onClick={() => setShowProductModal(true)}
            >
              Add Product
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
      {showProductModal && (
        <ProductModal
          show={showProductModal}
          close={() => {
            setShowProductModal(false);
          }}
          categories={categories}
        />
      )}
    </div>
  );
};

export default Index;

export const getServerSideProps = async () => {
  const categories = await categoryApi.getCategories();
  const products = await productApi.getProdcuts();
  return { props: { categories, products } };
};
