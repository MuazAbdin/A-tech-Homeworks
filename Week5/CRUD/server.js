const express = require("express");
const app = express();
const router = require("./routers");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/sanity", router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is now listening at ${PORT}`);
});
