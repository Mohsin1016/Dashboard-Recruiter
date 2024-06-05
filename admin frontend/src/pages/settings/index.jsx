import { Avatar, Button, Form, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

const index = () => {
  return (
    <div className="grid grid-rows-2 py-5 h-[100vh] md:h-[70vh]">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex flex-col space-y-2 items-center">
            <Avatar
              icon={<UserOutlined />}
              className="flex items-center justify-center"
              size={120}
            />
            <Button
              type="link"
              className="text-sm md:text-base font-medium font-poppins"
              style={{ textTransform: "capitalize", color: "#F49342" }}
            >
              Change
            </Button>
          </div>
          <span
            className="text-base md:text-lg font-medium font-poppins"
            style={{ textTransform: "capitalize", color: "#2f9379" }}
          >
            John Doe
          </span>
        </div>
        <div>
          <Form layout="vertical">
            <Form.Item name="name" className="flex flex-col space-y-2">
              <label
                className="block font-medium mb-2 text-sm md:text-xl"
                htmlFor="name"
              >
                Name
              </label>
              <Input
                placeholder="Name"
                className="text-sm md:text-lg border-2 border-black opacity-40 rounded-xl w-full py-3 md:py-3 px-3 leading-tight focus:outline-none text-black"
              />
            </Form.Item>
            <Form.Item name="email" className="flex flex-col space-y-2">
              <label
                className="block font-medium mb-2 text-sm md:text-xl"
                htmlFor="email"
              >
                Email
              </label>
              <Input
                placeholder="Email"
                className="text-sm md:text-lg border-2 border-black opacity-40 rounded-xl w-full py-3 md:py-3 px-3 leading-tight focus:outline-none text-black"
              />
            </Form.Item>
            <Form.Item name="phone" className="flex flex-col space-y-2">
              <label
                className="block font-medium mb-2 text-sm md:text-xl"
                htmlFor="phone"
              >
                Phone No
              </label>
              <Input
                placeholder="Phone no"
                className="text-sm md:text-lg border-2 border-black opacity-40 rounded-xl w-full py-3 md:py-3 px-3 leading-tight focus:outline-none text-black"
              />
            </Form.Item>
          </Form>
        </div>
        <div className="flex justify-start md:justify-center">
          <Button
            type="link"
            className="text-sm md:text-lg font-medium font-poppins"
            style={{ textTransform: "capitalize", color: "#2f9379" }}
          >
            Change Password
          </Button>
        </div>
      </div>
      <div className="flex items-end justify-end">
        <Button
          className="btn-primary bg-[#2f9379] font-poppins hover:bg-[#2f9379]"
          type="primary"
          size="large"
        >
          Update
        </Button>
      </div>
    </div>
  );
};

export default index;
