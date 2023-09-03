const express = require("express");
const app = express();
const cors = require("cors");
const qrRouter = require("./qrRouter");

app.use(express.json());
app.use(cors());

app.use("/qr", qrRouter);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
