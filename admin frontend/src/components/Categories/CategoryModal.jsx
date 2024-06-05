import categoryApi from "@/lib/category";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input, Modal, notification } from "antd";

const CategoryModal = (props) => {
  console.log("category", props.data);
  const queryClient = useQueryClient();
  const addMutation = useMutation(
    ["categories"],
    async (data) => {
      await categoryApi.addCategory(data);
    },
    {
      onError: (data) => {},
      onSuccess: () => {
        notification.open({
          type: "success",
          message: "Category saved successfully",
          placement: "top",
        });
        queryClient.invalidateQueries(["categories"]);
        props.close();
      },
    }
  );

  const updateMutation = useMutation(
    ["categories"],
    async ({ id, category }) => {
      await categoryApi.updateCategory(id, category);
    },
    {
      onError: (data) => {},
      onSuccess: () => {
        notification.open({
          type: "success",
          message: "Category updated successfully",
          placement: "top",
        });
        queryClient.invalidateQueries(["categories"]);
        props.setData(null);
        props.close();
      },
    }
  );

  const handleSubmit = (values) => {
    console.log("values", values);
    if (props.data) {
      updateMutation.mutate({ id: props?.data?.id, category: values.name });
    } else {
      addMutation.mutate(values);
    }
  };

  return (
    <Modal
      title={props?.data ? "Update Category" : "Add New Category"}
      open={props.show}
      footer={null}
      onCancel={() => {
        props.setData(null);
        props.close();
      }}
    >
      <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
        <Form
          size="large"
          name="basic"
          initialValues={{
            name: props?.data?.name ? props.data.name : "",
          }}
          onFinish={handleSubmit}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Form.Item
            style={{ width: "100%" }}
            name="name"
            rules={[
              {
                required: true,
                message: "Input category name",
              },
            ]}
          >
            <Input placeholder="Category name" style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item>
            <Button
              className="btn-primary"
              size="large"
              type="primary"
              htmlType="submit"
            >
              {addMutation.isLoading || updateMutation.isLoading
                ? "Submitting..."
                : "Submit"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default CategoryModal;
