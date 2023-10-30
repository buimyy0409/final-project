import { Button, Card } from 'antd';
import React, { useEffect, useState } from 'react'
import ToggleAddPayment from '../modal/ToggleAddPayment';

const WalletScreen = () => {
  const [isVisibleModalWallet, setIsVisibleModalWallet] = useState(false);
  const [wallet, setWallet] = useState();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = async () => {
    const res = await localStorage.getItem("categories");
    res && setCategories(JSON.parse(res));
  };

  const handleAddNewWallet = async (values) => {
    if (values) {
      const items = [...categories];
      items.push(values);

      
      await localStorage.setItem("categories", JSON.stringify(items));
      getAllCategories();
    }
  };
  return (
    <div className="container row">
      <Card className='col p-2'>
        <Button
          type="primary"
          onClick={() => setIsVisibleModalWallet(true)}
        >
          Add new receipt
        </Button>
      <ToggleAddPayment
        isVisible={isVisibleModalWallet}
        onClose={() => setIsVisibleModalWallet(false)}
        // wallet={wallet}
        // onSaveData={(vals) => handleAddNewWallet(vals)}
      />
      </Card>
      <Card className='col'>
        <Button
          type="primary"
          onClick={() => setIsVisibleModalWallet(true)}
        >
          Add new payment
        </Button>
      <ToggleAddPayment
        isVisible={isVisibleModalWallet}
        onClose={() => setIsVisibleModalWallet(false)}
        // wallet={wallet}
        // onSaveData={(vals) => handleAddNewWallet(vals)}
      />
      </Card>
    </div>
  )
}

export default WalletScreen