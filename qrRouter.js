const express = require("express");
const { scanQrCode } = require("./qrController");
const qrRouter = express.Router();

qrRouter.post("/scanQrCode", scanQrCode);

module.exports = qrRouter;
