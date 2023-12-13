const express = require("express");
const app = express();
const path = require("path");

const store = [
  { name: "table", inventory: 3, price: 800 },
  { name: "chair", inventory: 16, price: 120 },
  { name: "couch", inventory: 1, price: 1200 },
  { name: "picture frame", inventory: 31, price: 70 },
];

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));

app.get("/", (req, res) => {
  console.log("Server is up and running smoothly");
  res.send("Server is up and running smoothly");
});

app.get("/all-products", (req, res) => {
  res.send(store);
});

app.get("/priceCheck/:name", (req, res) => {
  const name = req.params.name;
  const price = store.find((item) => item.name === name)?.price || null;
  res.send({ price });
});

app.get("/buy/:name", (req, res) => {
  const name = req.params.name;
  const item = store.find((item) => item.name === name);
  if (item.inventory === 0) return res.send(`No ${name} left in the inventory`);
  res.send({ name: item.name, price: item.price, inventory: --item.inventory });
});

app.get("/sale/", (req, res) => {
  const isAdmin = req.query.admin;
  if (isAdmin?.toLowerCase() === "true") {
    store.forEach((item) => (item.price *= item.inventory > 10 ? 0.5 : 1));
  }
  res.send(store);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
