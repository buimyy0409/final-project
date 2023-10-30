import { Layout, Menu } from "antd";
import {
  WalletMoney,
  Element4,
  Profile2User,
  Setting2,
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
      key: "wallet",
      icon: <WalletMoney size={menuOptions.size} color={menuOptions.color} />,
      label: "Wallet",
    },
    {
      key: "setting",
      icon: <Setting2 style={{alignItems:'end'}} size={menuOptions.size} color={menuOptions.color} />,
      label: "Setting",
    },
  ];
  return (
    <Sider
      theme="light"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: "space-around",
      }}
    >
      <Menu items={items} onClick={(e) => navigate(`/${e.key}`)} />
    </Sider>
  );
};

export default SiderComponent;
