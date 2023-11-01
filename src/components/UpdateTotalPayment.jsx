import React, { useEffect, useState } from "react";

const UpdateTotalPayment = ({ payment }) => {
  const [totalPayment, setTotalPayment] = useState(0);

  useEffect(() => {
    const calculatedTotalPayment = payment.reduce((acc, item) => acc + parseInt(item.money), 0);
    setTotalPayment(calculatedTotalPayment);
    localStorage.setItem("totalPayment", calculatedTotalPayment.toString());
  }, [payment]);

  return <div>Total Payment: {totalPayment}</div>;
};

export default UpdateTotalPayment;