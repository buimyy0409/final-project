import React, { useState } from "react";
import { DatePicker, Form, Input, Modal } from "antd";
const ToggleAddPayment = ({ isVisible, onClose, onSaveData }) => {
  const [componentSize, setComponentSize] = useState("default");
  const [form] = Form.useForm();
  const handleClose = () => {
    form.resetFields();
    onClose();
  };
  const handleAddPayment = (values) => {
    console.log(values);
    onSaveData(values);

  };

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <Modal open={isVisible} onCancel={handleClose} onOk={() => {form.submit(); onClose()}}>
      <Form
        form={form}
        onFinish={handleAddPayment}
        layout="horizontal"
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="Payment" name="payment">
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
export default ToggleAddPayment;
