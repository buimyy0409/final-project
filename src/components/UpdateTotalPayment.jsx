import React, { useEffect, useState } from "react";

const UpdateTotalPayment = () => {
  const [totalPayment, setTotalPayment] = useState(0);
  const [payment, setPayment] = useState([]);

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < payment.length; i++) {
      total += parseInt(payment[i].money);
    }
    setTotalPayment(total);
  }, [payment]);
  return <div>Total Payment: {totalPayment}</div>;
};

export default UpdateTotalPayment;
