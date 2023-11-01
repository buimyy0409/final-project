import React, { useEffect, useState } from 'react';

const UpdateWallet = ({ totalReceipt, totalPayment }) => {
  const [totalWallet, setTotalWallet] = useState(0);

  useEffect(() => {
    const calculateTotalWallet = () => {
      setTotalWallet(prevTotalWallet => totalReceipt - totalPayment);
    };

    calculateTotalWallet();
  }, [totalReceipt, totalPayment]);

  return <div>Total Wallet: {totalWallet}</div>;
}

export default UpdateWallet;