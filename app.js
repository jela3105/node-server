const express = require("express");
const hbs = require("hbs");

const app = express();

//handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", { name: "Jela3105", title: "Web server with node" });
});

app.get("/hello-world", (req, res) => {
  res.send("hello world");
});

app.get("/generic", (req, res) => {
  res.render("generic", { name: "Jela3105", title: "Web server with node" });
});

app.get("/elements", (req, res) => {
  res.render("elements", { name: "Jela3105", title: "Web server with node" });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(8080);
