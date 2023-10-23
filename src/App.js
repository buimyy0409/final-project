import { Layout } from 'antd';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SiderComponent from './components/SiderComponent';
import ProfileScreen from './screens/ProfileScreen';
import Dashboard from './screens/Dashboard';
import ReceiptScreen from './screens/ReceiptScreen';
import PaymentScreen from './screens/PaymentScreen';

const { Content, Sider } = Layout;

    const App = () => {
      return (
        <BrowserRouter>
          <Layout>
            <SiderComponent />
    
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/receipt" element={<ReceiptScreen />} />
              <Route path="/payment" element={<PaymentScreen />} />
            </Routes>
    
          </Layout>
        </BrowserRouter>
      );
    };

export default App