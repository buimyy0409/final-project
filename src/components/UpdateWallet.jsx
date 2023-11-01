import React, { useEffect, useState } from 'react';

const UpdateWallet = ({ totalReceipt, totalPayment }) => {
  const [totalWallet, setTotalWallet] = useState(0);

  useEffect(() => {
    if (Number.isFinite(totalReceipt) && Number.isFinite(totalPayment)) {
      setTotalWallet(totalReceipt - totalPayment);
    }
  }, [totalReceipt, totalPayment]);

  return <div>Total Wallet: {totalWallet}</div>;
};

export default UpdateWallet;