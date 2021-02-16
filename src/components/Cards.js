import React from "react";
import "./Cards.css";
import cCard from "./CardData";
const Cards = () => {
  const listItems = cCard.map((card) => (
    <div key={card.id}>
      <div className="cards">
        <p className="card__id">{card.id}</p>
        <h1 className="card__Balance">{`${card.currency} ${card.balance}`}</h1>
        <p className="cardHolderName">{card.name}</p>
        <p className="cardExpiryDate">{`  ${card.expireMonth}/${card.expireYear}`}</p>
      </div>
    </div>
  ));

  return <div className="cardsList">{listItems}</div>;
};

export default Cards;
