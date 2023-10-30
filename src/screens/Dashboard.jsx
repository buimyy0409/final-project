import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { ProfileCircle, Setting2, Setting3, WalletMoney } from "iconsax-react";

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#edf1f6" }}>
        <HeaderComponent />
        <div className="row mt-2">
          <div className="col-8">
            <h4>Dashboard</h4>
            <Card className="shadow p-2 bg-body rounded">
              <div className="row">
                <div className="col">
                  <h1 style={{ fontSize: "60px" }}>Hi, Imei!</h1>
                  <h6>What are you doing today?</h6>
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
                      height: "90%",
                      borderRadius: "100%",
                    }}
                    src="https://i.pinimg.com/564x/db/fc/54/dbfc54ea5447860120435c549e276381.jpg"
                    alt=""
                  />
                </div>
              </div>
            </Card>
            <div className="row" style={{ padding: "12px" }}>
              <Card className="col mt-3 shadow p-3 mb-3 bg-body rounded">
                <WalletMoney size="34" color="#FF8A65" /> <br />
                <p style={{ fontSize: "18px" }}>Check your monthly money</p>
              </Card>
              <Card className="col mt-3 shadow p-3 mb-3 bg-body rounded" style={{ marginLeft: "10px" }}>
                <Setting3 size="34" color="#334eac" /> <br />
                <p style={{ fontSize: "18px" }}>Apply settings to your wallet</p>
              </Card>
            </div>
          </div>
          <div className="col">
            <h4>Calendar</h4>
            <Card>calerdar</Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
