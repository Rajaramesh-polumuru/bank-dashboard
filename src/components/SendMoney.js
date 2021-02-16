import React from "react";
import "./SendMoney.css";
import friends from "./friends.png";
function SendMoney() {
  return (
    <div className="sendOption">
      <img
        className="friends"
        src={friends}
        alt="img not found"
        height="100%"
        width="100%"
      />

      <p>Amount</p>
      <div className="sendInputDiv">
        <input className="sendInput" />
        <h3>GBP</h3>
      </div>
      <button id="sendBut">SEND MONEY</button>
    </div>
  );
}

export default SendMoney;
