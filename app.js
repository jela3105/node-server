const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/hello-world", (req, res) => {
  res.send("Hello world");
});
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});
app.listen(8080);
