import { Avatar, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div className=" mt-3">
      <div style={{display:'flex', justifyContent:'left'}}>
      <Link to={'/profile'}>
      <Space direction="vertical" size={16}>
        <Space wrap size={14}>
          <Avatar size="large" icon={<img src="https://i.pinimg.com/564x/db/fc/54/dbfc54ea5447860120435c549e276381.jpg"/>} />
          <h5>Imei Wallet</h5>
        </Space>
      </Space>
      </Link>
      </div>
    </div>
  );
};

export default HeaderComponent;
