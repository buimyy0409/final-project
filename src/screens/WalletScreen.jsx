import { Button, Card, List } from "antd";
import React, { useEffect, useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import ToggleAddPayment from "../modal/ToggleAddPayment";
import ToggleAddReceipt from "../modal/ToggleAddReceipt";
import UpdateTotalReceipt from "../components/UpdateTotalReceipt";
import UpdateTotalPayment from "../components/UpdateTotalPayment";
import UpdateWallet from "../components/UpdateWallet";

const WalletScreen = () => {
  const [isVisibleModalPayment, setIsVisibleModalPayment] = useState(false);
  const [isVisibleModalReceipt, setIsVisibleModalReceipt] = useState(false);
  const [receipt, setReceipt] = useState([]);
  const [payment, setPayment] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalReceipt, setTotalReceipt] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalWallet, setTotalWallet] = useState(0);

  useEffect(() => {
    getAllReceipt();
  }, []);

  const getAllReceipt = async () => {
    const res = await localStorage.getItem("receipt");
    res && setReceipt(JSON.parse(res));
  };

  const handleAddNewReceipt = async (values) => {
    console.log(values);
    if (values.receipt) {
      const items = [...receipt];
      items.push(values);

      await localStorage.setItem("receipt", JSON.stringify(items));
      getAllReceipt();
    }
  };

  useEffect(() => {
    getAllPayment();
  }, []);

  const getAllPayment = async () => {
    const res = await localStorage.getItem("payment");
    res && setPayment(JSON.parse(res));
  };

  const handleAddNewPayment = async (values) => {
    console.log(values);
    if (values.payment) {
      const items = [...payment];
      items.push(values);

      await localStorage.setItem("payment", JSON.stringify(items));
      getAllPayment();
    }
  };

  const handleDeleteReceipt = async (itemName) => {
    const updatedReceipt = receipt.filter((item) => item.receipt !== itemName);
    await localStorage.setItem("receipt", JSON.stringify(updatedReceipt));
    setReceipt(updatedReceipt);
  };

  const handleDeletePayment = async (itemName) => {
    const updatedPayment = payment.filter((item) => item.payment !== itemName);
    await localStorage.setItem("payment", JSON.stringify(updatedPayment));
    setPayment(updatedPayment);
  };
  const formatDate = (timestamp) => {
    const dateObj = new Date(timestamp);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return dateObj.toLocaleDateString(undefined, options);
  };
  return (
    <>
      <div className="container-fluid">
        <Card style={{ marginRight: "20px", marginBottom: "10px" }}>
        <UpdateWallet receipt={receipt} payment={payment} />
        </Card>

        <div className="container row">
          <Card className="col">
            <div className="row">
              <div className="col">
                <Button
                  type="primary"
                  onClick={() => setIsVisibleModalReceipt(true)}
                >
                  Add new receipt
                </Button>
              </div>
              <div className="col">
                <UpdateTotalReceipt receipt={receipt} />
              </div>
            </div>
            <List
              itemLayout="vertical"
              loading={isLoading}
              dataSource={receipt}
              renderItem={(item) => (
                <List.Item
                  key={`${item.name}`}
                  actions={[
                    <DeleteOutlined
                      key="delete"
                      onClick={() => handleDeleteReceipt(item.receipt)}
                    />,
                  ]}
                >
                  <List.Item.Meta
                    title={`Receipt: ${item.receipt}`}
                    description={`Money: ${item.money}`}
                  />
                  <span>{formatDate(item.date)}</span>
                </List.Item>
              )}
            />

            <ToggleAddReceipt
              isVisible={isVisibleModalReceipt}
              onClose={() => setIsVisibleModalReceipt(false)}
              onSaveData={(vals) => handleAddNewReceipt(vals)}
            />
          </Card>
          <Card className="col">
            <div className="row">
              <div className="col">
                <Button
                  type="primary"
                  onClick={() => setIsVisibleModalPayment(true)}
                >
                  Add new payment
                </Button>
              </div>
              <div className="col">
                <UpdateTotalPayment payment={payment} />
              </div>
            </div>

            <List
              itemLayout="vertical"
              loading={isLoading}
              dataSource={payment}
              renderItem={(item) => (
                <List.Item
                  key={`${item.name}`}
                  actions={[
                    <DeleteOutlined
                      key="delete"
                      onClick={() => handleDeletePayment(item.payment)}
                    />,
                  ]}
                >
                  <List.Item.Meta
                    title={`Payment: ${item.payment}`}
                    description={`Money: ${item.money}`}
                  />
                  <span>{formatDate(item.date)}</span>
                </List.Item>
              )}
            />
            <ToggleAddPayment
              isVisible={isVisibleModalPayment}
              onClose={() => setIsVisibleModalPayment(false)}
              onSaveData={(vals) => handleAddNewPayment(vals)}
            />
          </Card>
        </div>
      </div>
    </>
  );
};
export default WalletScreen;
