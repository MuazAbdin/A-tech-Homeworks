import { useState } from "react";
import "./App.css";
import Hudini from "./components/Hudini";
import Home from "./components/Home";
import Landing from "./components/Landing";

function App() {
  const [data, setData] = useState({
    user: "Robyn",
    store: [
      { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
      { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
      {
        item: "Surround Sound Pelican",
        price: 3099,
        discount: 0.05,
        hottest: true,
      },
    ],
    shouldDiscount: false,
    currentPage: "Landing",
  });

  const switcher = () => {
    const newData = { ...data };
    newData.currentPage =
      newData.currentPage === "Landing" ? "Home" : "Landing";
    setData(newData);
  };

  return (
    <>
      <h1>EX1</h1>
      <Hudini />
      <h1>EX2</h1>
      <button onClick={switcher}>
        Go to{" "}
        <strong>{data.currentPage === "Landing" ? "Home" : "Landing"}</strong>{" "}
        Page
      </button>
      {data.currentPage === "Landing" ? (
        <Landing user={data.user} store={data.store} />
      ) : (
        <Home store={data.store} shouldDiscount={data.shouldDiscount} />
      )}
    </>
  );
}

export default App;
