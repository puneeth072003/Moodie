const express = require("express");
const cors = require("cors");

const app = express();

const router = require("./src/Router/route");

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use("/api/v1/", router);

app.listen(5000, () => {
  console.log("Server listening to port 5000, ENJOY");
});

