import React, { useContext } from "react";
import "../../src/App.css";
import { Globalcontext } from "../context/Globalstore";
const Incomeexpenses = () => {
  const { transactions } = useContext(Globalcontext);

  const amounts = transactions.map((transaction) => transaction.amount);
  console.log(amounts);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;
  console.log(income, expense);

  return (
    <div className="ex-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{expense}</p>
      </div>
    </div>
  );
};

export default Incomeexpenses;
