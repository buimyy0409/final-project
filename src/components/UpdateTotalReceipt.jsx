import React, { useEffect, useState } from 'react'

const UpdateTotalReceipt = () => {
    const [totalReceipt, setTotalReceipt] = useState(0);
    const [receipt, setReceipt] = useState([]);

    useEffect(() => {
       
        const total = receipt.reduce((acc, item) => acc + item.money, 0);
        setTotalReceipt(total);
      }, [receipt]);
  return (
    <div>Total Receipt: {totalReceipt}</div>
  )
}

export default UpdateTotalReceipt