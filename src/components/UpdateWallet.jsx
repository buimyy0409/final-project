import React, { useState } from 'react';
import { Card, Button } from 'antd'; 

const UpdateWallet = ({ totalReceipt, totalPayment }) => {
  const [totalWallet, setTotalWallet] = useState(0);

  const calculateTotalWallet = () => {
    const receipt = parseFloat(totalReceipt);
    const payment = parseFloat(totalPayment);

    if (!isNaN(receipt) && !isNaN(payment)) {
      setTotalWallet(receipt - payment);
    } else if (!isNaN(receipt)) {
      setTotalWallet(receipt);
    } else if (!isNaN(payment)) {
      setTotalWallet(-payment);
    } else {
      setTotalWallet(0);
    }
  };

  const handleClick = () => {
    calculateTotalWallet();
  };

  return (
    <Card style={{ marginRight: "20px", marginBottom: "10px" }}>
      <div className='mb-2'>Total Wallet: {totalWallet}</div> 
      <Button onClick={handleClick}>Calculate</Button>
    </Card>
  );
};

export default UpdateWallet;