import { Layout } from 'antd';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SiderComponent from './components/SiderComponent';
import ProfileScreen from './screens/ProfileScreen';
import Dashboard from './screens/Dashboard';
import WalletScreen from './screens/WalletScreen';
import SettingScreen from './screens/SettingScreen';

const { Content, Sider } = Layout;

    const App = () => {
      return (
        <BrowserRouter>
          <Layout>
            <SiderComponent />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/wallet" element={<WalletScreen />} />
              <Route path="/setting" element={<SettingScreen />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      );
    };

export default App