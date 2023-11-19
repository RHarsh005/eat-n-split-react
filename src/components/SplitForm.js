import { useState } from "react";

export function SplitForm({ obj, onSplitAction }) {
  const name = obj?.name;
  const [billAmount, setBillAmount] = useState(0);
  const [yourExpense, setYourExpense] = useState(0);
  const [payer, setPayer] = useState("You");

  function handleSplitCalc(e) {
    const val = Number(e.target.value);
    if (billAmount >= 0 && val >= 0 && val <= billAmount) {
      setYourExpense(val);
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    let currpay = payer === "You" ? billAmount - yourExpense : -yourExpense;
    onSplitAction(currpay);
  }

  return (
    <form
      className="form-split-bill"
      onSubmit={(e) => {
        onSubmit(e);
      }}
    >
      <h2>SPLIT BILL WITH {name}</h2>
      <label>💵 Bill Value:</label>
      <input
        type="number"
        value={billAmount}
        onChange={(e) => {
          let val = Number(e.target.value);
          if (val > 0) {
            setBillAmount(val);
          }
        }}
        placeholder="Total Amount"
      ></input>
      <label>👤 Your Expense:</label>
      <input
        type="number"
        value={yourExpense}
        onChange={(e) => handleSplitCalc(e)}
        placeholder="Your Expense"
      ></input>
      <label>👥 {name}'s Expense:</label>
      <input
        type="number"
        value={billAmount - yourExpense}
        placeholder="Friend's Expense"
        disabled="true"
      ></input>
      <label>🧾 who's paying bill?</label>
      <select value={payer} onChange={(e) => setPayer(e.target.value)}>
        <option value="You">You</option>
        <option value={name}>{name}</option>
      </select>
      <button className="button">split bill</button>
    </form>
  );
}
