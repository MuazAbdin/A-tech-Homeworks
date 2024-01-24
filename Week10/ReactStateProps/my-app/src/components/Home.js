import React from "react";
import Item from "./Item";

function Home({ store, shouldDiscount }) {
  return (
    <div>
      <h3>
        <strong>Store</strong>
      </h3>
      {store.map((item, idx) => (
        <Item key={idx} {...item} shouldDiscount={shouldDiscount} />
      ))}
    </div>
  );
}

export default Home;
