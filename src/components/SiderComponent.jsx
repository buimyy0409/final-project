import { Layout, Menu } from "antd";
import {
  WalletMoney,
  MoneyRecive,
  Element4,
  Profile2User,
} from "iconsax-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;
const SiderComponent = () => {
  const navigate = useNavigate();
  const menuOptions = {
    size: 30,
    color: "#676767",
  };
  const items = [
    {
      key: "",
      icon: <Element4 size={menuOptions.size} color={menuOptions.color} />,
      label: "Dashboard",
    },
    {
      key: "profile",
      icon: <Profile2User size={menuOptions.size} color={menuOptions.color} />,
      label: "Profile",
    },
    {
      key: "receipt",
      icon: <MoneyRecive size={menuOptions.size} color={menuOptions.color} />,
      label: "Receipt",
    },
    {
      key: "payment",
      icon: <WalletMoney size={menuOptions.size} color={menuOptions.color} />,
      label: "Payment",
    },
  ];
  return (
    <Sider
      theme="light"
      collapsed
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <Menu items={items} onClick={(e) => navigate(`/${e.key}`)} />
    </Sider>
  );
};

export default SiderComponent;
