import React, { useEffect, useState } from "react";

const UpdateTotalReceipt = ({ receipt }) => {
  const [totalReceipt, setTotalReceipt] = useState(0);

  useEffect(() => {
    const calculatedTotalReceipt = receipt.reduce((acc, item) => acc + parseInt(item.money), 0);
    setTotalReceipt(calculatedTotalReceipt);
    localStorage.setItem("totalReceipt", calculatedTotalReceipt.toString());
  }, [receipt]);

  return <div>Total Receipt: {totalReceipt}</div>;
};

export default UpdateTotalReceipt;