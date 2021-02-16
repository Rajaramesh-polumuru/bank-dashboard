import React from "react";
import "./MyTransactions.css";
import tData from "./MyTransactionsData";

const MyTransactions = () => {
  const listItems = tData.map((item) => (
    <div key={item.id}>
      <div className="transactions">
        <h4 className="Transcation__name">{item.name}</h4>
        <p className="Transcation__date">{item.date}</p>
        <p className="Transcation__type">{item.type}</p>
        <p className="Transcation__value">{item.value}</p>
      </div>
    </div>
  ));

  return <div className="myTransactions">{listItems}</div>;
};

export default MyTransactions;
