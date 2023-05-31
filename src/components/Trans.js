import React, { useContext } from "react";
import "../../src/App.css";
import { Globalcontext } from "../context/Globalstore";
const Trans = ({ transaction }) => {
  const { deletetransaction } = useContext(Globalcontext);
  const sign = transaction.amount < 0 ? "" : "+";
  return (
    <div>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}{" "}
        <span>
          {sign}
          {transaction.amount}
        </span>
        <button
          onClick={() => deletetransaction(transaction.id)}
          className="delete"
        >
          X
        </button>
      </li>
    </div>
  );
};

export default Trans;
