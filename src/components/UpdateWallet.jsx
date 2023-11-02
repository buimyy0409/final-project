import React, { useEffect, useState } from 'react';
import { Card } from 'antd';

const UpdateWallet = ({ receipt, payment }) => {
  const [totalWallet, setTotalWallet] = useState(0);

  useEffect(() => {
    const calculateTotalWallet = () => {
      const totalReceiptAmount = receipt.reduce((total, item) => total + parseInt(item.money), 0);
      const totalPaymentAmount = payment.reduce((total, item) => total + parseInt(item.money), 0);
      return totalReceiptAmount - totalPaymentAmount;
    };

    setTotalWallet(calculateTotalWallet());
  }, [receipt, payment]);

  return (
      <div className='mb-2'>Total Wallet: {totalWallet}</div>
  );
};

export default UpdateWallet;