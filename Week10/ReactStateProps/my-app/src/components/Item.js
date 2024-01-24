import React from "react";

function Item({ item, price, discount, shouldDiscount }) {
  return (
    <div>
      {item}: ${shouldDiscount ? price * (1 - discount) : price}
    </div>
  );
}

export default Item;
