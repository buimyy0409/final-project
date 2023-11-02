import React, { useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { ProfileCircle, Setting2, Setting3, WalletMoney } from "iconsax-react";
import CalendarComponent from "../components/CalendarComponent";
import UpdateWallet from "../components/UpdateWallet";


const Dashboard = ({totalWallet}) => {
  const [receipt, setReceipt] = useState([]);

  const [payment, setPayment] = useState([]);

  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#edf1f6" }}>
        <HeaderComponent />
        <div className="row mt-2">
          <div className="col-7">
            <h4>Dashboard</h4>
            <Card className="shadow p-2 bg-body rounded">
              <div className="row">
                <div className="col">
                  <h1 style={{ fontSize: "60px" }}>Hi, Imei!</h1>
                  <h5>What are you doing?</h5>
                  <h5>About our wallet</h5>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      lineHeight: "50px",
                      fontSize: "18px",
                    }}
                  >
                    <Link to={"/profile"} style={{ textDecoration: "none" }}>
                      <ProfileCircle /> My profile
                    </Link>
                    <Link to={"/wallet"} style={{ textDecoration: "none" }}>
                      <WalletMoney /> Manage wallet
                    </Link>
                    <Link to={"/setting"} style={{ textDecoration: "none" }}>
                      <Setting2 /> Go to settings
                    </Link>
                  </div>
                </div>
                <div
                  className="col"
                  style={{
                    display: "flex",
                    justifyContent: "right",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{
                      width: "80%",
                      height: "70%",
                      borderRadius: "100%",
                    }}
                    src="https://i.pinimg.com/564x/db/fc/54/dbfc54ea5447860120435c549e276381.jpg"
                    alt=""
                  />
                </div>
              </div>
            </Card>
            <div className="row mt-2" style={{ padding: "10px" }}>
              <Card className="col mt-3 shadow p-3 mb-3 bg-body rounded">
                <WalletMoney size="34" color="#FF8A65" /> <br />
                <p style={{ fontSize: "18px" }}>Check your monthly money</p>
                <span><UpdateWallet
                  receipt={receipt}
                  payment={payment}
                  totalWallet={totalWallet}
                /></span>
              </Card>
              <Card
                className="col mt-3 shadow p-3 mb-3 bg-body rounded"
                style={{ marginLeft: "10px" }}
              >
                <Setting3 size="34" color="#334eac" /> <br />
                <p style={{ fontSize: "18px" }}>
                  Apply settings to your wallet
                </p>
              </Card>
            </div>
          </div>
          <div className="col">
            <h4>Calendar</h4>
            <div className="col shadow p-3 bg-body rounded">
              <CalendarComponent />
            </div>
            <Card className="mt-2">
              <img
                style={{
                  width: "350px",
                  height:'140px',
                  borderRadius: "10px",
                }}
                src="https://i.pinimg.com/474x/e9/0e/9a/e90e9ac5dd1ace1f9611540827634741.jpg"
                alt=""
              />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
