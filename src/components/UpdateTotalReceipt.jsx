import React, { useEffect, useState } from "react";

const UpdateTotalReceipt = () => {
  const [totalReceipt, setTotalReceipt] = useState(0);
  const [receipt, setReceipt] = useState([]);

  useEffect(() => {
    let totalReceipt = 0;
    for (let i = 0; i < receipt.length; i++) {
      totalReceipt += parseInt(receipt[i].money);
    }
    setTotalReceipt(totalReceipt);
  }, [receipt]);
  console.log(totalReceipt)

  return(
    <>
   <div>Total Payment: {totalReceipt}</div>
   </>);
};

export default UpdateTotalReceipt;
