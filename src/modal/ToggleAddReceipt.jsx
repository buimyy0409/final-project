import React, { useState } from "react";
import { DatePicker, Form, Input, Modal } from "antd";
const ToggleAddReceipt = ({ isVisible, onClose }) => {
  const [componentSize, setComponentSize] = useState("default");
  const [form] = Form.useForm();
  const handleClose = () => {
    form.resetFields();
    onClose();
  };
  const handleAddReceipt = (values) => {
    console.log(values);
  };

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <Modal open={isVisible} onCancel={handleClose} onOk={() => form.submit()}>
      <Form
        form={form}
        onFinish={handleAddReceipt}
        layout="horizontal"
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="Receipt" name="receipt">
          <Input />
        </Form.Item>
        <Form.Item label="Money" name="money">
          <Input type="number" />
        </Form.Item>
        <Form.Item label="Date" name="date">
          <DatePicker />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default ToggleAddReceipt;
