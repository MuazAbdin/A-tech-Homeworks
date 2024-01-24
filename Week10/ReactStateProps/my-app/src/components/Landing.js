import React from "react";

function Landing({ user, store }) {
  const { item, price } = store.filter((i) => i.hottest)[0];
  return (
    <div>
      Welcome, {user}. The hottest item is {item} for ${price}
      <hr />
    </div>
  );
}

export default Landing;
