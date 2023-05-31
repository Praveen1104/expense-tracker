import React, { useContext, useState } from "react";
import "../../src/App.css";
import { Globalcontext } from "../context/Globalstore";
const Addtransaction = () => {
  const { addtransaction } = useContext(Globalcontext);
  const submit = (e) => {
    e.preventDefault();

    const newtransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    addtransaction(newtransaction);
    setext("");
    setamount(0);
  };
  const [text, setext] = useState("");
  const [amount, setamount] = useState(0);
  return (
    <div>
      <h3>Add new Transaction</h3>
      <form onSubmit={submit}>
        <div className="form-control">
          <label>text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setext(e.target.value)}
            placeholder="Enter text"
          />
        </div>
        <div className="form-control">
          <label>
            Amount <br />
            (negative - Expense, positive- Income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setamount(e.target.value)}
            placeholder="Enter Amount"
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
};

export default Addtransaction;
