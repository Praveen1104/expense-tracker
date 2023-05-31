import React, { useContext } from "react";
import "../../src/App.css";
import { Globalcontext } from "../context/Globalstore";
import Trans from "./Trans";
const Transaction = () => {
  const { transactions } = useContext(Globalcontext);
  console.log(transactions);
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Trans transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </div>
  );
};

export default Transaction;
