const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT, function (req, res) {
  console.log("app running on port 8080");
});
