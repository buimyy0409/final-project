import { Button, Card, List } from "antd";
import React, { useEffect, useState } from "react";
import ToggleAddPayment from "../modal/ToggleAddPayment";
import ToggleAddReceipt from "../modal/ToggleAddReceipt";
import UpdateTotalReceipt from "../components/UpdateTotalReceipt";
import UpdateTotalPayment from "../components/UpdateTotalPayment";

const WalletScreen = () => {
  const [isVisibleModalPayment, setIsVisibleModalPayment] = useState(false);
  const [isVisibleModalReceipt, setIsVisibleModalReceipt] = useState(false);
  const [receipt, setReceipt] = useState([]);
  const [payment, setPayment] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <div className="container row">
      <Card className="col">
        <div className="row">
          <div className="col">
          <Button type="primary" onClick={() => setIsVisibleModalReceipt(true)}>
            Add new receipt
          </Button>
          </div>
          <div className="col">
          <UpdateTotalReceipt/>
          </div>
        </div>
        <List
          itemLayout="vertical"
          loading={isLoading}
          dataSource={receipt}
          renderItem={(item) => (
            <List.Item key={`${item.name}`}>
              <List.Item.Meta title={item.receipt} description={item.money} />
              <span>{item.date}</span>
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
          <Button type="primary" onClick={() => setIsVisibleModalPayment(true)}>
          Add new payment
        </Button>
          </div>
          <div className="col">
            <UpdateTotalPayment/>
          </div>
        </div>
        
        <List
          itemLayout="vertical"
          loading={isLoading}
          dataSource={payment}
          renderItem={(item) => (
            <List.Item key={`${item.name}`}>
              <List.Item.Meta title={item.payment} description={item.money} />
              <span>{item.date}</span>
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
  );
};
export default WalletScreen;
