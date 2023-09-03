const qrCode = require("qrcode");
exports.scanQrCode = (req, res) => {
  const url = req.body.url;

  if (url.length === 0) {
    res.send("empty data!");
  }

  qrCode.toDataURL(url, (err, url) => {
    console.log(url);
    res.send(url);
  });
};
